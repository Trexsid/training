let passengers =[
    {name: "Anil kumar",Age:30,Passportnumber:"A1234567"},
    {name: "sunil kumar",Age:28, Passportnumber:"B9876543"}
];

console.log(passengers[0]);
console.log(passengers[1]);

for (let i = 0; i < passengers.length; i++) {
    console.log(`Passenger ${i + 1}: Name - ${passengers[i].name}, Age - ${passengers[i].age}, Passport Number - ${passengers[i].passportNumber}`);
}

for (let passenger of passengers) {
    console.log(`Passenger Name: ${passenger.name}, Age: ${passenger.age}, Passport Number: ${passenger.passportNumber}`);
}
