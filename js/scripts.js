//Now we define the variables, ok?

var CakeFlavour = ["Italian", "Tuscan", "Portabella", "Prima", "Paradiso", "Napoletana"];

var CakeSize = ["Small", "Medium", "Large", "Jumbo"];

var CakeCrust = ["Thin", "Thick", "Cripsy", "Gluten-free"];

var topping = ["Fruits", "Bacon", "Cheese", "Mushroom"];

//Now let's define our calling functions, is that okay?

function getFlavour() {
    var flavour = $("#Cakeflavour :selected").val();
    return parseInt(flavour);
}

function getSize() {
    var size = $("#cakesize :selected").val();
    return parseInt(size);
}

function getCrust() {
    var crust = $("#cakecrust :selected").val();
    return parseInt(crust);
}

function getTopping() {
    var topping = $("#caketopping :selected").val();
    return parseInt(topping);
}

function getNumber() {
    var number = $("#number").val();
    return parseInt(number);
}

//Now we write a funtion to collect all the information above.

function getAmount(flavour, size, crust, topping, number) {
    var results =
        (parseInt(flavour.val()) +
            parseInt(size.val()) +
            parseInt(crust.val()) +
            parseInt(topping.val())) *
        parseInt(number.val());
    alert(
        "You've ordered " + number.val() + " " + "cake's" +
        " " +
        flavour.html() +
        " " +
        size.html() +
        " " +
        crust.html() +
        " " + 
        topping.html() +
        " " +
        " which amounts to NGN. " +
        results +
        " Thanks for your order,welcome again!"
    );
    prompt("Enter your location");
    prompt("Enter your name");
    prompt("Enter your phone number");
    alert("Your order will be delivered in a while, delivery fee is  NGN.1000/=");
}

function getPick(flavour, size, crust, topping, number) {
    var results =
        (parseInt(flavour.val()) +
            parseInt(size.val()) +
            parseInt(crust.val()) +
            parseInt(topping.val())) *
        parseInt(number.val());
    alert("You've ordered " + number.val() + " " + " cake(s), " +
        flavour.html() + " " + size.html() + " " + crust.html() +
        "  " + topping.html() + "  " + " which amounts to Ksh. " +
        results + "  Thanks for shopping with us.  "
    );

}


//User Interface logic

$(document).ready(function () {
    $("#make-delivery").click(function (event) {
        var flavour = $("#cakeflavour :selected");
        var size = $("#cakesize :selected");
        var crust = $("#cakecrust :selected");
        var topping = $("#caketopping :selected");
        var number = $("#number");

        getAmount(flavour, size, crust, topping, number);
        event.preventDefault();
    });
});
$(document).ready(function () {
    $("#pick-up").click(function (event) {
        var flavour = $("#cakeflavour :selected");
        var size = $("#cakesize :selected");
        var crust = $("#cakecrust :selected");
        var topping = $("#caketopping :selected");
        var number = $("#number");

        getPick(flavour, size, crust, topping, number);
        event.preventDefault();
    });
});
