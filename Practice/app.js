var logModule = require('./log')
var calc = require('./calculator')
var calc2 = require('./calculator2')
var getDateTime = require('./datetime')

logModule.details('My name is Shubham')
logModule.warning('I have cancer')
logModule.error('i am dead')

calc.add(30,40)
calc.subs(50,20)
calc.mult(3,4)
calc.div(40,4)

var add = calc2.add(20,30)
console.log('addition: '+ add)
var subs = calc2.subs(100,50)
console.log('Substraction: '+subs )

const dateTime = getDateTime()
console.log(dateTime)  