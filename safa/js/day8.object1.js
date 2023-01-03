const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let counter = 0;
console.log();
for (i = 0; i < Object.keys(users).length; i++) {
  person = Object.keys(users);
  login = users[person[i]].isLoggedIn;
  point = users[person[i]].points;
  login === true && point >= 50 ? counter++ : counter;
}
console.log(counter);

//*======YA DA=========

let loggedInCount = 0;
let pointsCount = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    pointsCount++;
  }
}

console.log(`Number of logged in users: ${loggedInCount}`);
console.log(`Number of users with 50 or more points: ${pointsCount}`);

//*======Q3=========*//

let counter1 = [];

for (i = 0; i < Object.keys(users).length; i++) {
  person = Object.keys(users);

  mern = users[person[i]].skills;
  if (mern.includes("MongoDB" && "Express" && "React" && "Node")) {
    console.log(person[i]);
    counter1.push(person[i]);
  }
}
console.log(counter1);

// const mernStack = ["MongoDB", "Express", "React", "Node"];

// const mernDevelopers = [];

// for (const user in users) {
//   const skills = users[user].skills;
//   if (skills.every((skill) => mernStack.includes(skill))) {
//     mernDevelopers.push(user);
//   }
// }

// console.log(`MERN stack developers: ${mernDevelopers.join(", ")}`);

//*======Q4=========*//

let copyUsers = Object.assign({}, users);

copyUsers.levent = {
  email: "paul@paul.com",
  skills: ["HTML", "Node", "CSS", "JavaScript", "MongoDB", "Express", "React"],
  age: 20,
  isLoggedIn: false,
  points: 40,
};

console.log(copyUsers);

let x = Object.entries(users);
let y = Object.values(users);
console.log(x);
console.log(y);
