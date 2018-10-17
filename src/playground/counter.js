
let count=0;
const addone=()=>{
    count++;
    render();
} 
const minusone=()=>{
   count--;
   render();
}
const resetal=()=>{
   count=0;
   render();
}





const render=()=>{


const templatesix=(
  <div>
   <h1>Count :{count}</h1>
   <button onClick={addone}>+1</button>
   <button onClick={minusone}>-1</button>
   <button onClick={resetal}>reset</button>

  </div>

)
ReactDOM.render(templatesix, document.getElementById("app"));
    
}
render();