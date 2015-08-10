var obj = {};

var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());

person.age = "35";  // Dinamik property ekleme


console.log(person);
console.log(person.firstName);
console.log(person["firstName"]);
