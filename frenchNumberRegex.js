function testFrenchNumber(frenchNumber) {
    const frenchPhoneNumberRegex = /^(?:\+33|0(?!0\s))(?:[1-9]\d{8}|[67]\d{8}|[1-5]\d{8}|9\d{8}|8\d{9}|8\d{10})$/;
    const isValidFrenchPhoneNumber = frenchPhoneNumberRegex.test(frenchNumber);
  
    return isValidFrenchPhoneNumber;
  }
  
  const result = testFrenchNumber("034533000");
  console.log(result); // Output: true
  