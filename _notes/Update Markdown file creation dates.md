---
layout: note
title: Update Markdown file creation dates
date: 2024-03-09
permalink: /markdown-date-script
tags: tutorial
---

As I've migrated files between different [apps](https://stephango.com/file-over-app) over the years, in many cases the act of exporting or recreating notes has created inconsistency between the actual creation date (metadata in Finder) and the `date` metadata added to the top of the file in YAML front matter. 

This is a simple utility that takes a directory, finds Markdown files, checks front matter for either `date: YYYY-MM-DD` or `date: MM-DD-YYYY`, and updates the file's creation date using the macOS `setfile` command.

```python
import os
import re
import subprocess
import sys
from datetime import datetime

def update_file_dates(directory):
    # Regex to match date in front matter
    date_pattern = re.compile(r'^date: (\d{4}-\d{2}-\d{2}|\d{2}-\d{2}-\d{4})')

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):  # or any other extension you're targeting
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r') as f:
                        for line in f:
                            date_match = date_pattern.match(line)
                            if date_match:
                                date_str = date_match.group(1)
                                # Handle different date formats
                                try:
                                    if '-' in date_str:
                                        parts = date_str.split('-')
                                        if len(parts[0]) == 4:  # yyyy-mm-dd
                                            date_obj = datetime.strptime(date_str, '%Y-%m-%d')
                                        else:  # mm-dd-yyyy
                                            date_obj = datetime.strptime(date_str, '%m-%d-%Y')
                                        # Format date for setfile command
                                        formatted_date = date_obj.strftime('%m/%d/%Y %H:%M:%S')
                                        # Update file creation date
                                        subprocess.run(['setfile', '-d', formatted_date, file_path])
                                except ValueError as e:
                                    print(f"Error parsing date for file {file_path}: {e}")
                                break  # Stop reading file after finding the date
                except Exception as e:
                    print(f"Failed to process file {file_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python update_file_dates.py <directory>")
        sys.exit(1)
    directory = sys.argv[1]
    update_file_dates(directory)
```

### Usage

```shell
python3 update_file_dates.py /path/to/your/documents
```

This script can be easily adjusted to support `.txt` files, other date front matter like `created`, or other date formats, if needed. Reach out if you have any questions or recommendations for improvements.