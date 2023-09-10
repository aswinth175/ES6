// Class

class Employee {
	
	constructor(a,b,c){
	this.name=a
	this.age=b
	this.degree=c
	}
	getDetails(){
	return `My name is ${this.name}I am ${this.age}I have completed ${this.degree}`
	}
	}
	class Trainer extends Employee{
	constructor(a,b,c,d){
	super (a,b,c)
	this.skill=d
	}
	}
	let emp2=new Trainer("Aswinth",19,"DME",["I am FED"])
	console.log(emp2)