console.log("aeggea")
var com=<div><h1>lovenet </h1><p>this is an element</p></div>;
const app={
  title:"fawee",
  subtitle:"gekgrkegr",
  location:"new delhi" ,
  age:24,
  arr:[]
}
function getlocation(){
  if(location){
      return <p>location  :{location}</p>;
  }
  else {
      return "no location is definded";  
    

  }

}
const onformsubmit=(e)=>{
     e.preventDefault();
      const options=e.target.elements.option.value;
      if(options){
        app.arr.push(options);
        e.target.elements.option.value="";
      }else{
       alert("ergaa");
      }
       
render();
     

}

const zero=()=>{
   app.arr=[];
   render();
}

const username="lovey";
//const numbers=[44,6,8];
const render=()=>{
const templateTwo=(
 <div>
     <h1>Indecision App</h1>
     <p>arr length: {app.arr.length >0? app.arr.length:"no option"}</p>

     <button onClick={zero}>remove all</button>
     {
         app.arr.map((number)=>{
             return <ol key={number}>options:{number}</ol>
         })
         }
     <h1>{username}</h1>
     <h3>{app.location}</h3>
     {app.age >=20 && <p>print the {app.age}</p>}
  <ul>

       
      <li>age 1</li>
      <li>age 2 </li>
      <li>age 3</li>
        </ul>
       <form onSubmit={onformsubmit}>
     <input type="text" name="option" />
     <button>add option</button>
       </form>



     </div>

);
ReactDOM.render(templateTwo,document.getElementById("app"));
}
render();