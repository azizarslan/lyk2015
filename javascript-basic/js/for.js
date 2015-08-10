for (var i = 0; i < 5; i++) {
  console.log("This number: " + i);
};


var i = 0;
for (; i < 5; i++) {
  console.log("This number: " + i);
};


for (var i = 0;; i++) {
  if (i > 10) {
    break;
  }
  console.log("This number: " + i);
};


var i = 0;
for (;;) {
  if (i > 10) {
    break;
  }
  console.log("This number: " + i);
  i++;
}
