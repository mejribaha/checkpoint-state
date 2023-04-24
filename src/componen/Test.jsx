import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //create  Person object field
      person: {
        fullName: "Cillian Murphy",
        bio: " un acteur et musicien irlandais, né le 25 mai 1976 à Douglas. Il a commencé sa carrière en tant que musicien de rock. Il a ensuite joué d'abord au théâtre puis dans des courts métrages et des films indépendants à la fin des années 1990.",
        imgSrc:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.736xw:0.493xh;0.257xw,0.0159xh&resize=300:*",
        profession: "Acteur et Musicien",
      },

      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="div">
          <h1 style={{ color: "black" }}> {this.state.person.fullName}</h1>
          <img
            src={this.state.person.imgSrc}
            alt={this.state.person.fullName}
          />
          <p style={{ color: "#47083f", fontSize: "1.4rem" }}>
            {this.state.person.bio}
          </p>
          <p style={{ color: "#01464f" }}>{this.state.person.profession}</p>
          <p className="p1">Counter: {this.state.counter}</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
}
