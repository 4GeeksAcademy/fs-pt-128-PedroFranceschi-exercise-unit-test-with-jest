let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    rate = oneEuroIs.USD;
    return euro * rate
}
const fromDollarToYen = (euro) => {
    rate = oneEuroIs.JPY;
    return euro * rate
}
const fromYenToPound = (euro) => {
    rate = oneEuroIs.GBP;
    return euro * rate
}

// Just a console log for ourselves
console.log(fromEuroToDollar(1))
console.log(fromDollarToYen(1))
console.log(fromYenToPound(1))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};