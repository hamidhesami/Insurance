import React from "react";
import Select from "react-select";
import stateObject from "../static/js/state";

class Provinces extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      provinces: [],
    };
  }
  componentDidMount() {
    this.setState((oldState) => {
      let newState = { ...oldState };
      let provinces = Object.keys(stateObject);
      provinces.map((p, key) => {
        newState.provinces.push({ value: key, label: p });
      });
      return newState;
    });
  }

  changeProvinces = (selectedOption) => {
    this.props.changeProvinces(selectedOption.label);
  }

  render() {
    return (
      <div className="selectProvinces">
        <Select options={this.state.provinces} placeholder="جستجوی استان" onChange={this.changeProvinces}/>
      </div>
    );
  }
}

export default Provinces;
