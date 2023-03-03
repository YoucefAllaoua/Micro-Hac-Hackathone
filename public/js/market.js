const link = "http://localhost:5000/api/v1/marketplace-data";

method = { method: "GET" };

fetch(link, method).then((data) => {
	console.log(data);
});
