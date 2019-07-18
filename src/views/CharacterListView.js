import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {
  FETCHING_CHARACTERS_START,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE
} from "../actions";
import axios from "axios";
import './character-list-view.css';
// import actions

class CharacterListView extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    // call our action
    axios
      .get('https://swapi.co/api/people/')
      .then(response => ({
        characterList: response.data
      }))
      .catch(error => {
        console.log('Server Error', error);
      })
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div className="donut"></div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  null /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
  }
)(CharacterListView);
