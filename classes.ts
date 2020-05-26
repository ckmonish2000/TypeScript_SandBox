class user{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    print(){
        return this.name+" : "+this.age
    }
}

class school extends user{
    sname:string;

    constructor(name:string,age:number,snames:string){
        super(name,age);
        this.sname=snames;

    }
    printdetails(){
        return this.age+":"+this.name+":"+this.sname
    }
}

let x=new school("mk",20,"sjr");
console.log(x.printdetails());