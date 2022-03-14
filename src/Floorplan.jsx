import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";

const Floorplan = (props) => {
  return ( 
    <>
      <h3>
        <Kitchen/>
        <LivingRoom/> 
        <Bedroom bedNum={1}/>
        <Bedroom bedNum={2}/>
        <Bedroom bedNum={3}/>
        <Bath size={"Full Bath"}/>
        <Bath size={"Half Bath"}/>
      </h3>
    </>
   );
}
 
export default Floorplan;