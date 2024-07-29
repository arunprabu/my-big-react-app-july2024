interface LatestShowProps {
  title: string;
  publishedOn: string;
  category: string;
  thumbnailUrl: string;
  children: React.ReactNode;
}

const LatestShow = (props: LatestShowProps) => {
  // receive the data from parent comp
  console.log(props);
  /*
   * props are objects
   * props are read-only
   * props can also have children
   */

  return (
    <div className="col-md-3">
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
        <img src={props.thumbnailUrl} />
        <div className="d-flex flex-column  p-2 pb-1 text-white text-shadow-1">
          <h3 className="mb-1 fw-bold">{props.title}</h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="d-flex align-items-center me-3">
              <small>{props.category}</small>
            </li>
            <li className="text-right">
              <small>{props.publishedOn}</small>
            </li>
          </ul>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestShow