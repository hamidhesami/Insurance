import React from "react";
import Select from "react-select";
import stateObject from "../static/js/state";

class Cites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cites: []
    };
  }

  UNSAFE_componentWillReceiveProps(){
    setTimeout(() => {
      this.setState((oldState) => {
        let newState = { ...oldState };
        newState.cites = [];
        if (this.props.data.state !== ""){
            let cites = stateObject[this.props.data.province][this.props.data.state];
            if (cites !== undefined){
                cites.map((s, key) => {
                  newState.cites.push({ value: key, label: s });
                });
            }
        }
        return newState;
      });
      console.log(this.state.cites)
    }, 1000)
    
  }

  render() {
    return (
      <div className="selectProvinces">
        <Select options={this.state.cites} placeholder="جستجوی شهر" />
      </div>
    );
  }
}

export default Cites;
