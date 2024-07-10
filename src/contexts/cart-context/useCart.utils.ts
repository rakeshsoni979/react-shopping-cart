// this function should convert the amount to the currency based on the currencyId
// and return the formatted value as CartTotal and should be used in the useCartTotal hook
// available currencies are USD, EUR, GBP, AUD, JPY and ISD
// the currency format should be $ for USD, € for EUR, £ for GBP, A$ for AUD, ¥ for JPY and ₹ for ISD
// for example, if the amount is 100 and currencyId is USD, the function should return $100
// if the amount is 100 and currencyId is EUR, the function should return €100
// and should return empty string for unsupported currencies
export const convertAmountToCurrency = (amount: number, currencyId: string) => {
  const allowedCurrencies = ['USD', 'EUR', 'GBP', 'AUD', 'JPY', 'INR'];
  if (allowedCurrencies.includes(currencyId) === false) {
    return '';
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyId,
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
};
