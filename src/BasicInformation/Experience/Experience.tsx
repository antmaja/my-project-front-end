import React from "react";
import { Form } from "react-bootstrap";
import ExperienceStateInterface from "./ExperienceStateInterface";

class Experience extends React.Component {
  state: ExperienceStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      arrayExperience: [
        {
          years: "",
          position: "",
        },
      ],
    };
  }

  handleInputChange = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPosition = this.state.arrayExperience.map((experience, idx) => {
      if (id !== idx) return experience;
      return {
        ...experience,
        [event.target.name]: event.target.value,
      };
    });
    this.setState({ arrayExperience: newPosition });
  };

  handleAddAnother = () => {
    this.setState({
      arrayExperience: this.state.arrayExperience.concat([
        { years: "", position: "" },
      ]),
    });
  };

  handleRemove = (id: number) => () => {
    this.setState({
      arrayExperience: this.state.arrayExperience.filter(
        (s, idx) => id !== idx
      ),
    });
  };

  render() {
    return (
      <div className="container-experience">
        <p className="item-name title-experience">Experience</p>
        {this.state.arrayExperience.map((experience, id) => (
          <div key={id}>
            <Form.Label className="label-container">Years</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add number"
              className="years-input"
              value={experience.years}
              name='years'
              onChange={this.handleInputChange(id)}
            />

            <Form.Label className="label-container">Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Start typ"
              name='position'
              value={experience.position}
              onChange={this.handleInputChange(id)}
              className="position-input"
            />
            <div className="delete-container">
              <button onClick={this.handleRemove(id)} className="add-delete">
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="add-another-container">
          <button onClick={this.handleAddAnother} className="add-another">
            Add Another
          </button>
        </div>
      </div>
    );
  }
}
export default Experience;
