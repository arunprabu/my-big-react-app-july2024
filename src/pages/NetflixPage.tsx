import FeaturedShowList from "../components/netflix/FeaturedShowList";
import LatestShowList from "../components/netflix/LatestShowList"
import RecommendedShowList from "../components/netflix/RecommendedShowList";

const NetflixPage = () => {
  return (
    <div>
      <h1 className="text-center">Welcome to Netflix style of App</h1>
      <h2>Latest Shows | Props Demo</h2>
      <LatestShowList />
      <h2 className="mt-5">Featured Shows | States and Event Demo</h2>
      <FeaturedShowList />
      <h2 className="mt-5">
        Recommended Shows | States, Events, Lists and Keys, Conditional
        Rendering Demo
      </h2>
      <RecommendedShowList />
    </div>
  );
}

export default NetflixPage