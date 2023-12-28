function generateAI(response) {
  response.preventDefault();

  new Typewriter("#reponse-generator", {
    strings: "Natalia Casarin Sanchez",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let inputGenerator = document.querySelector("#form-generator");
inputGenerator.addEventListener("submit", generateAI);
