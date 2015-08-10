function func() {
  // console.log("Function!!");
}
func();


function fullName(firstName, lastName) {
  // console.log(firstName + " " + lastName);
}
fullName("Aziz", "Arslan");


function mathFunc(number1, number2) {
  // return parseInt(number1) + parseInt(number2);
}
mathFunc(2, "3");


var varFunc = function() {
  // console.log("varFunc");
}
varFunc();


var hede = function(person) {
  // console.log(person.firstName);
}
var myInfo = {
  firstName: "Aziz",
  lastName: "Arslan"
}
hede(myInfo);


var Person = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};


var john = new Person("John", "Doe", "30");

console.log(john.fullName());
