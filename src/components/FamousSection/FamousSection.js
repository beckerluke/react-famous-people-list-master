import React, { Component } from 'react';
import './FamousSection.css';

class FamousSection extends Component {

  state = {
    famousPerson: {
      name: '',
      role: '',
    },
    people: [],
  };

  handleChangeFor = (event, propertyName) => {
    this.setState({
      famousPerson: {
        ...this.state.famousPerson,
        [propertyName]: event.target.value,
      }
    })
  }

  addPerson = (event) => {
    event.preventDefault();
    console.log( `The famous person is `, this.state.famousPerson );

    this.setState({
        famousPerson: {
            name: '',
            role: '',
        },
        people: [
          ...this.state.people,
          this.state.famousPerson
        ]
    });
    console.log(this.state.people);
  }

  render() {

    const famousPersonListElements = this.state.people.map((famousPerson, index) => {
        return (<ul key={index}>
                    <li>{famousPerson.name} {famousPerson.role}</li>
                </ul>);
    });

    return (
      <section className="new-person-section">
        <form onSubmit={this.addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={(event) => this.handleChangeFor(event, 'name')} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={(event) => this.handleChangeFor(event, 'role')} />
          <button type="submit">Done</button>
        </form>
        <p>
          {this.state.famousPerson.name} is famous for "{this.state.famousPerson.role}".
        </p>
        <ul>
          {famousPersonListElements}
        </ul>
      </section>
    );
  }
}

export default FamousSection;
