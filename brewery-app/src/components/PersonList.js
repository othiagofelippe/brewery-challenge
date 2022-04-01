import React from "react";
import axios from "axios";
import styles from "./PersonList.module.css"

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://api.openbrewerydb.org/breweries`).then((res) => {
      console.log(res);

      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className={styles.cards_container}>
        {this.state.persons.map((person) => (
          <div>
            <div className={styles.card}>
              <p>
                <strong>Nome:</strong> {person.name}
              </p>
              <p>
                <strong>Cidade: </strong> {person.city}
              </p>
              <p>
                <strong>Estado:</strong> {person.state}
              </p>
              <p>
                <strong>Pais:</strong> {person.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
