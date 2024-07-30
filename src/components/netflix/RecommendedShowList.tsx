import { useState } from "react";
import RecommendedShow from "./RecommendedShow";

const RecommendedShowList = () => {
  const [shows, setShows] = useState([
    {
      id: 4545665,
      title: "Ind Vs Aus Cricket 2024",
      thumbnailUrl: "https://placehold.co/260x220",
      description: "Enjoy watching Cricket Series between India and Australia",
      category: "Sports",
      publishedOn: "3 days ago",
      isInWatchlist: true,
    },
    {
      id: 7896798,
      title: "Messi - The Legend",
      thumbnailUrl: "https://placehold.co/260x220",
      description: "Enjoy watching the 10 best goals of Messi",
      category: "Sports",
      publishedOn: "2 days ago",
      isInWatchlist: false,
    },
    {
      id: 345678,
      title: "Ronaldo - The GOAT",
      thumbnailUrl: "https://placehold.co/260x220",
      description: "Enjoy watching the 10 best goals of Ronaldo",
      category: "Sports",
      publishedOn: "5 days ago",
      isInWatchlist: false,
    },
  ]);

  // Conditional Rendering outside JSX
  if (shows.length === 0) {
    return (
      <div className="alert alert-warning">
        No Recommended Shows Found. Please watch more videos to get recommended
        shows!
      </div>
    );
  }

  const handleManageWatchlist = (index: number) => {
    // logic to add/remove from watchlist
    console.log(index);
    
    // Updating the state data immutably 
    const duplicateShows = [
      ...shows // spread operator in JS
    ];
    duplicateShows[index].isInWatchlist = !duplicateShows[index].isInWatchlist;

    setShows(duplicateShows);
  };

  return (
    <div className="row">
      {/* Lists & Keys */}
      {shows.map((show, index) => {
        return (
          <div className="col-md-3" key={show.id}>
            <div className="card">
              <img
                src={show.thumbnailUrl}
                className="card-img-top"
                alt={show.title}
              />
              <div className="card-body">
                <h5 className="card-title">{show.title}</h5>
                <p className="card-text">{show.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{show.category}</li>
                <li className="list-group-item">{show.publishedOn}</li>
                <li className="list-group-item">
                  <button
                    className="btn btn-success btn-sm"
                    // when you want to pass parameters to a function
                    onClick={() => handleManageWatchlist(index)}
                  >
                    {/* Conditional Rendering inside JSX using ternary operator */}
                    {show.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedShowList;
