const add=(a,b)=>a+b;
//console.log(arguments);
console.log(add(4,5));


const user={
   name:"pree",
   value:"something",
   swe:["log","errrrr","grg"],
   prinst(){

    const massage=this.swe.map((swe)=>{
        return this.name+"massages "+ this.value;
    })
    return massage;
    
     this.swe.forEach((city)=>{
         console.log(this.name+"dfsfds" +city);
     })
   }
}
user.prinst();