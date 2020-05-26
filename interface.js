// they are like custom data types
function todos(todo) {
    return todo.title + ": " + todo.content;
}
var x = todos({ title: "exercise", content: "pullups" });
console.log(x);
