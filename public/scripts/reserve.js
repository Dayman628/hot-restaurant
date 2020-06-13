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

})

