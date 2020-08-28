import React, { Component, Fragment } from "react";
import {
  Carousel,
  Card,
  Col,
  Row,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "./HomePage.css";

import InputForm from "./InputForm/InputForm";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <section className="main-section">
          <div className="overlay-div-circle d-none d-lg-block"></div>
          <div className="mobile-screen  d-none d-lg-block">
            <img src="/mobileWithLogo.png"></img>
          </div>

          <Carousel className="main-carousel">
            <Carousel.Item className="landing-corousel-item">
              <img src="/banner1.jpg" className="background-image"></img>
              <Row className="justify-content-md-left">
                <Col xs="12" md={{ span: 5, offset: 1 }}>
                  <div className="main-content">
                    <div className="main-heading">
                      For the Quickest Doorstep Delivery,
                    </div>
                    <div className="sub-heading">Order Now</div>
                    <div className="sub-body">
                      Why wait for hours for groceries when you can have them
                      delivered in a matter of minutes! From rice and flour to a
                      packet of instant noodles or even a bottle of shampoo, get
                      everything you need right here.
                    </div>
                    <a className="btn btn-google" href="#" title="Google Play">
                      Google Play
                    </a>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="landing-corousel-item">
              <img src="banner2.jpg" className="background-image"></img>
              <Row className="justify-content-md-left">
                <Col md={{ span: 6, offset: 1 }}>
                  <div className="main-content">
                    <div className="main-heading">
                      Want to Grow Your Business?
                    </div>
                    <div className="sub-heading">Register with baabae</div>
                    <div className="sub-body">
                      If you want to give your customers great service, you need
                      to be online and you’ve got to be a Baabae partner. Take
                      advantage of our unique hyperlocal model to service
                      customers and see your profits grow.
                    </div>
                    <a className="btn btn-google" href="#" title="Google Play">
                      Google Play
                    </a>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="landing-corousel-item">
              <img src="banner3.jpg" className="background-image"></img>
              <Row className="justify-content-md-left">
                <Col md={{ span: 6, offset: 1 }}>
                  <div className="main-content">
                    <div className="main-heading">
                      For Anything, Anywhere, Anytime
                    </div>
                    <div className="sub-heading">Order Now</div>
                    <div className="sub-body">
                      Want milk? Chocolates? Bread? Soap? Order it all on one
                      app and have it delivered wherever you are in record time!
                      Baabae- the one-stop-shop for all your grocery needs.
                    </div>
                    <a className="btn btn-google" href="#" title="Google Play">
                      Google Play
                    </a>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </section>

        <section>
          <div className="about-us">
            <Row
              className="justify-content-md-center"
              style={{ margin: "auto" }}
            >
              <Col md="6">
                <div className="about-us-heading">About us</div>
                <div className="body">
                  BaaBae is on a mission – we want to help the next billion
                  producers and consumers grow together. So, we designed an
                  e-commerce platform where they could come together- where
                  producers could market their products and consumers could have
                  it delivered to them in the shortest time ever! At Baabae,
                  we’re all about empowering our network. We help sellers grow
                  by introducing them to our expansive network and make shopping
                  convenient for customers by having the widest range of
                  inventory ever!
                </div>
              </Col>
            </Row>
          </div>

          <div className="how-it-works">
            <div className="left-circle d-none d-lg-block"></div>
            <div className="right-circle"></div>
            <div className="mobile-screen d-none d-lg-block">
              <img src="/baabae.png"></img>
            </div>
            <Carousel>
              <Carousel.Item>
                <Row>
                  <Col md={{ span: 5, offset: 4 }} xs="12">
                    <div className="content">
                      <div className="heading">How it Works for Customers</div>
                      <div className="sub-heading">
                        No matter what you need, stocking up your pantry with
                        BaaBae is convenient and simple as 1..2..3!
                      </div>

                      <div className="body">
                        <Row>
                          <Col md="6" xs="6">
                            <Row>
                              <Col md="2" xs="3">
                                <img src="/correct.svg" className="tick-mark" />
                              </Col>
                              <Col md="10" xs="9">
                                <div className="body-heading">
                                  Download the app
                                </div>
                                <div className="body-content">
                                  Available on Google Play and the Apple App
                                  Store, the BaaBae app is compatible with all
                                  phones and it’s Free!
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="6" xs="6">
                            <Row>
                              <Col md="2" xs="3">
                                <img src="/correct.svg" className="tick-mark" />
                              </Col>
                              <Col md="10" xs="9">
                                <div className="body-heading">
                                  Login to your account
                                </div>
                                <div className="body-content">
                                  Create a simple user name and password and
                                  create your account so we can serve you
                                  better.
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="6" xs="6">
                            <Row>
                              <Col md="2" xs="3">
                                <img src="/correct.svg" className="tick-mark" />
                              </Col>
                              <Col md="10" xs="9">
                                <div className="body-heading">
                                  Fill your cart
                                </div>
                                <div className="body-content">
                                  Add all the things you need to your cart,
                                  confirm the order with an online payment and
                                  tell us when and where to deliver it.
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="6" xs="6">
                            <Row>
                              <Col md="2" xs="3">
                                <img src="/correct.svg" className="tick-mark" />
                              </Col>
                              <Col md="10" xs="9">
                                <div className="body-heading">Ting Tong!</div>
                                <div className="body-content">
                                  Before you know it, our partner will be at
                                  your doorstep with everything you ordered!
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col md={{ span: 7, offset: 4 }} xs="12">
                    <div className="content">
                      <div className="heading">How it Works for Sellers</div>
                      <div className="sub-heading">
                        Want to expand your service to more customers – becoming
                        a seller with BaaBae is easy!
                      </div>
                      <div className="body">
                        <Row>
                          <Col md="6" xs="6">
                            <Row>
                              <Col md="2" xs="3">
                                <img src="/correct.svg" className="tick-mark" />
                              </Col>
                              <Col md="10" xs="9">
                                <div className="body-heading">
                                  Visit the BaaBae website
                                </div>
                                <div className="body-content">
                                  A desktop, a laptop, or even your phone- use
                                  whatever’s most convenient to visit the BaaBae
                                  website.
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="6" xs="6">
                            <Row>
                              <Col md="2" xs="3">
                                <img src="/correct.svg" className="tick-mark" />
                              </Col>
                              <Col md="10" xs="9">
                                <div className="body-heading">
                                  Register as a seller
                                </div>
                                <div className="body-content">
                                  Enter your details on our seller form and get
                                  registered as a BaaBae seller.
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="6" xs="6">
                            <Row>
                              <Col md="2" xs="3">
                                <img src="/correct.svg" className="tick-mark" />
                              </Col>
                              <Col md="10" xs="9">
                                <div className="body-heading">
                                  Set up Your Mobile Shop
                                </div>
                                <div className="body-content">
                                  Put down a refundable security deposit and
                                  work with our experts to select inventory and
                                  set up your mobile shop.
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="6" xs="6">
                            <Row>
                              <Col md="2" xs="3">
                                <img src="/correct.svg" className="tick-mark" />
                              </Col>
                              <Col md="10" xs="9">
                                <div className="body-heading">
                                  Get Your First Order
                                </div>
                                <div className="body-content">
                                  Observe your BaaBae account- your first order
                                  could come anytime. And, from then on you’ll
                                  can track your number of orders!
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <section className="category">
          <div className="shop-by-category">
            <div className="title">Shop by Category</div>
            <div className="content">
              <Row
                className="justify-content-center"
                style={{ margin: "auto" }}
              >
                <Col md="3" xs="6">
                  <div className="wrapper">
                    <div className="content-image">
                      <img src="/categories/HealthAndHygeine.png" />
                    </div>
                    <div className="content-description">
                      Health And Hygeine
                    </div>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="wrapper">
                    <div className="content-image">
                      <img src="/categories/BeautyAndPersonalCare.png" />
                    </div>
                    <div className="content-description">
                      Beauty And Personal Care
                    </div>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="wrapper">
                    <div className="content-image">
                      <img src="/categories/snacks.png" />
                    </div>
                    <div className="content-description">
                      Packed Foods And Snacks
                    </div>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="wrapper">
                    <div className="content-image">
                      <img src="/categories/instant-noodles.png" />
                    </div>
                    <div className="content-description">Instant Foods</div>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="wrapper">
                    <div className="content-image">
                      <img src="/categories/milk.png" />
                    </div>
                    <div className="content-description">Dairy Products</div>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="wrapper">
                    <div className="content-image">
                      <img src="/categories/drink.png" />
                    </div>
                    <div className="content-description">
                      Drinks and Beverages
                    </div>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="wrapper">
                    <div className="content-image">
                      <img src="/categories/hookah.png" />
                    </div>
                    <div className="content-description">Paan</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="blog-wrapper">
            <div className="title">Blog</div>

            <Carousel>
              <Carousel.Item>
                <Row>
                  <Col md="3" xs="6">
                    <Card>
                      <Card.Img variant="top" src="/test.jpg" />
                      <Card.Body>
                        <div className="date-comments">
                          <span className="date">30 May 2020</span>
                          <span className="comments">2 comments</span>
                        </div>
                        <Card.Text>
                          Some quick example text to build on the card title and
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="3" xs="6">
                    <Card>
                      <Card.Img variant="top" src="/test.jpg" />
                      <Card.Body>
                        <div className="date-comments">
                          <span className="date">30 May 2020</span>
                          <span className="comments">2 comments</span>
                        </div>
                        <Card.Text>
                          Some quick example text to build on the card title and
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="3" xs="6">
                    <Card>
                      <Card.Img variant="top" src="/test.jpg" />
                      <Card.Body>
                        <div className="date-comments">
                          <span className="date">30 May 2020</span>
                          <span className="comments">2 comments</span>
                        </div>
                        <Card.Text>
                          Some quick example text to build on the card title and
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="3" xs="6">
                    <Card>
                      <Card.Img variant="top" src="/test.jpg" />
                      <Card.Body>
                        <div className="date-comments">
                          <span className="date">30 May 2020</span>
                          <span className="comments">2 comments</span>
                        </div>
                        <Card.Text>
                          Some quick example text to build on the card title and
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <section className="register">
          <div className="register-wrapper-outer">
            <Row className="justify-content-md-center">
              <Col md="9" xs="12">
                <div className="register-wrapper-inner">
                  <h3 className="register-title"> Register with us</h3>
                  <InputForm></InputForm>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="footer">
          <div className="circle"></div>
          <div className="footer-wrapper">
            <Row className="justify-content-center">
              <Col md="8" xs="12">
                <div className="upper-section">
                  <div className="title">Subscribe to our Newslater</div>
                  <p className="sub-heading">
                    Do you want tips on grocery shopping? Want to know BaaBae’s
                    latest offers? Then subscribe to our newsletters and stay
                    connected!
                  </p>
                  <Row>
                    <Col md="8" xs="8">
                      <FormControl
                        placeholder="Enter your mail "
                        type="text"
                        className="subscribe-input"
                      />
                    </Col>
                    <Col md="4" xs="4">
                      <Button variant="primary" style={{ width: "100%" }}>
                        Subscribe
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md="10" xs="12">
                <Row className="lower-footer">
                  <Col md="4" xs="4">
                    <h3>Location</h3>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </div>
                  </Col>
                  <Col md="4" xs="4">
                    <h3>Contact Info</h3>
                    <div className="content">
                      <div className="call">Call : 12312312313</div>
                      <div className="email">Email : contact@baabae.in</div>
                    </div>
                  </Col>
                  <Col md="4" xs="4">
                    <h3>Find us on</h3>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and typ
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
