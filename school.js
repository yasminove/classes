
class Person{
    firstName; 
    lastName;
    age;
  }
  
  class Building {
    name; 
    number;
  }
  
  class Student extends Person {
    constructor(grades){
      super(grades);
      this.grades = grades;
      
    }
  }

  Student.grades = 99
  console.log(Student.grades);
  
  
  class Teacher extends Person {
    constructor(salary){
      this.salary = salary;
    }
  }

  let salary = Teacher.salary = 900;
  console.log(Teacher.salary);
  
  
  class Manager extends Person {
    constructor(salary){
      this.salary = salary;
    }
  }
  
  class Library extends Building {
    constructor(floors){
      this.floors = floors;
    }
  }

  Library.floors = 5; 
  console.log(Library.floors);
  
  