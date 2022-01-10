import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class Newscomponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    key: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    key: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      country: 'in',
      totalResults: 0
    };
  }

  async updateNews() {
    this.setState({ loading: true });
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ac5fbd62c884f31b94661511e9ac648&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(25);
    let parseddata = await data.json();
    this.props.setProgress(50)
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ac5fbd62c884f31b94661511e9ac648&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,

    });
  }
  render() {
    return (
      <>
        <h3 style={{ marginLeft: "3vw", marginTop: "2vw" }}>
          Top Headlines for {this.props.category}
        </h3>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">

            <div className="row">
              {this.state.articles.map((ele) => {
                return (
                  <div className="col-md-4 my-1">
                    <Newsitems
                      key={ele.url}
                      imgUrl={ele.urlToImage ? ele.urlToImage : ''}
                      title={ele.title}
                      desc={ele.description}
                      newsURL={ele.url}
                      author={ele.author}
                      publishedAt={ele.publishedAt}
                      source={ele.source.name}
                    />
                  </div>
                );
              })}

            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
