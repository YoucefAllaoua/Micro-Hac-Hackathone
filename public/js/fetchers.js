let users_link = "http://localhost:5000/api/v1/requested-data";
method = { method: "GET" };

const getData = async (url) => {
	let { data } = await axios.get(url);
	console.log(data);
};
getData(users_link);
