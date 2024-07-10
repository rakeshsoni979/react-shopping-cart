// write unit test cases for useCart utils
// to test convertAmountToCurrency function
import { convertAmountToCurrency } from '../useCart.utils';

describe('convertAmountToCurrency', () => {
  it('should convert amount to USD format', () => {
    const result = convertAmountToCurrency(1000, 'USD');
    expect(result).toBe('$1,000.00');
  });

  it('should convert amount to EUR format', () => {
    const result = convertAmountToCurrency(1000, 'EUR');
    expect(result).toBe('€1,000.00');
  });

  it('should handle zero amount', () => {
    const result = convertAmountToCurrency(0, 'USD');
    expect(result).toBe('$0.00');
  });

  it('should return empty string for unsupported currency', () => {
    const result = convertAmountToCurrency(1000, 'XYZ');
    expect(result).toBe('');
  });

  it('should handle negative amounts', () => {
    const result = convertAmountToCurrency(-500, 'USD');
    expect(result).toBe('-$500.00');
  });
});
