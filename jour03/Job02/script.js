$(document).ready(function() {
    function shuffle() {
      var parent = $("#rainbow-container");
      var divs = parent.children();
      while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
    }
    function checkOrder() {
      var ordered = true;
      $("#rainbow-container img").each(function(index) {
        var expectedIndex = index;
        var actualIndex = $(this).index();
        if (actualIndex !== expectedIndex) {
          ordered = false;
          return false;
        }
      });
      return ordered;
    }
    function showMessage(isOrdered) {
      var messageDiv = $("#message");
      if (isOrdered) {
        messageDiv.text("Vous avez gagné").css("color", "green");
      } else {
        messageDiv.text("Vous avez perdu").css("color", "red");
      }
    }
    shuffle();
    $("#Melange-btn").click(function() {
      shuffle();
      $("#message").empty();
    });
    $("#rainbow-container img").draggable({
      revert: "invalid",
      containment: "document",
      cursor: "move"
    });
  
    $("#rainbow-container").droppable({
      drop: function(event, ui) {
        $(this).append(ui.draggable);
        var isOrdered = checkOrder();
        if (isOrdered) {
          showMessage(true);
        }
      }
    });
  });