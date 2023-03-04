const form = document.querySelector(".form");
const companyName = document.querySelector("#companyName");
const title = document.querySelector("#DataTitle");
const desc = document.querySelector("#description");
const category = document.querySelector("#category");

form.onsubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("/api/v1/requested-data", {
            title: title.value,
            desc: desc.value,
            owner: companyName.value,
            category: category.value
        })
    } catch (error) {
        console.log(error);
    }
}