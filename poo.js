/*Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por pantalla las propiedades de la persona.*/
class Person {
  constructor(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  }
  obtDetails = () => {
    console.log (`name:${this.name} age:${this.age} gender:${this.gender}`);
  }
};

const Details = new Person('Jaime', 37,'male');
Details.obtDetails();


/*Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por pantalla el resultado.*/

class Student extends Person {
  constructor(name, age, gender, course, group) {
  super(name, age, gender)
  this.course = course
  this.group = group
}
register = () => {
  console.log(result)
}
};

const result = new Student ('Jaime', 37,'male', 'coding', 'fullstack');
result.register();

/*Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por pantalla el resultado.*/
class Teacher extends Person{
  constructor(name, age, gender, subject, level){
  super(name, age, gender)
  this.subject = subject
  this.level = level
  }
  assign = () => {
    console.log(newresult)
  }

};

const newresult = new Teacher ('Jaime', 37,'male', 'coding', 'fullstack');
newresult.assign();


