import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <div>
      <h2>Kitchen</h2>
      <h3><Oven/></h3>
      <h3><Sink/></h3>
    </div>
   );
}
 
export default Kitchen;