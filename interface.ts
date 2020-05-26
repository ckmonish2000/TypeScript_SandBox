// they are like custom data types

// right now ur creating a js object with 2 parameters and then we return it 
/*
function todos(todo:{title:string,content:string}):string{

    return todo.title+": "+todo.content

}

let x=todos({title:"workout",content:"pushups"});
console.log(x)
*/

interface Todo{
    title:string,
    content:string
}

function todos(todo:Todo):string{

    return todo.title+": "+todo.content

}

let x=todos({title:"exercise",content:"pullups"})
console.log(x)
