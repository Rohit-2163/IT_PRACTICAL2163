$(document).ready(function(){
    $("#carForm").submit(function(event){
        event.preventDefault();

        var carDetails = {
            manufacturer: $("#manufacturer").val(),
            model: $("#model").val(),
            year: $("#year").val(),
            fuel: $("#fuel").val(),
            color: $("#color").val(),
            seating: $("#seating").val(),
            cubic: $("#cubic").val()
        };

        console.log("JavaScript Object:", carDetails);

        var carJson = JSON.stringify(carDetails);

        console.log("JSON Object:", carJson);
    });
});
