const button = document.getElementById("#mywhatsapp");
setInterval(function() {
  button.classList.add("shake");
  setTimeout(() => button.classList.remove("shake"), 500);
}, 10000);