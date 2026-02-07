export default function HistoricArea() {
  return (
    <>
      <section className="page-header">
        <h1>Historic Area</h1>
        <p>Historic Point Richmond &mdash; The Location You Deserve</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="col">
              <p className="lead">
                Point Richmond is a charming, walkable neighborhood with a rich
                history dating back to the early 1900s. Nestled between the hills
                and San Francisco Bay, it offers stunning views, friendly
                neighbors, and a vibrant local culture.
              </p>
              <p>
                With easy freeway access via I-580 and I-80, Point Richmond
                connects you to the greater Bay Area while maintaining its
                small-town feel. San Rafael is about 10 minutes away, Berkeley 20
                minutes, and Oakland 30 minutes.
              </p>
            </div>
            <div className="col">
              <div className="info-card">
                <h3>Why Point Richmond?</h3>
                <ul>
                  <li>Historic small-town character</li>
                  <li>Waterfront location on SF Bay</li>
                  <li>Easy freeway access (I-580 &amp; I-80)</li>
                  <li>Great restaurants and local shops</li>
                  <li>Parks, trails, and outdoor recreation</li>
                  <li>Thriving arts community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Local Attractions</h2>
          <div className="attractions-grid">
            <div className="attraction-card">
              <div className="attraction-icon">&#127967;</div>
              <h3>Miller/Knox Regional Park</h3>
              <p>
                A scenic park offering hiking trails, sandy beaches, and
                panoramic views of the San Francisco Bay and the Golden Gate
                Bridge. Perfect for walking, picnicking, and enjoying nature.
              </p>
            </div>

            <div className="attraction-card">
              <div className="attraction-icon">&#128646;</div>
              <h3>Golden State Model Railroad Museum</h3>
              <p>
                One of the largest model railroad exhibits in the country,
                featuring incredibly detailed layouts and operating model trains.
                A unique local attraction for all ages.
              </p>
            </div>

            <div className="attraction-card">
              <div className="attraction-icon">&#127860;</div>
              <h3>Great Restaurants</h3>
              <p>
                Point Richmond boasts a variety of excellent dining options, from
                casual cafes to fine dining, all within walking distance of The
                Point at 580.
              </p>
            </div>

            <div className="attraction-card">
              <div className="attraction-icon">&#9875;</div>
              <h3>SS Red Oak Victory Ship</h3>
              <p>
                A restored World War II cargo ship and museum, the SS Red Oak
                Victory is one of only three remaining Victory ships and a
                National Historic Landmark.
              </p>
            </div>

            <div className="attraction-card">
              <div className="attraction-icon">&#129406;</div>
              <h3>Hiking in the Neighborhood</h3>
              <p>
                Miles of trails wind through the hills above Point Richmond,
                offering breathtaking views of the bay, the bridges, and the
                surrounding landscape.
              </p>
            </div>

            <div className="attraction-card">
              <div className="attraction-icon">&#127946;</div>
              <h3>The Plunge</h3>
              <p>
                A historic indoor swimming pool and recreation facility that has
                served the Point Richmond community for generations. Great for
                swimming and fitness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
