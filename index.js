
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("searchBtn");

btn.addEventListener("click", () =>{
    let inputWord = document.getElementById("input-word").value;
    fetch(`${url}${inputWord}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        result.innerHTML =`
        <div class="word">
        <h3>${inputWord}</h3>
        <button onclick="playSound()">
            <i class="fa fa-volume-up" aria-hidden="true"></i>
        </button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>
    <p class="wordMeaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="wordExample">
    ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
    sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
        result.innerHTML = `<h3 class="error">Couldn't find the word</h3>`;
    });
});


function playSound(){
    sound.play();
}