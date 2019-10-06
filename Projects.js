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
          title="fCC Libraries Projects "
          extra={
            <a href="https://github.com/djolesusername/fcc-pomodoro">Github</a>
          }
          headStyle={{ textAlign: "left" }}
          style={{ textAlign: "left" }}
        >
          <p>
            Five mini-projects that that allowed me to test out different
            frameworks. Applying some logic was needed to.
          </p>

          <p>
            <strong> Project challanges: </strong> Calculator and Pomodoro clock
            presented more challenges than others. I didn't really knew where to
            start with calculator but things eventualy came into place. Pomodoro
            clock seemed like an easier one but due to special nature of the
            tests I had to spend a lot of time re-designing solution. This was
            frustrating but useful experience.
          </p>
          <p>
            <strong> Technologies used: </strong> HTML, CSS, Bootstrap,
            JavaScript, D3, ReactJS
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
            Mini-projects covering various topics, most notably DOM manipulation
            and NodeJS/express/mongo setup.
          </p>

          <p>
            <strong>Project challanges:</strong> Digging into express routing
            and flow of data.
          </p>
          <p>
            <strong> Technologies used: </strong> HTML, CSS, JavaScript, NodeJS,
            Express, Mongo.db
          </p>
        </Card>

        <Card
          className="card"
          title="Memory game"
          extra={<a href="#">Freelance (private)</a>}
          style={{ textAlign: "left" }}
        >
          <p>
            JavaScript memory game with special theme. Memory games are always
            interesting especialy if the clock is ticking and every move counts!
          </p>

          <p>
            <strong>Project challanges:</strong>
          </p>
          <p>
            <strong> Technologies used: </strong> HTML, CSS, JavaScript
          </p>
        </Card>

        <Card
          className="card"
          title="TBC (Web Scraper)"
          extra={<p> private</p>}
          headStyle={{ textAlign: "left" }}
          style={{ textAlign: "left" }}
        >
          <p>
            This time around I teamed up with more experienced developers in
            attampt to learn about code organization. It was great chance to
            experience building more complex app from the start to the end and
            learn a bit about migrations.
          </p>

          <p>
            <strong> Project challenges: </strong> Evrything that involves
            facebook.. and date formats :)
          </p>
          <p>
            <strong> Technologies used: </strong> Javascript, Node, SQL lite
          </p>
        </Card>
      </div>
    );
  }
}

export default Projects;
