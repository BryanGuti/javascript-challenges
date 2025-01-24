API_URL = `https://api.thecatapi.com/v1/images/search`;

const image = document.querySelector(".image-wrapper__image");
const button = document.querySelector(".app__button");

async function getImage() {
  const apiData = await fetch(API_URL);
  const jsonData = await apiData.json();

  return jsonData[0]["url"];
}

async function main() {
  image.src = await getImage();

  button.addEventListener("click", async () => {
    image.src = await getImage();
  });
}

main();
