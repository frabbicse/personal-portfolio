export default function Card(news: any) {
  return (
    <div className="row">
      {news?.news?.map((n: any, i: any) => {
        return (
          <div className="card col-md-6 mb-4 mt-1" key={i}>
            <div className="card-body">
              <h5 className="card-title">{n?.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{n.date}</h6>
              <p className="card-text">{n?.description}</p>
              {/* <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
