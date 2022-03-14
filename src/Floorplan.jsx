import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";

const Floorplan = (props) => {
  return ( 
    <>
        <Bedroom bedNum={1}/>
        <Bath size={"Half Bath"}/>
        <Kitchen/>
        <Bedroom bedNum={2}/>
        <LivingRoom/> 
        <Bedroom bedNum={3}/>
        <Bath size={"Full Bath"}/>
    </>
   );
}
 
export default Floorplan;