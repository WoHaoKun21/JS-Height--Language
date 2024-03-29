// 通过一个new关键字调用一个函数时(构造器)，这个时候this是在调用这个构造器是创建出来的对象
// this === 创建出来的对象
// 这个绑定过程就是new绑定

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var p1 = new Person("why", 18);
console.log(p1, p1.name, p1.age);

var p2 = new Person("kobe", 20);
console.log(p2, p2.name, p2.age);
