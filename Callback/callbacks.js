/

function callbackExample(name, callback) {
  console.log(callback(name));
}

var callback = function(name) {
  return "Hola " + name;
}

callbackExample("Abel Mohammado", function(name) {
  return "Hola " + name;
});
