import "./pagination.css";
import "../Post/Post.css";
import React, { PureComponent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

// import News from '../News/News'

export class FirstComponents extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 1,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      var data = res.data;

      var slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgtableData: res.data,
        tableData: slice,
      });
    });
  }

  render() {
    return (
      <div>

        {this.state.tableData.map((tdata, i) => (
          <div className="container-post">
            <p className="title-id">{tdata.id}</p>
            <h2 className="title-post">{tdata.title}</h2>
            <p className="Texto-post">{tdata.body}</p>
            <a className="More-post" href={tdata.id}>
              LEIA MAIS
            </a>
            {/* <News></News> */}

          </div>
        ))}

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default FirstComponents;
