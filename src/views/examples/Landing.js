/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                      The Tech benefits in the life{" "}
                      </h1>
                      <p className="lead text-white">
                      I'm exciting about how could we use the tech more in our life ,
                      and how to use it well and in the correct way ,and discover new 
                      techniques take less time and effort with short coding to build as much we can
                       something helpful for people.
                      </p>
                      </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    
                  <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Bus-Mall
                          </h6>
                          <p className="description mt-3">
                          A website has three random images every time the user chooses one image then it adds automatically to the counter with the views for every image after the allowed attempts then he can show the results by the button and it will display a list of these results with a chart and if the user try another once then it will display the results for the two tries         
                                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS3
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS + DOM
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://amneh-momani.github.io/bus-mall/"
                            // onClick={e => e.preventDefault()}
                          >
                            Display
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          About-Mee
                          </h6>
                          <p className="description mt-3">
                          First of all the website has many questions to makes the user interacts with it ,And these questions about the owner of the website so it gives the user an ideas and more knowledge about the website's owner .
These questions ask the user about the owner:
what's the owner hobbies
where the owner lives
does he work
what's his lucky number
does he speak Arabic language
So if there was many questions then that's mean I used many prompts to ask the user what I want and there were many attempts to give the user more chances to submite the correct answer and after these attempts it shows the correct answer to the user and I provided this thing by for statement .

In HTML file I added 2 lists order and unorder lists,One of them contains my education and 2nd one has Most places that I would like to visit and it has 10 .                                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS3
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://amneh-momani.github.io/About-Mee/"
                            // onClick={e => e.preventDefault()}
                          >
                            Display
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    
                   
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Hobbies
                          </h6>
                          <p className="description mt-3">
                          In this website there's many questions for users and they have to asnwer all of them .

so first thing it asks about the user (name,age) then it shows welcome msg for that user then it completes asking the questions about(his fav color, first city he would like to visit , the 2nd city then it will multiply 2 numbers the user will input them then ,ask him which hobby does he want to know, ask about his fav hobby and if it wasn't available then it will show him the options to choose one of them,ask how much time he prefer to does this hobby ).

After that it will show the results as paragraphs in separate places with little expressions and the rate of his hobby as a pic and if he chose unavailable hobby that he would to know more about it then it will show red paragraph of that issue.

there's an introduction of the website then a section of few hobbies with short description for each one of them with their pics.        
                                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS3
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS
                            </Badge>
                          
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://amneh-momani.github.io/hobbies/"
                            // onClick={e => e.preventDefault()}
                          >
                            Display
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Chocolate-Pizza
                          </h6>
                          <p className="description mt-3">
                          A website shows simple design with CSS3 to show how the website page could be design and separate it to many section.        
                                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS3
                            </Badge>
                          
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://amneh-momani.github.io/chocolate-pizza/"
                            // onClick={e => e.preventDefault()}
                          >
                            Display
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  
                  <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Salmon
                          </h6>
                          <p className="description mt-3">
                          A website has many shops sells salmon and fishes and every shop has opening hours and it has a table displays sales for each shop in every hour and it's possible to calculate how much customer 
                          could be every hour by that form then add it to the sales table                         </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS3
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS + DOM
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://amneh-momani.github.io/Salmon/"
                            // onClick={e => e.preventDefault()}
                          >
                            Display
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          UserView
                          </h6>
                          <p className="description mt-3">
                          A website asks the user many question to know about him the displays the information in the website page.And the used technologies are:                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS3
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://amneh-momani.github.io/UserView/"
                            // onClick={e => e.preventDefault()}
                          >
                            Display
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Wirefame
                          </h6>
                          <p className="description mt-3">
                          A website has a simple website design to shows how the websites pages should look like (the structure) .And the used technologies are:                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS3
                            </Badge>
                           
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://amneh-momani.github.io/wirefamee-exercise/"
                            // onClick={e => e.preventDefault()}
                          >
                            Display
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          
          <section className="section section-lg pt-lg-0 mt-200">
            <Container>
              <Row className="justify-content-center">

              </Row>
              </Container>
              </section>
       {/* <Download /> */}
        </main>
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default Landing;
