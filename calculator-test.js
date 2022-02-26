
it('should calculate the monthly rate correctly', function () {
    const values = {amount: 5300, years: 12, rate: 3};
    expect(calculateMonthlyPayment(values)).toEqual("43.87");
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
        amount: 1000,
        years: 1.5,
        rate: 1
      };
      expect(calculateMonthlyPayment(values)).toEqual('56.00');
  });
  
  /// etc
  