// display the links in the header
let links_container = document.querySelector("header .container .links");
let url = "../../test.json";
fetch(url)
	.then((resolved) => {
		return resolved.json();
	})
	.then((data) => {
		const links_container_html = "";
		data.map((ele) => {
			return `<li>${ele.link}</li>`;
		});
	});
