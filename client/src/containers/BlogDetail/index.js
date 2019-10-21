import React, { Component } from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BlogDetail extends Component {
  state = {
    blog: "",
    blog_id: "",
    comments: [],
    uic: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.getComments(id);
  }

  getComments = async id => {
    const url = `/api/blogs/${id}`;
    try {
      const commentsResponse = await axios.get(`${url}/comments`);
      const result = commentsResponse.data;
      const blog = result[0].blog;
      const blog_id = result[0].blog_id;
      const comments = result;
      this.setState({ blog, comments, blog_id });
    } catch (e) {
      console.log(e);
    }
  };

  renderComments = () => {
    return (
      <Row>
        <Col>
          {this.state.comments.map(comment => (
            <p key={comment.commentid}>{comment.comment}</p>
          ))}{" "}
        </Col>
      </Row>
    );
  };

  handleInputChange = event => this.setState({ uic: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    const { uic, blog_id } = this.state;
    axios
      .post("/api/comments", { blog_id, comment: uic })
      .then(response => console.log(response))
      .catch(err => console.log(err));
    this.getComments(blog_id);
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <h1>Blogdetail Page</h1>
            <h2>{this.state.blog}</h2>
          </Col>
        </Row>
        {this.renderComments()}

        <form>
          <div className="form-group">
            <label htmlFor="#exampleinput">Comment</label>
            <input
              type="text"
              value={this.state.uic}
              className="form-control"
              id="exampleinput"
              onChange={this.handleInputChange}
            />
            <button tpye="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BlogDetail;
