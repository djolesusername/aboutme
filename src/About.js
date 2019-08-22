import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2> Hello,</h2>
        <p className="aboutp">
          I am Djordje, a fan of programming and web development. Being self
          thought programmer I was lucky enough to have an awesome mentor - a
          philosopher-friend with 10+ years of programming experience. I am
          constantly working on myself and current environment really helps: I
          am working as technical support in tech-savy and young team. I’m
          interested in human sciences - education, psychology and ethics but I
          also love to play with numbers and data.
        </p>

        <h3>Contact and links: </h3>
        <div>
          <a id="profile-link" href="https://github.com/djolesusername">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i className="fab fa-linkedin" />
          </a>
          <a id="profile-link" href="https://www.freecodecamp.org/djole">
            <i className="fab fa-free-code-camp" />
          </a>
          <a href="mailto:djordje@mom.rs">
            <i className="far fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
