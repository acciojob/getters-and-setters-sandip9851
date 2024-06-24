//complete this code
class Person {
	constructor(name, age){
		this.name = name
		this.age = age
	}
	get name(){
		return this.name;
	}
	set age(age){
		this.age = age
	}
}

class Student extends Person {
	study(){
		constructor(name){
			super(name)
		}
		
		console.log(this.name+"is studying")
	}
}

class Teacher extends Person {
	constructor(name){
		super(name)
	}
	tech(){
		console.log(this.name+"is studying")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
