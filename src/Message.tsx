function Message(){
    //this is jsx -> javascript xml
    //we are returning what Ui will look like whenever this functional componenet is called

//this is a functional component
// this code will compile to javascript code
    const name = "tamana";
    if(name) 
      return <h1>hello {name}</h1>;
    return <h1>hello world</h1>
    //try on babel 
    //as import { jsx as _jsx } from "react/jsx-runtime";
// /*#__PURE__*/_jsx("h1", {
//   children: "hwlllo"
// });

}

//to use this, first we need to export functional component as a default object 
export default Message;