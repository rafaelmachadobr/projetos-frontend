const form = document.querySelector("form");
const result = document.getElementById("result");
const shortLink = document.getElementById("short-link");
const longLink = document.getElementById("long-link");
const copyButton = document.getElementById("copy");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = document.getElementById("url").value;
  const token = "275e7736a85610c398f88cc7765b8e82def73d32";
  const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

  if (!url) {
    alert("Por favor, insira um link válido.");
    return;
  }

  fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ long_url: url }),
  })
    .then((response) => response.json())
    .then((data) => {
      longLink.innerHTML = url;
      shortLink.innerHTML = `<a href="${data.link}" target="_blank" style="text-decoration: none; color: #0236b9;">${data.link}</a>`;
    })
    .catch((error) => console.error(error));
});

copyButton.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(shortLink);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  copyButton.innerHTML = "Copiado!";
  copyButton.classList.add("success");
  setTimeout(() => {
    copyButton.innerHTML = "Copiar";
    copyButton.classList.remove("success");
  }, 1000);
});
