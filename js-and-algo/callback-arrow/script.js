// Exercise 1
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = x => x();

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

// Exercise 2
const returnTime = function (time) {
  console.log('The current time is: ' + time);
}
const getTime = fun => fun("12:00");
getTime(returnTime)

// Exercise 3
logData = (x) => console.log("Log Data func");
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party")

// Exercise 4
const sum = (a,b,c) => a+b+c;
console.log(sum(1,2,3));

// Exercise 5

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalize("bOb")); // returns Bob
console.log(capitalize("TAYLOR")); // returns Taylor
console.log(capitalize("feliSHIA")); // returns Felishia

// Exercise 6
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
const commentOnWeather = temp => "it's " + determineWeather(temp);

console.log(commentOnWeather(30)); //returns "It's hot"
console.log(commentOnWeather(22)); //returns "It's cold"