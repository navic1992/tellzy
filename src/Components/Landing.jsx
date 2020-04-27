import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../styling/landing.css";

export default class Landing extends Component {
    render() {
        return (
            <>
                <Row className="first-part">
                    <Col md className=""></Col>
                    <Col md={7}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img
                                className="sm-show"
                                src="/assets/images/logo-white-gradient.png"
                            ></img>
                            <h1 className="h1 sm-hide">Tellzy</h1>
                            <div className="wrap">
                                <h3 className="h3-landing">
                                    collective storytelling.
                                </h3>
                                <h3 className="h3-landing">
                                    share your imagination.
                                </h3>
                                <h3 className="h3-landing">
                                    simple & exciting.
                                </h3>
                                <div className="landing-quote sm-hide">
                                    <i>
                                        {" "}
                                        “There is no greater agony than bearing
                                        an untold story inside you.”{" "}
                                    </i>{" "}
                                    <br />
                                    <p className="text-right">
                                        <b> Maya Angelou</b>
                                    </p>
                                </div>
                                <h1 className="text-center sm-show mobile-h1">
                                    Tellzy
                                </h1>
                            </div>
                        </div>
                    </Col>
                    <Col md className=""></Col>
                </Row>
                <Row className="second-part">
                    <Col md className="mt-auto text-right">
                        <Button
                            className="sm-hide"
                            onClick={() => scroll.scrollToTop()}
                        >
                            Up
                        </Button>
                    </Col>
                    <Col
                        md={7}
                        className="text-center d-flex flex-column align-items-center justify-content-center col-color"
                    >
                        <Row id="how-to" className="how-to">
                            <div className="d-flex flex-column justify-content-start">
                                <div className="text-center">
                                    <h2 className="caveat-font mb-4">
                                        {" "}
                                        <u> How To</u>
                                    </h2>
                                </div>
                                <Row className="howto">
                                    <div className="d-flex align-items-center text-left mobile-column">
                                        <img
                                            className="illustration-width sm-show"
                                            src="/assets/images/pen.png"
                                        ></img>
                                        <img
                                            className=" sm-hide"
                                            src="/assets/images/pen-high.png"
                                        ></img>
                                        <p>
                                            <h3 className="caveat-font">
                                                <b>What is Tellzy? </b>
                                            </h3>
                                            <br /> Tellzy is a{" "}
                                            <b>collective story-writing game</b>
                                            , i.e. you are writing a story
                                            together with your friends. Each of
                                            you are continuing this story{" "}
                                            <b>one after another.</b>
                                        </p>
                                    </div>
                                </Row>
                                <Row className="howto">
                                    <div className="d-flex align-items-center text-left">
                                        <p className="">
                                            <h3 className="caveat-font">
                                                <b>Get started! </b>
                                            </h3>
                                            <br />{" "}
                                            <b>
                                                Create your personal Author
                                                profile
                                            </b>
                                            , start a New Story and invite your
                                            friends. Keep in mind, that every
                                            one of you needs to be an author to
                                            continue the story.
                                        </p>
                                        <img
                                            className=""
                                            src="/assets/images/note.png"
                                        ></img>
                                    </div>
                                </Row>
                                <Row className="howto">
                                    <div className="d-flex align-items-center text-left">
                                        <img
                                            className=""
                                            src="/assets/images/pen2.png"
                                        ></img>
                                        <p>
                                            <h3 className="caveat-font">
                                                <b>Good Thing takes time</b>
                                            </h3>
                                            <br />
                                            According to our experience it{" "}
                                            <b>takes a while</b> until all
                                            authors finish their parts.
                                            Meanwhile, stay informed about the
                                            <b> story progress</b> in your
                                            profile.
                                        </p>
                                    </div>
                                </Row>
                                <Row className="howto">
                                    <div className="d-flex align-items-center text-left mobile-column ">
                                        <p classname="ml-4">
                                            <h3 className="caveat-font">
                                                <b>Grand Finale </b>
                                            </h3>
                                            <br />
                                            Once the story is finished,
                                            everybody is excited about the
                                            result. <b>Share the Story</b> with
                                            your co-authors and your friends!
                                        </p>
                                        <img
                                            className=""
                                            src="/assets/images/friends.png"
                                        ></img>
                                    </div>
                                </Row>

                                <div className="mt-5">
                                    <Link to="/policy">Policy & Impressum</Link>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col md className="mt-auto">
                        <>
                            <Link to="" onClick={this.handleShow}>
                                <Button>New Story</Button>
                            </Link>
                        </>
                    </Col>
                </Row>
            </>
        );
    }
}
