const link = "http://localhost:5000/api/v1/marketplace-data";

method = { method: "GET" };

const getData = async () => {
	const data_container = document.querySelector(".data .container");
	let { data } = await axios.get(link);
	data = data.data;
	data = data.map((datum) => {
		const { owner, title, desc, img, category } = datum;
		console.log(`localhost:5000/images/${img}`);
		return `<div class="datum">  
					<div class="image">
						<img src=/images/${img} alt="" />
					</div>
					<div class="text">
						<p class="title">${title}</p>
						<p class="prov">Data provider : <span class="provider">${owner}</span></p>
						<p class="desc">${desc}</p>
					</div>
				</div>`;
	});
	data_container.innerHTML = data.join("");
};
getData();

// the filter function :
const select = document.querySelector("select");
console.log(select);
