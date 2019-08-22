import React, { Component } from "react";
import { Timeline } from "antd";
import "./Courses.css";

class Courses extends Component {
  render() {
    return (
      <div className="Courses">
        <Timeline>
          <Timeline.Item className="timeline" style={{ textAlign: "left" }}>
            <p>
              <b>Jul 2018</b>
              <br />
              FCC: Responsive Web Design
            </p>
          </Timeline.Item>
          <Timeline.Item className="timeline" style={{ textAlign: "left" }}>
            <p>
              <b>Oct 2018</b>
              <br />
              FCC: Javascript Algorithms And Data Structures Certification
            </p>
          </Timeline.Item>
          <Timeline.Item className="timeline" style={{ textAlign: "left" }}>
            <p>
              <b>Feb 2019</b>
              <br />
              FCC: Front End Libraries Certification
            </p>
          </Timeline.Item>
          <Timeline.Item className="timeline" style={{ textAlign: "left" }}>
            <p>
              <b>Jun 2019</b>
              <br />
              FCC: Data Visualization
            </p>
          </Timeline.Item>
          <Timeline.Item className="timeline" style={{ textAlign: "left" }}>
            <p>
              <b>Jul 2019</b>
              <br />
              FCC: Apis and Microservices
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default Courses;
