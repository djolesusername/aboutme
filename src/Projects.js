import React, { Component } from "react";
import { Card } from "antd";

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <Card
          className="card"
          title="MOM.RS"
          extra={<a href="http://mom.rs">Site</a>}
          headStyle={{ textAlign: "left" }}
          style={{ textAlign: "left" }}
        >
          <p>
            Website created with a goal to promote critical thinking and
            philosophy. Site features articles on proper logical reasoning, most
            common logical fallacies and a bit of psychology with articles on
            cognitive biases. We also wanted to provide a special section for
            philosophy students, one that can help them with relevant literature
            and practical advises. Working with a strong group of smart people
            was very enjoyable and this remains my favorite project up to date.
          </p>

          <p>
            <strong> Project challenges: </strong> Finding relevant yet
            accessible content, one that keep readers attention remains the
            biggest challenge of the project. Dealing with analytics and CEO
            became a part of solution and with that, good learning opportunity.
          </p>
          <p>
            <strong> Technologies used: </strong> Wordpress
          </p>
        </Card>

        <Card
          className="card"
          title="freeCodeCamp Front-End Libraries Projects "
          extra={
            <a href="https://github.com/djolesusername/fcc-pomodoro">Github</a>
          }
          headStyle={{ textAlign: "left" }}
          style={{ textAlign: "left" }}
        >
          <p>
            Five mini-projects that that allowed practicing using frameworks and
            applying some logic to it.
          </p>

          <p>
            <strong> Project challanges: </strong> Calculator and Pomodoro clock
            presented few challenges. I had blockage with calculator not really
            knowing where to start. Pomodoro clock seemed like an easy one but
            due to special nature of the tests I had to spend a lot of time
            re-designing solution that is compatible with fcc test engine.
          </p>
          <p>
            <strong> Technologies used: </strong> HTML, CSS, JavaScript, ReactJS
          </p>
        </Card>

        <Card
          className="card"
          title="Odin Javascript and NodeJS projects "
          extra={
            <a href="https://github.com/djolesusername/Etch-a-Sketch">Github</a>
          }
          style={{ textAlign: "left" }}
        >
          <p>
            Mini-projects covering various projects from DOM manipulation to the
            basic NodeJS routing.
          </p>

          <p>
            <strong>Project challanges:</strong> Digging into express routing
            and flow of data.
          </p>
          <p>
            <strong> Technologies used: </strong> HTML, CSS, JavaScript,
            ReactJS, NodeJS
          </p>
        </Card>
      </div>
    );
  }
}

export default Projects;
