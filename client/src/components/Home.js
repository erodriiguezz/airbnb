import React, { Component } from "react";
import "../assets/Home.css";

class Home extends Component {
  state = {
    name: this.props.name,
  };

  componentDidMount() {
    fetch("/api/getUsers")
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  render() {
    return (
      <div className="homeWrapper">
        <div className="searchBar">
          <div className="searchBarContainer">
            <div className="inputContainer">
              <label for="">Location</label>
              <input type="text" placeholder="Where are you going?" />
            </div>

            <div className="inputDivider"></div>

            <div className="inputContainer">
              <label for="">Check in</label>
              <input type="text" placeholder="Add dates" />
            </div>

            <div className="inputDivider"></div>

            <div className="inputContainer">
              <label for="">Check out</label>
              <input type="text" placeholder="Add dates" />
            </div>

            <div className="inputDivider"></div>

            <div className="inputContainer">
              <label for="">Guests</label>
              <input type="text" placeholder="Add guests" />
            </div>

            <button>Search</button>
          </div>
        </div>

        <div className="homeHeroWrapper">
          <div>
            <img src="https://a0.muscache.com/im/pictures/21c2735e-a734-40f8-9f60-9ac299c4394c.jpg?im_w=1920" alt="" />
          </div>

          <div className="homeHeroContent">
            <h1>{this.props.name}, not sure where to go next? Perfect.</h1>

            <a href="#">
              <span>I'm Flexible</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
