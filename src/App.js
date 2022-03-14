import './App.css';
import Floorplan from './Floorplan';



function App() {
  const floorplan = [
    {
      name: "Kitchen",
      appliances: ["Oven", "Sink"]
    },{
      name: "Bedroom",
      bedNum: [1, 2, 3],
    },{
      name: "Bath",
      size: ["Full Bath", "Half Bath"]
    },{
      name: "Living Room"
    }
  ]
  return (
    <div className="App">
      <Floorplan floorplan={floorplan}/>
    </div>
  );
}

export default App;
