console.log("CallBack")

function callbackExample(name,callback){
    console.log( callback(name));
}

// var callback =function(name){
//     return "hello" +name;
// }

// callbackExample("bibek",callback);
    
 callbackExample("bibek",function(name){
         return "hello" +name;
     });
