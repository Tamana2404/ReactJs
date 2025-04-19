// import { Fragment } from 'react';
//no comments inside the fragment
//this code is of no use , because its hardcoded / already written or static code , we have to use dynamic code or render dynamic lists
import { useState } from "react";
function ListGroup(){
  let items = ['newyork','tokyo','sanfrancisco','london','paris'];
  // items=[];


const message = items.length===0? <p>no item found</p>:null;
function getMessage(){
  return items.length===0?<p>no item</p>:null;
}
//a variable to keep track of selectedIndex 
// let selectedIndex = -1; 
//yhnp pe we initialized selectedIndex to -1, and it will return variable and function -> destructure krke yhi p useState mei pass krdo 
//useState is a hook which will return an array of 2 elements, first is the variable and second is the function to update the variable
const [selectedIndex,setSelectedIndex]=useState(-1); //this is a hook which will keep track of selectedIndex
//no item selected at first
//eventhandler
// const handleClick = (event:MouseEvent)=> console.log(event);
    return (
    <>
    <h1>list</h1>
    <ul className="list-group">
      {/* {message}
      {getMessage()} */}
    {/* {items.length===0 ? <p>no item found</p>:null} */}
    {/* //best way */}
    {items.length===0 && <p>no item found</p>}
    {/* this will render "no item found if length is 0 and then map function mei bhi kuch ni aayega"
    else nothing will render ehere and map function se ekk ekk krke list aajayegi saari */}
      {items.map((item,index)=>
        //  <li className="list-group-item active"
         <li className={selectedIndex===index?'list-group-item active':'list-group-item'}
          key={item}
          onClick={()=>setSelectedIndex(index)}
          //onClick p ye function call krdo
          //onclick ek event h , is event k hone pe function call hoga jise hm eventHandler bolenge
            // (event)=>{
            //but now i want to call a function on clicking
            //hum call ni krengte hm sirf reference denge , baaki ka kaam runtime p hoga function call

            // console.log(item,index,event);
          >{item}</li>)};
</ul>
</>
    );    
}
export default ListGroup;