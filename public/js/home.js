// display the links in the header
let links_container = document.querySelector("header .container .links");
let url = "../../test.json";
fetch(url)
	.then((resolved) => {
		return resolved.json();
	})
	.then((data) => {
		data = data.map((ele) => {
			return `<a href=${ele.url} ><li class="link" >${ele.link}</li></a>`;
		});
		const links_container_html = data.join("");
		links_container.innerHTML = links_container_html;
	});
