function showResponse(response) {
  new Typewriter("#reponse-generator", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAI(response) {
  response.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7cfac3t6d90fo31f4fb0ff0151e8560c";
  let context =
    "You are an expert chef who loves to Christmas. Your mission is to plan a Christmas recipe in basic HTML. Make sure to be precise and detailed with bullet points and show the recipe complete. Make sure to follow the instructions below and give the complete instructions. Please! at the end of the recipe sign with SheCodes AI in bold and at the end write a Christmas quote";
  let prompt = `User instructions: Generate a Christmas recipe of ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showResponse);
}

let inputGenerator = document.querySelector("#form-generator");
inputGenerator.addEventListener("submit", generateAI);
