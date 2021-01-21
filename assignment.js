// https://github.com/stsharin/Assignment-3

// Finding kilometer to meter --------------------------
function kilometerToMeter(km) {
    if (km < 0) {
        return -1;
    }
    else {
        var meter = (km * 1000);   // 1 km = 1000 meter
        return meter;
    }
}

var toMeter = kilometerToMeter(197);
if (toMeter == (-1)) {
    console.log("Distance cannot be negative.");
}
else {
    console.log("Kilometer to Meter:", toMeter);
}

// Budget Calculator -------------------------------------------------
function budgetCalculator(watchAmount, phoneAmount, laptopAmount) {
    if (watchAmount < 0) {
        return -1; // to check if the watch amount is negative
    }
    else if (phoneAmount < 0) {
        return -2; // to check if the phone amount is negative
    }
    else if (laptopAmount < 0) {
        return -3; // to check if the laptop amount is negative
    }

    else {
        // given prices
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;

        totalWatchPrice = watchPrice * watchAmount;
        totalPhonePrice = phonePrice * phoneAmount;
        totalLaptopPrice = laptopPrice * laptopAmount;

        totalPrice = (totalWatchPrice + totalPhonePrice + totalLaptopPrice);
        return totalPrice;
    }
}
var price = budgetCalculator(2, 2, 2);

if (price == -1) {
    console.log("Watch amount cannot be negative. Please give proper value to see the total price.")
}
else if (price == -2) {
    console.log("Phone amount cannot be negative. Please give proper value to see the total price.")
}
else if (price == -3) {
    console.log("Laptop amount cannot be negative. Please give proper value to see the total price.")
}
else {
    console.log(price);
}

// Finding hotel cost ----------------------------------
// 1-10 din vara 100
// 11-20 din 80 taka
// else 50 taka

function hotelCost() {

}

function megaFriend() {

}