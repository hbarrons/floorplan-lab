import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <div>
      Kitchen
      <div><Oven/></div>
      <div><Sink/></div>
    </div>
   );
}
 
export default Kitchen;