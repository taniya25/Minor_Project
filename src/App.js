import React, { useState } from "react";
import Index from "./Components/Index";
import { BsBookmarks } from "react-icons/bs";
import "./App.css";
import { IconContext } from "react-icons/lib";

const App = () => {
  const [click, setClick] = useState(false);
  const Page = () => {
    return (
      <div>
        <div className="app">
          <div className="app-header">
            <h1 className="header">University Placement CELL</h1>
            <button className="login-btn" onClick={() => setClick(!click)}>
              Login
            </button>
          </div>
          <div className="inner-div">
            <div className="inner-box">
              <span className="inner-box-heading">
                <h2 className="campus-recruitment">Campus Recruitment</h2>
              </span>
              <p className="content">
                Welcome to the <strong>Recruitment Portal</strong> for
                <br />
                conducting Campus Placement for University students.
                <br />
                Apply for coveted opportunities to build your career.
                <br />
              </p>
              <div>
                <ul>
                  <li>
                    <button>Login as Recruiter</button>
                    <button>Login as Student</button>
                  </li>
                </ul>
              </div>
              <br />
              Read on to know more about the opportunities in the past
              <br />
              and to create them in the present.
            </div>
          </div>
        </div>
        <div className="main-article">
          <div className="special-container">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <BsBookmarks />
            </IconContext.Provider>
            <h2 style={{ marginBottom: "15px" }}>
              <strong>About the Portal</strong>
            </h2>
            <p style={{ textAlign: "center" }}>
              Campus Recruitment is an important facet of a University degree
              and a student's career.
              <br />
              To escape the daily hassle of endless mails and messages, we bring
              to you a dedicated website for
              <br />
              the<strong> Campus Placement program</strong> facilitated by the{" "}
              <strong>Training and Placement Cell</strong>.
            </p>
          </div>
          <section class="wrapper style2 container special-alt">
            <div class="row gtr-50">
              <div class="col-8 col-12-narrower">
                <header>
                  <h2>
                    A robust Recruitment Portal for everything about the Campus
                    Placement Drive in one place.
                  </h2>
                </header>
                <p>
                  Save time and be notified of updates on your applications as
                  they come up.
                  <br />
                  Access all your applications and postings on your personal
                  Dashboard.
                  <br />
                  View and update your details in a secure environment optimized
                  for you.
                  <br />
                  <br />
                  Visit the University Website for more information.
                </p>
                <footer>
                  <ul class="buttons">
                    <li>
                      <button>Go to University.in</button>
                    </li>
                  </ul>
                </footer>
              </div>
              <div class="col-4 col-12-narrower imp-narrower">
                <ul class="featured-icons">
                  <li>
                    <span class="icon fa-clock">
                      <span class="label">Feature 1</span>
                    </span>
                  </li>
                  <li>
                    <span class="icon solid fa-volume-up">
                      <span class="label">Feature 2</span>
                    </span>
                  </li>
                  <li>
                    <span class="icon solid fa-laptop">
                      <span class="label">Feature 3</span>
                    </span>
                  </li>
                  <li>
                    <span class="icon solid fa-inbox">
                      <span class="label">Feature 4</span>
                    </span>
                  </li>
                  <li>
                    <span class="icon solid fa-lock">
                      <span class="label">Feature 5</span>
                    </span>
                  </li>
                  <li>
                    <span class="icon solid fa-cog">
                      <span class="label">Feature 6</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section id="students" class="wrapper style1 container special">
            <div class="row">
              <header class="container">
                <h2>
                  <strong>For Students</strong>
                </h2>
              </header>

              <div class="col-4 col-12-narrower">
                <section>
                  <span class="icon solid featured fa-check"></span>
                  <header>
                    <h3>Register and Login</h3>
                  </header>
                  <p class="sectioncont">
                    Sign up with your college email id and fill in your correct
                    details to be registered in the Student Database of the
                    University.
                  </p>
                </section>
              </div>
              <div class="col-4 col-12-narrower">
                <section>
                  <span class="icon solid featured fa-check"></span>
                  <header>
                    <h3>View Dashboard</h3>
                  </header>
                  <p class="sectioncont">
                    Keep an eye on your applications and modify your details
                    according to changes or add-ons in your resume.
                  </p>
                </section>
              </div>
              <div class="col-4 col-12-narrower">
                <section>
                  <span class="icon solid featured fa-check"></span>
                  <header>
                    <h3>Check Notice Board</h3>
                  </header>
                  <p class="sectioncont">
                    Stay updated with the latest opportunities offered by
                    Recruiters coming to your University and the events
                    organized by them.
                  </p>
                </section>
              </div>
            </div>

            <footer class="major">
              <ul class="buttons">
                <li>
                  <a href="#brochure" class="button primary">
                    Download Placement Brochure
                  </a>
                </li>
              </ul>
            </footer>
          </section>
          <section id="recruiters" class="wrapper style3 container special">
            <header class="major">
              <h2>
                <strong>For New Recruiters</strong>
              </h2>
            </header>

            <div class="row">
              <div class="col-6 col-12-narrower">
                <section>
                  <a href="#" class="image featured">
                    <img src="images/pic01.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Registration via E-mail</h3>
                  </header>
                  <p class="sectioncont">
                    Enlist your company for recruitment along with the Person of
                    Contact (eg. HR) by contacting the TnP Cell via mail. Share
                    your company details at <b>tpo@university.in</b>.
                  </p>
                </section>
              </div>
              <div class="col-6 col-12-narrower">
                <section>
                  <a href="#" class="image featured">
                    <img src="images/pic02.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Invitation for Recruitment</h3>
                  </header>
                  <p class="sectioncont">
                    A formal invitation for Recruitment is provided by the
                    Placement Officer along with the placement form and a unique
                    Recruiter ID for the current session.
                  </p>
                </section>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-12-narrower">
                <section>
                  <a href="#" class="image featured">
                    <img src="images/pic03.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Job/Training Notification Form</h3>
                  </header>
                  <p class="sectioncont">
                    Fill in necessary details about the Company's visit to the
                    University for hiring eligible Students for Full-Time
                    Employment or Summer Internships.
                  </p>
                </section>
              </div>
              <div class="col-6 col-12-narrower">
                <section>
                  <a href="#" class="image featured">
                    <img src="images/pic04.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Post Openings and Events</h3>
                  </header>
                  <p class="sectioncont">
                    Conduct events and upload eligibility criteria and job
                    descriptions on the Notice Board to invite applications,
                    which can be viewed on your Recruiter Dashboard.
                  </p>
                </section>
              </div>
            </div>
          </section>
        </div>
        <section id="cta">
          <header>
            <h2>
              <strong>make your future today.</strong>
            </h2>
            <p>Have a question we didn't cover?</p>
          </header>
          <footer>
            <ul class="buttons">
              <li>
                <a href="contact.html" class="button primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </footer>
        </section>
        <footer id="footer">
          <ul class="copyright">
            <li>&copy; Copyright 2020</li>
            <li>Design: </li>
          </ul>
        </footer>
      </div>
    );
  };
  return <div>{!click ? Page() : <Index />}</div>;
};

export default App;
