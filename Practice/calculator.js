//local modules
var arithmetic= {
    add: function(a,b) {
        console.log('a: '+a+'\t b: '+b)
        console.log('Addition: '+ (a+b))
    }, subs: function(a,b) {
        console.log('a: '+a+'\t b: '+b)
        console.log('Substraction: '+ (a-b))
    }, mult: function(a,b) {
        console.log('a: '+a+'\t b: '+b)
        console.log('Multiplication: '+a*b)
    }, div: function(a,b) {
        console.log('a: '+a+'\t b: '+b)
        console.log('Division: '+a/b)
    }
};

module.exports = arithmetic