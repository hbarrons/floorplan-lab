import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";

const Floorplan = (props) => {
  return ( 
    <>
      <h3> <Bedroom /> </h3>
      <h3> <Kitchen/> </h3>
      <h3> <LivingRoom/> </h3>
      <h3> <Bath/> </h3>
    </>
   );
}
 
export default Floorplan;