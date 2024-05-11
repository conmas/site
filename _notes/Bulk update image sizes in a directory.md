---
layout: note
title: Bulk update image sizes in a directory
date: 2024-03-10
permalink: /bulk-update-image-widths
tags:
  - tutorials
---
This script takes a specified directory, looks for images based on their file extensions (`.png`, `.jpg`, `.jpeg`, and more), and resizes them to a user-configurable width while maintaining their aspect ratio. The script then saves them to a target directory, rather than overwriting the original file, so you can confirm everything looks good.

## Prerequisites
Aside from having Python installed, this script requires the Pillow library, which is a fork of PIL (Python Imaging Library). Example command for installation using [Homebrew](https://formulae.brew.sh/formula/pillow) below.

```shell
brew install Pillow
```

## Script

```python
import argparse
from PIL import Image
import os

def resize_images(input_directory, output_directory, new_width):
	"""
	Resize images in the specified input directory to a specified new width if they are wider than new_width,
	maintaining the aspect ratio, and save them to the output directory.
	"""
	# Create the output directory if it doesn't exist
	if not os.path.exists(output_directory):
		os.makedirs(output_directory)

	for filename in os.listdir(input_directory):
		if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
			input_path = os.path.join(input_directory, filename)
			output_path = os.path.join(output_directory, filename)

			with Image.open(input_path) as img:
				# Only resize if the image is wider than the specified width
				if img.width > new_width:
					# Calculate the new height to maintain the aspect ratio
					new_height = int((new_width / img.width) * img.height)
					# Resize the image with high-quality resampling
					img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
					# Save the resized image
					img.save(output_path)
					print(f"Resized and saved: {filename}")
				else:
					print(f"Skipped resizing: {filename}")

	print("Processing completed.")

if __name__ == "__main__":
	parser = argparse.ArgumentParser(description="Resize images to a specified width while maintaining aspect ratio, only if they are wider than the specified width.")
	parser.add_argument('input_directory', type=str, help='Directory containing the images.')
	parser.add_argument('output_directory', type=str, help='Directory to save the resized or copied images.')
	parser.add_argument('new_width', type=int, help='New width for the images.')
	
	args = parser.parse_args()
	
	resize_images(args.input_directory, args.output_directory, args.new_width)
```

## Usage
The command takes three parameters:

- `input_directory`: Directory containing the images to resize.
- `output_directory`: Directory where resized images will be saved.
- `new_width`: New width for the images.

```shell
python3 resize_images.py path/to/input/directory path/to/output/directory 800
```

This script can be easily adjusted to support other image file extensions supported by the Python Imaging Library. Reach out if you have any questions or recommendations for improvements.
