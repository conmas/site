const rss_url = 'https://hachyderm.io/@connor.rss';
let tootList = document.getElementById('mastodon');

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
			let toot = document.createElement('div');
			toot.classList.add("toot");
			
			let dateText = `${monthFormatter.format(date)} ${dayFormatter.format(date)}, ${yearFormatter.format(date)}`;
			let link = document.createElement('a');
			link.target = '_blank';
			link.href = el.querySelector("link").textContent;
			link.textContent = "See post";
			
			let tootDetails = document.createElement('p');
			tootDetails.classList.add("toot-details");
			tootDetails.textContent = dateText;
			let separator = document.createTextNode(' · ');
			tootDetails.appendChild(separator);
			tootDetails.appendChild(link);
			
			toot.appendChild(tootDetails);
			
			let tootBody = document.createElement('p');
			tootBody.classList.add("toot-body");
			tootBody.innerHTML = decodeEntity(content);
			toot.appendChild(tootBody);
			
			let media = el.querySelector("content");
			if (media !== null) {
				let mediaUrl = media.getAttribute("url");
				if (mediaUrl !== null) {
					let img = document.createElement('img');
					img.src = mediaUrl;
					div.appendChild(img);
				}
			}
			
			tootList.appendChild(toot);
		});
	});

function decodeEntity(inputStr) {
	var textarea = document.createElement("textarea");
	textarea.innerHTML = inputStr;
	return textarea.value;
}
