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
