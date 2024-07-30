// TODO: implement child to parent component communication here
const RecommendedShow = () => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src="https://placehold.co/600x400/red/white?text=TheShashankRedemption"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">title</h5>
          <p className="card-text">lorem ipsum</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Drama</li>
          <li className="list-group-item">2 days ago</li>
          <li className="list-group-item">
            <button className="btn btn-success btn-sm">Add to Watchlist</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RecommendedShow