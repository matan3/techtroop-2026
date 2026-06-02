// Exercise 1
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function (str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}

const getAge = function (age) {
  if (age < 21) {
    return "Underage";
  } else if (age > 55) {
    return "55+";
  } else {
    return String(age);
  }
}

const getpProfession = function (str) {
  let profession = "";
  const words = str.split(" ");
  for (let word of words) {
    profession += capitalize(word) + " ";
  }
  return profession;
}

const getLocation = function (country, city) {
  return capitalize(city) + ", " + capitalize(country);
}

const getCatchphrase = function (name, catchphrase) {
  return `${capitalize(name)} loves to say "${capitalize(catchphrase)}"."`
}

console.log(capitalize("hello"))

const getSummary = function (person) {
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} `
  summary += getpProfession(person.profession)
  summary += `from ${getLocation(person.country, person.city)}. `
  summary += getCatchphrase(person.name, person.catchphrase)
  return summary
}

console.log(getSummary(people_info[0]))
console.log(getSummary(people_info[1]))
console.log(getSummary(people_info[2]))

// Exercise 2
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

const removeCharacters = function (word) {
  let newWord = word;
  for (let char of specialChars) {
    newWord = newWord.split(char).join("");
  }
  return newWord;
}

const cleanText = function (story) {
  const words = story.split(" ");
  let lowerCaseWords = [];
  for (let word of words) {
    let newWord = removeCharacters(word);
    lowerCaseWords.push(newWord.toLowerCase())
  }
  return lowerCaseWords;
}

const addToCounter = function (word) {
  if (wordCounts[word]) {
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }
}

const countWords = function (sentence) {
  let wordsArr = cleanText(sentence);
  for (let word of wordsArr) {
    addToCounter(word);
  }
}

countWords(story);
console.table(wordCounts);
