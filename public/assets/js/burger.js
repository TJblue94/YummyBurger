// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".Devoured").on("click", function(event) {
    var id = $(this).data("id");
    if ($(this).data("devoured") === 0){
       var devoured = true
    }else devoured = false
 
    console.log(devoured);
    console.log(id);
    var newDevoured = {
        devoured: devoured
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("changed devoured  to", Devoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

     // var newBurger = {
      //   burger: $("#nom").val(),
      //   Devoured: $("[name=Devoured]:checked").val()
      // };

      // console.log($(this).find('input[name=name]').val());


    var newBurger = {
      burger: $("#nom").val(),
      Devoured: 0
    };



    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: JSON.stringify(newBurger),
      headers: {"Content-type":"application/json"}
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
