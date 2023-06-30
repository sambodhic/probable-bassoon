import './App.css';
import {Accordion} from './components/Accordion';

function App() {
  return (
    <div className="App">
      <h1>Component Example</h1>
      <Accordion content={"Accordian 1"}/>
      <Accordion content={"Accordian 2"}/>
      <Accordion content={"Accordian 3"}/>
      <Accordion content={"Accordian 4"}/>
    </div>
  );
}

export default App;
