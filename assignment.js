// https://github.com/stsharin/Assignment-3

// 1. Finding kilometer to meter
function kilometerToMeter(km) {
    if (km < 0) {
        return "Distance cannot be negative.";
    }
    else {
        var meter = (km * 1000);   // 1 km = 1000 meter
        return meter;
    }
}
var toMeter = kilometerToMeter(197);

// 2. Budget Calculator
function budgetCalculator(watchAmount, phoneAmount, laptopAmount) {
    if (watchAmount < 0 || phoneAmount < 0 || laptopAmount < 0) {
        return "Amount cannot be negative. Please give proper value to see the total price.";
    }
    else {
        // given prices
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;

        // multiplying price with amount to get the total price
        var totalWatchPrice = watchPrice * watchAmount;
        var totalPhonePrice = phonePrice * phoneAmount;
        var totalLaptopPrice = laptopPrice * laptopAmount;

        // calculating total price
        var totalPrice = (totalWatchPrice + totalPhonePrice + totalLaptopPrice);
        return totalPrice;
    }
}
var price = budgetCalculator(2, 2, 1);

// 3. Finding hotel cost
var cost = 0;
var extraDays = 0;

function hotelCost(days) {
    if (days < 0) {
        return "Days cannot be negative.";
    }
    else {
        if (days <= 10) {
            cost = days * 100;

        }
        else if (days >= 11 && days <= 20) {
            extraDays = days - 10;
            cost = (extraDays * 80) + 1000;
        }
        else {
            extraDays = days - 20;
            cost = (extraDays * 50) + 1800;

        }
        return cost;
    }
}
var totalCost = hotelCost(11);

// 4. Finding biggest string
function megaFriend(names) {
    // checking if it is an empty array
    if (names.length === 0) {
        return "This is an empty array."
    }
    else {
        var max = names[0].length;
        names.map(v => max = Math.max(max, v.length));
        maxValue = names.filter(v => v.length == max);
        return maxValue;
    }
}
var longestName = megaFriend(['Sharin', 'Saraban Tasnim', 'STS', 'Saraban Tasnim Sharin', 'STSharin']);