import operate  from '../logic/operate.js';

describe('Operations should be as below', () => {
  it('should add two numbers', () => {
    const result = operate('5', '5', '+');
    expect(result).toBe('10');
  });

});
