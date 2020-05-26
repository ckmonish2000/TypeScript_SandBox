// they are like custom data types
// right now ur creating a js object with 2 parameters and then we return it 
function todos(todo) {
    return todo.title + ": " + todo.content;
}
var x = todos({ title: "workout", content: "pushups" });
console.log(x);
