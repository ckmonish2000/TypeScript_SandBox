function getnum(num1:number,num2:number):number{

    return num1+num2;
}
let mysum=function(num1:any,num2:any):number{
    if (typeof num1 != 'number'){
        num1=parseInt(num1);
    }
    else if(typeof num2 != 'number'){
        num2=parseInt(num2);
    }
    return num1+num2;
}
console.log(mysum('10',3))


// optional arguments

let getname=function(first:string,second?:string):string{
if (second==undefined){
    return first
}
    return first+" "+second
}

console.log(getname("m","k"))