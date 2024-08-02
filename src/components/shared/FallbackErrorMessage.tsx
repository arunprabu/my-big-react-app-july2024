const FallbackErrorMessage = () => {
  return (
    <div className="alert alert-danger mt-5">
      <p>Sorry! Some Error Occurred! </p>
      <p>Please try again by refreshing the page!</p>
      <p>Contact Admin (support@example.com) if issue persists !</p>
    </div>
  );
}

export default FallbackErrorMessage