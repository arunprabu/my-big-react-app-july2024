const ProductsPage = () => {

  return (
    <>
      <h1>Shop Our Products</h1>
      <div className="row">

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              className="card-img-top"
              width={100}
              height={200}
            />
            <div className="card-body">
              <h5 className="card-title">iPhone </h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <p>USD. 500</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary btn-sm">
                Add to Cart
              </button>
              <button
                type="button"
                className="ms-2 btn btn-outline-danger btn-sm"
              >
                Favorite
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ProductsPage;
