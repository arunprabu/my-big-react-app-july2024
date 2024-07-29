import LatestShow from "./LatestShow";

const LatestShowList = () => {

  return (
    <div className="container">
      <div className="row">
        <LatestShow
          title="Money Heist - Final Season"
          publishedOn="2 days ago"
          category="Thriller"
          thumbnailUrl="https://placehold.co/600x400/purple/yellow?text=MoneyHeistFinalSeason"
        >
          Money heist is a thriller released a few days back....
        </LatestShow>

        <LatestShow
          title="Berlin"
          publishedOn="4 days ago"
          category="Thriller"
          thumbnailUrl="https://placehold.co/600x400/green/white?text=Berlin"
        >
          Berlin is a sequel of Money Heist released a few days back....
        </LatestShow>
      </div>
    </div>
  );
};

export default LatestShowList;
