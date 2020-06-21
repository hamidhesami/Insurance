import React from "react";
import Select from "react-select";
import stateObject from "../static/js/state";

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: []
    };
  }

  createState = () => {
    console.log(Object.keys(stateObject[this.props.data]));
    this.setState((oldState) => {
      let newState = { ...oldState };
      let states = Object.keys(stateObject[this.props.data]);
      states.map((s, key) => {
        newState.states.push({ value: key, label: s });
      });
      return newState;
    });
  }

  UNSAFE_componentWillReceiveProps(){
    setTimeout(() => {
      this.setState((oldState) => {
        let newState = { ...oldState };
        newState.states = [];
        let states = Object.keys(stateObject[this.props.data]);
        states.map((s, key) => {
          newState.states.push({ value: key, label: s });
        });
        return newState;
      });
      console.log(this.state.states)
    }, 1000)
    
  }

  changestates = (selectedOption) => {
    this.props.changeState(selectedOption.label);
  }

  render() {
    return (
      <div className="selectProvinces">
        <Select options={this.state.states} placeholder="جستجوی شهرستان" onChange={this.changestates}/>
      </div>
    );
  }
}

export default States;
