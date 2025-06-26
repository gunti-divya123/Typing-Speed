const promptText = ['The five boxing wizards jump quickly',
    'Go, lazy fat vixen; be shrewd, jump quick', "asdfghjkl",
    'When zombies arrive, quickly fax Judge Pat',
    'Puzzled women bequeath jerks very exotic gifts.',
    'The quick onyx goblin jumps over the lazy dwarf.'];

let timer = 0;
let interval = null;
let isStarted = false;

const prompt = document.getElementById("prompt");
const inputBox = document.getElementById("inputBox");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
function loadPrompt() {
    const randomIndex = Math.floor(Math.random() * promptText.length);
    prompt.innerText = promptText[randomIndex];
}
function startTest() {
    if (!isStarted) {
        isStarted = true;
        interval = setInterval(() => {
            timer++;
            timerDisplay.textContent = timer
            updateWPM();
            checkCompletion();
        }, 1000);
    }
}
function updateWPM(){
    const wordsTypes = inputBox.value.trim().split("/\s+/").length;
    const wpm = Math.round((wordsTypes/timer)*60);
    wpmDisplay.textContent = timer > 0? wpm : 0;
}
function checkCompletion() {
    const userInput = inputBox.value.trim().replace(/\s+/g," ");
    const AcualPrompt = prompt.innerText.trim().replace(/\s+/g," ");
    if (userInput === AcualPrompt) {
        clearInterval(interval);
        alert("Test Completed!");
    }
}
function resetTest(){
    clearInterval(interval);
    timer = 0;
    isStarted = false;
    inputBox.value = "";
    timerDisplay.textContent = "0";
    wpmDisplay.textContent = "0";
    loadPrompt();
}
window.onload = loadPrompt;