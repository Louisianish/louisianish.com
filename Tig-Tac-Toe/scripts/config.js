function openPlayerConfig() {
  editedPlayer = +event.target.dataset.playerid; // "+'1'" as a string => (yields) 1 as a number
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  document.getElementById("playername").value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "S'il te plaît, écris un nom valide!";
    return;
  }

  // const updatedPlayerDataElement = document.getElementById(
  //   "player-" + editedPlayer + "-data"
  // );
  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // } else {
  //   players[1].name = enteredPlayername;
  // }
  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
