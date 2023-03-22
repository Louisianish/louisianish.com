function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = `Bon ouvrage, <span id="winner-name">NOM DE JOUEUR/JOUEUSE</span>! T'as gagné!`;
    gameOverElement.style.display = "none";
    document.getElementById("next-player-turn").style.display = "block";
  
    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        gameData[i][j] = 0;
        const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
        gameBoardItemElement.textContent = "";
        gameBoardItemElement.classList.remove("disabled");
        gameBoardIndex++;
      }
    }
  }
  
  function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
      alert("S'il vous plaît, écrivez un nom pour chaque padna!");
      return;
    }
  
    resetGameStatus();
  
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
  }
  
  function switchPlayer() {
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
  }
  
  function selectGameField(event) {
    if (event.target.tagName !== "LI" || gameIsOver) {
      return;
    }
  
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
  
    if (gameData[selectedRow][selectedColumn] > 0) {
      return;
    }
  
    selectedField.textContent = players[activePlayer].symbol; // players[0]
    selectedField.classList.add("disabled");
  
    gameData[selectedRow][selectedColumn] = activePlayer + 1;
  
    const winnerId = checkForGameOver();
  
    if (winnerId !== 0) {
      endGame(winnerId);
    }
  
    currentRound++;
    switchPlayer();
  }
  
  function checkForGameOver() {
    // Check rows for equality
    for (let i = 0; i < 3; i++) {
      if (
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
      ) {
        return gameData[i][0];
      }
    }
  
    // Check columns for equality
    for (let i = 0; i < 3; i++) {
      if (
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
      ) {
        return gameData[0][i];
      }
    }
  
    // Check for diagonal top left to bottom right equality
    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }
  
    // Check for diagonal bottom left to top right equality
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData[1][1] &&
      gameData[1][1] === gameData[0][2]
    ) {
      return gameData[2][0];
    }
  
    if (currentRound === 9) {
      return -1;
    }
  
    return 0;
  }
  
  function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = "block";
    document.getElementById("next-player-turn").style.display = "none";
  
    if (winnerId > 0) {
      const winnerName = players[winnerId - 1].name;
      gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
      gameOverElement.firstElementChild.textContent =
        "Personne a gagné. Assayez encore!";
    }
  }
  