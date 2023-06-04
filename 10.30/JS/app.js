// class Person {
// //     // code goes here
//   }
//   const person = new Person()
//   console.log(person)

//   class Person {
//     constructor(firstName, lastName="mustafa") {
//       console.log(this) // Check the output from here
//       this.şehir = lastName
//       this.lastName = firstName
//     }
//   }

//   const x = new Person("asabeneh")

//   console.log(x)

// class Person {
//     constructor(firstName, lastName) {
//       console.log(this) // Check the output from here
//       this.firstName = firstName
//       this.lastName = lastName
//     }
//   }

//   const person1 = new Person('Asabeneh', 'Yetayeh')
//   const person2 = new Person('Lidiya', 'Tekle')
//   const person3 = new Person('Abraham', 'Yetayeh')

//   console.log(person1)
//   console.log(person2)
//   console.log(person3)

//?    problem1
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
// }

// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

// console.log(person1.getScore); // We do not need parenthesis to call a getter method
// console.log(person2.getScore);

// console.log(person1.getSkills);
// console.log(person2.getSkills);

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)

//     }
//   }

//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

//   person1.setScore = 1
//   person1.setSkill = 'HTML'
//   person1.setSkill = 'CSS'
//   person1.setSkill = 'JavaScript'

//   person2.setScore = 1
//   person2.setSkill = 'Planning'
//   person2.setSkill = 'Managing'
//   person2.setSkill = 'Organizing'

//   console.log(person1.score)
//   console.log(person2.score)

//   console.log(person1.skills)
//   console.log(person2.getSkills)

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

// console.log(Person.favoriteSkill());
// console.log(Person.showDateTime());




// class Student extends Person {
//     constructor(firstName, lastName, age, country, city, gender) {
//       super(firstName, lastName, age, country,city)
//       this.gender = gender
      
//     }
  
//     saySomething() {
//       console.log('I am a child of the person class')
//     }
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') +
//           ` and ${this.skills[this.skills.length - 1]}`
  
//       let formattedSkills = skills ? `He knows ${skills}` : ''
//       let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
//       let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//   }

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
  
//   const s1 = new Student(
//     'Asabeneh',
//     'Yetayeh',
//     250,
//     'Finland',
//     'Helsinki',
//     'Male'
//   )
//   const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
//   s1.setScore = 1
//   s1.setSkill = 'HTML'
//   s1.setSkill = 'CSS'
//   s1.setSkill = 'JavaScript'
  
//   s2.setScore = 1
//   s2.setSkill = 'Planning'
//   s2.setSkill = 'Managing'
//   s2.setSkill = 'Organizing'
  
//   console.log(s1)
  
//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
  console.log(s1.getPersonInfo())
  
//   console.log(s2.saySomething())
//   console.log(s2.getFullName())
//   console.log(s2.getPersonInfo())


class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.#privateAge = 10;
    }
    fullName() {
      return this.#privateAge;
    }
  }
  let person = new Person("John", "Doe");
  console.log(person.fullName());