const userList = [
    { name: "John", gender: 'M', salary: 35000 },
    { name: "Jade", gender: 'F', salary: 42000 },
    { name: "Joe", gender: 'M', salary: 32000 },
    { name: "Jacky", gender: 'F', salary: 38000 }
];


menSalaryTotal = userList
    .filter(user => user.gender == 'M')
    .map(user => user.salary += 1000)
    .reduce((menSalaryTotal, menSalary) => menSalaryTotal + menSalary);
console.log(menSalaryTotal)

//---------------------------------------------------------------------


function convertToRoman(num) {
    if (num <= 0 || num > 3999) {
        return "Invalid number, the valid range is 1-3999."
    }
    const romanSymbols = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let romanNumber = "";
    for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanSymbols[i].value) {
            romanNumber += romanSymbols[i].symbol;
            num -= romanSymbols[i].value;
        }
    }
    return romanNumber;
}                  