function ExampleConstructor() {}
console.log('prototype property value:', ExampleConstructor.prototype);
console.log('typeof protoype property:', typeof ExampleConstructor.prototype);

var aConstructor = new ExampleConstructor();
console.log('value of aConstructor:', aConstructor);

var isItInstance = aConstructor instanceof ExampleConstructor;
console.log('value of isItInstance:', isItInstance);
