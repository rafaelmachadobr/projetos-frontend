const inputTextArea = document.getElementById("input-textarea");
const characCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  characCount.textContent = inputTextArea.value.length;
  const txt = inputTextArea.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
