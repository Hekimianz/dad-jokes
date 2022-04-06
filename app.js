const ul = document.querySelector("#jokes");
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    const li = document.createElement("li");
    li.classList.add("joke");
    li.textContent = res.data.joke;
    ul.appendChild(li);
}

const button = document.querySelector("#getJokeBtn");
button.addEventListener("click", getDadJoke);
