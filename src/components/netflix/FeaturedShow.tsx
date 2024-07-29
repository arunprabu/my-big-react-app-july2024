const FeaturedShow = () => {
  console.log("Inside FeaturedShow");
  return (
    <div className="col-md-4 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Movie #1</h5>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nam
            repellat fuga.
          </p>
          <button className="btn btn-primary">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedShow;
