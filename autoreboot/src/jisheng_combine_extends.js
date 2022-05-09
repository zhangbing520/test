function People(name, sex, phone) {
  this.name = name
  this.sex = sex
  this.phone = phone
}

People.prototype.doEat = function () {
  console.log(`${this.name}吃饭`);
}

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone)
  this.national = national
}

// 寄生式组合继承实现步骤
// 1. 创建一个寄生构造函数
function Middle() {
  this.count = 3
}


Middle.prototype = People.prototype
// 2. 创建一个寄生新创建的构造函数的对象
let middle = new Middle()
// 3. ChinesePeople 子类的原型对象空间指向第二步新创建的构造函数的对象
ChinesePeople.prototype = middle

ChinesePeople.prototype.chineseEat = function () {
  console.log('chineseEat');
}
ChinesePeople.prototype.constructor = ChinesePeople


let ChinesePeopleOne = new ChinesePeople('张三', '男', '11111', '汉族')
let ChinesePeopleTwo = new ChinesePeople('李四', '女', '22222', '满族')
console.log('ChinesePeopleOne:', ChinesePeopleOne);
console.log('ChinesePeopleTwo:', ChinesePeopleTwo);


// 创建一个共用的寄生组合继承函数【最佳原型继承模式】
function createNewPrototypeObj(rootprototype) {
  function Middle() {
    this.count = 3
  }

  Middle.prototype = rootprototype
  let middle = new Middle()
  return middle
}