import React, { Component, Fragment } from "react";
import { getTopQuestions } from "./../services/contentServices";
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


export class TopQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { topList: "" };
    this.getTop = this.getTop.bind(this);
  }

  async getTop() {
    try {
      const retrievedTopQuestions = await getTopQuestions();
      this.setState({ topList: retrievedTopQuestions.data });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getTop();
  }

  render() {
    return (
      <div className="topquestions">




        <h3>Most Popular</h3>

        <ol>
          {this.state.topList &&
            this.state.topList.map(question => (
              <Link key={question._id} to={"/post/" + question._id}>
                <li>{question.title}</li>
              </Link>
            ))}
        </ol>





      </div>
    );
  }
}

export default TopQuestions;
