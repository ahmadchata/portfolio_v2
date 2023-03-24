import React, { Component } from "react";
import Link from "next/link";

class Experience extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("zoomIn");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " zoomIn animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <section className="products-area">
        <div className="container">
          <h1 className="monteya-font orange">Experience</h1>

          <div className="tab experience-tab">
            <ul className="tabs-nav">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab1")}
              >
                <span>Jan 2022 - Present</span>
              </li>
              <li onClick={(e) => this.openTabSection(e, "tab2")}>
                <span>Jun 2021 - Aug 2022</span>
              </li>
              <li onClick={(e) => this.openTabSection(e, "tab3")}>
                <span>Apr 2020 - Mar 2021</span>
              </li>
              {/* <li onClick={(e) => this.openTabSection(e, "tab4")}>
                <span>Jan 2014 - Jul 2015</span>
              </li>
              <li onClick={(e) => this.openTabSection(e, "tab5")}>
                <span>Sep 2010 - Jan 2014</span>
              </li> */}
            </ul>

            <div className="tab-content">
              <div id="tab1" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="">
                      <span>Front-End Engineer</span>
                      <h2>Nigerian Army Cyber Warfare Command</h2>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-content">
                      <ul>
                        <li>
                          Recreating the official website that is accessed by
                          more than three million people with NextJs which will
                          improve the performance by 25% in relation to the
                          existing website.
                        </li>
                        <li>
                          Developed the front end of a crime management
                          application for the core of military police using
                          NextJs which reduced paperwork by 60% and increased
                          efficiency by 55% in the core.
                        </li>
                        <li>
                          Mentoring new interns in the team in HTML, CSS and
                          JavaScript.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="">
                      <span>Front-End Engineer</span>
                      <h2>Insurpass Technologies</h2>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-content">
                      <ul>
                        <li>
                          Designed the company&apos;s API based customer service
                          application using NextJs and became a valued member on
                          the team, creating working solutions for the needs of
                          the business.
                        </li>
                        <li>
                          Increased the performance of the 3000+ customers user
                          dashboard by 33% by using code-splitting, precaching,
                          memoizing components and using web workers for sorting
                          which aided in retaining users and increasing their
                          interaction with the dashboard.
                        </li>
                        <li>
                          Consistently added more UI features to improve overall
                          platform usage.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab3" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="">
                      <span>Full-Stack Web Developer</span>
                      <h2>Microverse</h2>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-content">
                      <ul>
                        <li>
                          Developed full-stack projects by teaming up with
                          developers from all over the world.
                        </li>
                        <li>
                          Examined the codes written in daily meetings and
                          worked to ensure that they are delivered properly
                          before the deadline.
                        </li>
                        <li>
                          Wrote articles to help developers of all levels
                          understand challenging concepts from HTML, CSS Ruby on
                          Rails and Data Structure/Algorithms.
                        </li>
                        <li>
                          Reviewed and contributed to open source projects built
                          in Ruby, Ruby on rails, JavaScript and React.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
