// this is the component wher we use all the components
// import Message from './Message';
import ListGroup from './components/ListGroup';
//inside this div we wan tto display all the components, first we will display the message component
//to use message component here , first we need to import it
function App(){
  // return <div><Message/></div>;
  //this is an instance of component list group
  return <div><ListGroup/></div>;
}
export default App;
//this is the main component of the app
//this is the component where we will use all the components