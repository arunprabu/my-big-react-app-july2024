import { useState } from "react";
import FeaturedShow from "./FeaturedShow";

const FeaturedShowList = () => {
  /* States 
    * component-wide updatable data
    * whenever you modify the state -- UI will show the updates
    * NEVER mutate the state directly
    * call the setter function to update the state
  */
  const [resolution, setResolution] = useState("HD"); 
  console.log(resolution);

  const handleChangeResolution = () => {
    setResolution("4K");
  }

  return (
    <div className="container">
      <p>
        Enjoy watching the shows in {resolution}{" "}
        <button className="btn btn-warning" onClick={handleChangeResolution}>Change Resolution</button>
      </p>

      <div className="row">
        <FeaturedShow />
      </div>
    </div>
  );
};

export default FeaturedShowList;
