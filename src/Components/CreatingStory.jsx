import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addStory } from "../actions/io";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth, { user } from "../actions/auth";
import { getUserData } from "../actions/io";
import LinkPage from "./LinkPage";
import "../styling/creating.css";

export default class CreatingStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
      storyId: "",
      submitSuccess: false,
      isUnfold: false,
      user: null,
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
    });
  };

  handleChange(event) {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    this.setState({
      story: { ...this.state.story, [fieldName]: fleldVal },
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      story: { title, text, participants },
    } = this.state;

    const firstPart = {
      createdBy: user.uid,
      createdOn: new Date(),
      text,
      comment: "",
    };

    // TODO only upload neccessary user info
    let participants = [
      {
        ...user,
      },
    ];

    const otherParticipants = participants.split(/[,|\s|\n]+/g).map((participant) => {
      return {
        email,
        isSubmitted: false,
        submittedOn: null,
      };
    });

    const nextParticipant = otherParticipants[0];
    // add all participants in one array
    participants = participants.concat(otherParticipants);

    const newStory = {
      createdBy: user.uid,
      title,
      participants,
      parts: [firstPart],
      createdOn: new Date(),
    };

    let docRef = await addStory(newStory);

    this.setState({
      submitSuccess: true,
      nextParticipant,
      storyId: docRef.id,
    });
  };

  render() {
    const { user, submitSuccess, nextParticipant, story, storyId, isRandom } = this.state;

    if (!user) return <div className="w-100 text-center">Loading...</div>;

    return (
      <Row className="create-story">
        <Col md className="text-right">
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Col>
        <Col md={7} className="h-100">
          {submitSuccess ? (
            <>
              <h1 className="h1-es-false text-center text-capitalize mb-3">
                <u>{story.storyTitle}.</u>
              </h1>
              <h2 className="text-center h2-cs-false"></h2>
              <LinkPage story={story} storyId={storyId} nextParticipant={nextParticipant}></LinkPage>
            </>
          ) : (
            <>
              <h1 className="text-center">Create new story.</h1>
              <Form className="create-form" onSubmit={this.handleSubmit}>
                {/* TITLE */}
                <Form.Group>
                  <Form.Label>Story Title</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="1"
                    placeholder="Something memorable but descriptive"
                    name="title"
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>
                {/* Participants */}
                <Form.Group>
                  <Form.Label>Participants</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="2"
                    name="participants"
                    placeholder={`Mini Mouse, ${user.displayName}, Pluto...`}
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>
                {/* STAT STORY */}
                <Form.Group>
                  <Form.Label>Start your Story!</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Once upon a time..."
                    rows="8"
                    name="text"
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>

                <Button type="submit" className="w-50">
                  Start Journey
                </Button>
              </Form>
            </>
          )}
        </Col>
        <Col md></Col>
      </Row>
    );
  }
}
