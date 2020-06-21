import React from "react";
// import { connect } from "react-redux";

// import { openDrawer, closeDrawer } from "../redux/drawerStore";

class notifications extends React.Component {
  closeDrawer = () => {
    this.props.closeDrawer();
  };
  render() {
    return (
      <div className="notification">
      <p onClick={this.closeDrawer}><span>بازگشت</span><i className="mdi mdi-arrow-left"></i></p>
      <div className="content">
          <a className="Unread" href="#">پرونده اینجا رو فرستادیم اونجا، بیا ببین اونجا رو</a>
          <p className="Unread">حاج آقا فرمودند این کارو نکن ، همون که گفتم</p>
          <span>ترسم نرسی به کعبه ای اعرابی ، این ره که تو</span>
          <p>چون که آهن شد ز آتش محتشم ، گویدت من</p>
          <span>ترسم نرسی به کعبه ای اعرابی ، این ره که تو</span>
          <p>چون که آهن شد ز آتش محتشم ، گویدت من</p>
      </div>
  </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     openDrawer: () => dispatch(openDrawer()),
//     closeDrawer: () => dispatch(closeDrawer()),
//   };
// };
export default notifications;
