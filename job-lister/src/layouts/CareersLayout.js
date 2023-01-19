import { Outlet } from "react-router-dom";

const CareersLayout = () => {
    return ( 
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus reiciendis ut, atque qui id praesentium saepe doloribus nulla facilis.</p>

            <Outlet/>

        </div>

     );
}
 
export default CareersLayout;