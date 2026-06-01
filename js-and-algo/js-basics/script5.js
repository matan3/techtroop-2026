// Exercise 1

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] })
}
for (let person of people) {
  console.log(person)
}

// Exercise 2

for (let person of people) {
  console.log(`${person.name} is ${person.age} years old`)
}

// Exercise 3

const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" }
]

for (let post of posts) {
  if (post.id === 2) {
    posts.splice(posts.indexOf(post), 1);
  }
}
for (let post of posts) {
  console.log(post)
}

// Exercise 4
const posts2 = [
  {
    id: 1,
    text: "Love this product",
    comments: []
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" }
    ]
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: []
  }
]

for (let post of posts2) {
  if (post.id === 2) {
    for (let comment of post.comments) {
      if (comment.id === 3) {
        post.comments.splice(post.comments.indexOf(comment), 1);
      }
    }
  }
}
for (let post of posts2) {
  console.log(post)
  for (let comment of post.comments) {
    console.log(comment.id, comment.text)
  }
}

// Exercise 5

const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (let letter in dictionary) {
  console.log(`Words that begin with ${letter}:`)
  for (let word of dictionary[letter]) {
    console.log(word)
  };
}