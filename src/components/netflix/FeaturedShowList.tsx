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

  const [shows] = useState([
    {
      title: "Godfather I",
      description:
        "The Godfather is a 1972 American epic gangster film directed by Francis Ford Coppola...",
    },
    {
      title: "The Good The Bad and The Ugly",
      description:
        "The Good The Bad and The Ugly is a movie released in 1966...",
    },
    {
      title: "The Shashank Redemption",
      description: "The Shashank Redemption is a movie released in 1994...",
    },
  ]);

  const handleChangeResolution = () => {
    setResolution("4K");
  };

  return (
    <div className="row">
      <p>
        Enjoy watching the shows in {resolution}{" "}
        <button className="btn btn-warning" onClick={handleChangeResolution}>
          Change Resolution
        </button>
      </p>

      <FeaturedShow title={shows[0].title} description={shows[0].description} />

      <FeaturedShow title={shows[1].title} description={shows[1].description} />

      <FeaturedShow title={shows[2].title} description={shows[2].description} />
    </div>
  );
};

export default FeaturedShowList;
