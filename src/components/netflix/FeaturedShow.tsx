interface FeaturedShowProps {
  title: string;
  description: string;
}

const FeaturedShow: React.FC<FeaturedShowProps> = ({ title, description }) => {
  // destructuring props
  return (
    <div className="col-md-4 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary">Watch Now</button>
          <button className="btn btn-success ms-2">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedShow;
