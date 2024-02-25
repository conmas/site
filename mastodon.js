const rss_url = 'https://hachyderm.io/@connor.rss';
let mastoDiv = document.getElementById('mastodon');

fetch(rss_url)
	.then(response => response.text())
	.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
	.then(data => {
		console.log(data);
		const items = data.querySelectorAll("item");
		const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
		const dayFormatter = new Intl.DateTimeFormat('en', { day: 'numeric' });
		const yearFormatter = new Intl.DateTimeFormat('en', { year: 'numeric' });
		items.forEach(el => {
			let content = el.querySelector("description").textContent.trim();
			if (content.includes("Content warning:")) {
				return;
			}
			let date = new Date(el.querySelector("pubDate").textContent);
			let div = document.createElement('div'); // Create a div instead of an article

			let dateText = `${monthFormatter.format(date)} ${dayFormatter.format(date)}, ${yearFormatter.format(date)}`;
			let link = document.createElement('a');
			link.target = '_blank';
			link.href = el.querySelector("link").textContent;
			link.textContent = "Read more"; // Link text

			// Create a container for the date and the link, display them inline
			let header = document.createElement('div');
			header.style.display = 'flex';
			header.style.alignItems = 'center';
			header.style.justifyContent = 'space-between';

			let dateElement = document.createElement('h3');
			dateElement.textContent = dateText;
			header.appendChild(dateElement);

			let separator = document.createTextNode(' · ');
			header.appendChild(separator);
			header.appendChild(link);

			div.appendChild(header);

			let paragraph = document.createElement('p');
			paragraph.innerHTML = decodeEntity(content);
			div.appendChild(paragraph);

			let media = el.querySelector("content");
			if (media !== null) {
				let mediaUrl = media.getAttribute("url");
				if (mediaUrl !== null) {
					let img = document.createElement('img');
					img.src = mediaUrl;
					div.appendChild(img);
				}
			}

			mastoDiv.appendChild(div);
		});
	});

function decodeEntity(inputStr) {
	var textarea = document.createElement("textarea");
	textarea.innerHTML = inputStr;
	return textarea.value;
}
