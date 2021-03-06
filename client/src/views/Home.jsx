import React from "react";
import { Link } from "react-router-dom";
import TopQuestions from "../components/TopQuestions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron jumbotronhome col-auto">
        <h1 className="display-3">
          Would <br />
          You
          <br /> Rather?
        </h1>

        <div className="d-flex justify-content-around align-middle overjumbo">
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={true}
          >
            <div className="btnmenu">
              <Link
                className="btn btn-outline-dark menubtn"
                to="/post/random"
                role="button"
              >
                Random Dilemma
              </Link>
              <Link
                className="btn btn-outline-dark menubtn "
                to="/post/create"
                role="button"
              >
                Create New
              </Link>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>

      <TopQuestions />
      <p className="tagline">"Life is the art of choice"</p>
    </div>
  );
};

export default Home;
