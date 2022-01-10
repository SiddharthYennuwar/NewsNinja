import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    let { title, desc, imgUrl, newsURL, author, publishedAt, source } = this.props;
    let d = new Date(publishedAt);
    return (
      <div>

        <div className="row mx-2 my-2">
          <h5><span style={{ color: "white", border: '2px solid black', backgroundColor: 'black', position: 'relative', top: '1vw', zIndex: '1' }} class="badge badge-secondary">Source : {source}</span></h5>
          <div className="card">

            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown Author"} on {d.toGMTString()}
                </small>
              </p>
              <a
                href={newsURL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ marginLeft: '30%' }}
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
