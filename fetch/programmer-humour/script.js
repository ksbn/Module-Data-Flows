const button = document.getElementById("loadComicBtn");
const comicContainer = document.getElementById("comicContainer");
const errorMessage = document.getElementById("errorMessage");

async function fetchLatestComic() {
    const endpoint = "https://xkcd.now.sh/?comic=latest";

    try {
        errorMessage.textContent = "";
        comicContainer.innerHTML = "";

        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Received data:", data);

        const imgElement = document.createElement("img");
        imgElement.src = data.img;
        imgElement.alt = data.alt || "XKCD Comic";

        comicContainer.appendChild(imgElement);

    } catch (error) {
        console.error("Error fetching comic:", error);
        errorMessage.textContent = "Failed to load comic. Please try again later.";
    }
}

button.addEventListener("click", fetchLatestComic);
