const dog_btn = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");
dog_btn.addEventListener("click", getRandomDog);
function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {
      dog_result.innerHTML = `<img src=${data.url} width="300px height="350px"> `;
    });
}
