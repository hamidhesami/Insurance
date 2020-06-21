import React from "react";

class Customer extends React.Component {
  render() {
    return (
      <div className="menu2">
        <a className="add" href="#" title="ساخت پرونده جدید">
          <i className="mdi mdi-plus-circle"></i>
        </a>
        <ul>
          <li title="میزکار">
            <a href="#">
              <i className="sprite sprite-home"></i>
            </a>
          </li>
          <li title="آرشیو پرونده ها">
            <a href="#">
              <i className="sprite sprite-Archive"></i>
            </a>
          </li>
          <li title="اطلاعات مالی">
            <a href="#">
              <i className="sprite sprite-information"></i>
            </a>
          </li>
          <li title="پروفایل">
            <a href="#">
              <i className="sprite sprite-profile"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Customer;
