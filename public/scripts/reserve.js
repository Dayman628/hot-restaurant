// create js
$(".submit").on("click", function(event) {
    event.preventDefault();

    const newReservation = {
        costomerName: $("#reserve-name").val().trim(),
        costomerNumber: $("#reserve-phone").val().trim(),
        costomerEmail: $("#reserve-email").val().trim(),
        costomerID: $("#reserve-number").val().trim()
    };

    console.log(newReservation);

    $.post("/api/tables", newReservation, function(data) {
        if (data) {
            alert("Your table is ready!");
        }

        else {
            alert("You are on the wait list");
        }

        $("#reserve-name").val("");
        $("#reserve-phone").val("");
        $("#reserve-email").val("");
        $("#reserve-number").val("");
    });

})

