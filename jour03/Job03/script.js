$(document).ready(function() {
  const tiles = [];
  let emptyTileIndex;
  let isGameOver = false;

  function initializeGame() {
    const images = ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png", "logo6.png", "logo7.png","logo8.png"];
    const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    shuffle(indices);

    const gameContainer = $("#game-container");
    gameContainer.empty();

    for (let i = 0; i < 9; i++) {
      const index = indices[i];
      const tile = $("<div>").addClass("tile").attr("data-index", index);
      if (index === 8) {
        tile.css({
          "background-image": "none",
          "border": "1px solid black"
        });
        emptyTileIndex = i;
      } else {
        const imageUrl = `url(${images[index]})`;
        tile.css({
          "background-image": imageUrl,
          "background-size": "cover",
          "border": "1px solid black"
        });
      }
      gameContainer.append(tile);
      tiles.push(tile);
    }

    isGameOver = false;
    $("#message").text("");
    $("#restart-btn").hide();
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function checkGameOver() {
    for (let i = 0; i < 9; i++) {
      if (parseInt(tiles[i].attr("data-index")) !== i) {
        return false;
      }
    }
    return true;
  }

  function moveTile(tileIndex) {
    if (isGameOver) return;

    const dx = Math.abs(tileIndex % 3 - emptyTileIndex % 3);
    const dy = Math.abs(Math.floor(tileIndex / 3) - Math.floor(emptyTileIndex / 3));

    if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
      tiles[emptyTileIndex].css("background-image", tiles[tileIndex].css("background-image"));
      tiles[emptyTileIndex].css("background-size", tiles[tileIndex].css("background-size"));
      tiles[tileIndex].css("background-image", "none");
      emptyTileIndex = tileIndex;

      if (checkGameOver()) {
        $("#message").text("Vous avez gagné").css("color", "green");
        isGameOver = true;
        $("#restart-btn").show();
      }
    }
  }

  $("#restart-btn").click(function() {
    tiles.length = 0;
    initializeGame();
  });

  initializeGame();

  $("#game-container").on("click", ".tile", function() {
    const tileIndex = parseInt($(this).attr("data-index"));
    moveTile(tileIndex);
  });
});