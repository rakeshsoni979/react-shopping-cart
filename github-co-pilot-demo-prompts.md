### For unit testing
- generate unit test cases for `convertAmountToCurrency` in chat
    - Co-pilot will suggest test cases even before writing the test cases


## Generate new function
- now write the actual function convertAmountToCurrency
  - run this command after the unit test case to achieve TDD





### writing function before test cases
Put comments as
// this function should convert the amount to the currency based on the currencyId
// and return the formatted value as CartTotal and should be used in the useCartTotal hook
// available currencies are USD, EUR, GBP, AUD, JPY and ISD
// the currency format should be $ for USD, € for EUR, £ for GBP, A$ for AUD, ¥ for JPY and ₹ for ISD
// for example, if the amount is 100 and currencyId is USD, the function should return $100
// if the amount is 100 and currencyId is EUR, the function should return €100


### refactor existing function
- update function convertAmountToCurrency so that is currencyId is not in the allowed list of currencyIds then return empty string



# big architecture level change suggestion
add a hook that will use new context that will keep track of selected currency from allowed currencyID and those are ['USD', 'EUR', 'GBP', 'AUD', 'JPY', 'INR'] and when user select one currency ID then we will show amout in that currecny only
