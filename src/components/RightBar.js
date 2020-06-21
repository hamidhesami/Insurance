import React from "react";
import { Link } from "react-router-dom";

class Lpart extends React.Component {
  openDrawer = () => {
    // this.props.openDrawer();
  }
  render() {
    return (
      <div className="Rpart">
        <div className="login">
          <i className="mdi mdi-account-circle"></i>
          <strong>سید نوید هاشمی</strong>
          {/* <p>
            <span>تعداد کل پرونده ها : </span>
            <span>29</span>
          </p>
          <p>
            <span>تعداد کل گزارشات : </span>
            <span>14</span>
          </p> */}
        </div>
        <div className="Icon">
          <i className="mdi mdi-location-exit"></i>
          <i className="mdi mdi-pencil-outline"></i>
          <p onClick={this.openDrawer}>
            <i className="mdi mdi-bell-outline"></i>
            <span>4</span>
          </p>
        </div>
        <div className="mnu">
          <strong>منوی کاربری</strong>
          <ul>
            <li>
              <Link to="#">
                <i className="mdi mdi-home-outline"></i>
                <span>میز کار من</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="mdi mdi-archive-arrow-down-outline"></i>
                <span>سابقه درخواست ها</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="mdi mdi-information-outline"></i>
                <span>اطلاعات مالی</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <span>All Rights by Edalatkhane</span>
        </div>
      </div>
    );
  }
}

export default Lpart;
