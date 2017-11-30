var stuff = require('./stuff');
var events = require('events');
var util = require('util');
var fs = require('fs');
fs.unlink('./stuff/writeMe.txt', function() {
  fs.rmdir('stuff');
});


var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg) {
  console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryan = new Person('Ryan');
var people = [james, mary, ryan];
people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(person.name + ' said ' + mssg );
  });
});

james.emit('speak', 'hey dudes');
ryan.emit('speak', 'I want a curry')
console.log(stuff.counter(['moni', 'mo', 'monisha']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));
//var time = 0;
/*var timer = setInterval(function(){
  time += 2;
  console.log(time + ' secs have passed');
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);



console.log(__dirname);
console.log(__filename);*/
