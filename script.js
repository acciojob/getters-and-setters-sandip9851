class Person {
	constructor(name,age){
    this.n=name
    this.a=age
    this._name=name
    this._age=age
  }

  get name(){
    return this.n
    return this._name
  }

  set age(age){
    this.a=age
    this._age=age
  }
}