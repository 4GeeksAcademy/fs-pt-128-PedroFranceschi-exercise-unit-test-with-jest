// Import the function from the app.js file
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('You can be confident that 1 EUR is 1.07 USD', () => {
    // Inside the test we call our function
    let oneEurotoUSD = fromEuroToDollar(1);
    // We expect the that 1 EUR is 1.07 USD
    expect(oneEurotoUSD).toBe(1.07);
});

// Replicte for the rest of currencies
test('You can be confident that 1 EUR is 156.5 JPY', () => {
    // Inside the test we call our function
    let oneEurotoJPY = fromDollarToYen(1);
    // We expect the that 1 EUR is 156.5 JPY
    expect(oneEurotoJPY ).toBe(156.5);
});

test('You can be confident that 1 EUR is 0.87 GBP', () => {
    // Inside the test we call our function
    let oneEurotoGBP = fromYenToPound(1);
    // We expect the that 1 EUR is 156.5 JPY
    expect(oneEurotoGBP ).toBe(0.87);
});