// we are done with the ListGroup component, hence deleting all the related code also

// this is the component wher we use all the components
// import Message from './Message';
import Alert from './components/Alert'
import ListGroup from './components/ListGroup';
//inside this div we wan tto display all the components, first we will display the message component
//to use message component here , first we need to import it
function App(){
  let items = ['newyork','tokyo','sanfrancisco','london','paris'];
  //this is the array of items which we will pass to the list group component

  // return <div><Message/></div>;
  //this is an instance of component list group
  const handleSelect = (item:string)=>{
    console.log(item);
    //this is the function which will be called when we select an item from the list group

  }
  return (
  <>
  <div><ListGroup items={items} heading="cities"  onSelectItem={handleSelect}/></div>;
  {/* // html attributes ki trh props pass hojayenge */}
  {/* <ListGroup items={['mumbai','delhi','banglore']} heading="cities2"/>; */}
  <Alert />
  </>
  );
}
export default App;
// //this is the main component of the app
// //this is the component where we will use all the components
// import React from 'react';
// function App(){
//   return(
//     <>
//     </>
//   )
// };
// export default App;