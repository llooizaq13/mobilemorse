const morse = {
  "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.",
  "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
  "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.",
  "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
  "Y": "-.--", "Z": "--..", "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..",
  "9": "----.", "0": "-----", " ": "/"
};

document.getElementById("converter").addEventListener("click", () => {
  const texto = document.getElementById("texto").value.toUpperCase();
  const convertido = texto.split("").map(c => morse[c] || "").join(" ");
  document.getElementById("resultado").innerText = convertido;
});

document.getElementById("traduzir").addEventListener("click", async () => {
  const morseCode = document.getElementById("texto").value;
  const response = await fetch(`https://api.funtranslations.com/translate/morse2english.json?text=${encodeURIComponent(morseCode)}`);
  const data = await response.json();
  if (data && data.contents && data.contents.translated) {
    document.getElementById("resultado").innerText = data.contents.translated;
  } else {
    document.getElementById("resultado").innerText = "Erro ao traduzir.";
  }
});

document.getElementById("abrirCamera").addEventListener("click", async () => {
  const video = document.getElementById("preview");
  video.style.display = "block";
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
