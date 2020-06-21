import React from "react";
import { Link } from "react-router-dom";
import karshenasImg from "../../static/img/karshenas.jpg";

class Login extends React.Component {
  state = {
    loginFormClass: "first",
  };

  sendOtp = () => {
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.loginFormClass = "second";
      return newState;
    });
  };

  backToSendOtp = () => {
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.loginFormClass = "first";
      return newState;
    });
  };

  render() {
    return (
      <section class="maincontent" style={{ height: "100%" }}>
        <div class="container-fluid" style={{ height: "100%", padding: 0 }}>
          <div class="LoginPage" style={{ height: "100%" }}>
            <div class="row" style={{ backgroundColor: "#5e5aa4", margin: 0 }}>
              <div class="col-md-5 p-0">
                <div class="Rpart">
                  <div class="titr">
                    <h1>ورود </h1>
                  </div>
                  <div class={"loginForms " + this.state.loginFormClass}>
                    <div class="firstLoginForm">
                      <div class="wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.127"
                          height="19.885"
                          viewBox="0 0 17.127 19.885"
                        >
                          <g transform="translate(0.375 0.375)">
                            <path
                              d="M874.914,258.6v-3.643a1.975,1.975,0,0,1,1.262-1.842l3.225-1.248"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                            <path
                              d="M891.291,258.6v-3.643a1.974,1.974,0,0,0-1.249-1.842l-3.193-1.248"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                            <path
                              d="M880.288,250.414l-1.035,1.091,1.959,3,1.839-2.022Z"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                            <path
                              d="M885.9,250.414l1.039,1.091-1.968,3-1.848-2.022Z"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                            <line
                              y2="5.95"
                              transform="translate(8.137 13.011)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <line
                              y2="2.664"
                              transform="translate(2.872 16.471)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <line
                              y2="2.81"
                              transform="translate(13.402 16.325)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <line
                              y1="1.531"
                              x2="0.259"
                              transform="translate(5.653 9.624)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <line
                              x1="0.368"
                              y1="1.522"
                              transform="translate(10.335 9.633)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <rect
                              width="9.838"
                              height="9.976"
                              rx="4.919"
                              transform="translate(3.241)"
                              stroke-width="0.75"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                            ></rect>
                            <path
                              d="M887.95,243.765s-2.4.409-3.329-1.52c-4.784,2.469-6.467,2.141-6.467,2.141"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                          </g>
                        </svg>
                        <input
                          name="number"
                          type="text"
                          placeholder="شماره پرونده"
                          autocomplete="off"
                          autofocus=""
                          value=""
                        />
                      </div>
                      <div class="wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.593"
                          height="18.536"
                          viewBox="0 0 13.593 18.536"
                        >
                          <path
                            d="M21.4.972C21.257.915,17.89-.4,15.27.986c-2.076,1.1-5.72.275-6.652.036V.309A.309.309,0,0,0,8,.309v.927s0,.008,0,.012,0,.007,0,.011V18.227a.309.309,0,0,0,.618,0v-7.3a16.682,16.682,0,0,0,3.821.5,6.771,6.771,0,0,0,3.121-.633c2.364-1.255,5.578,0,5.61.014a.309.309,0,0,0,.424-.287V1.259A.309.309,0,0,0,21.4.972Zm-.424,9.119c-1.007-.321-3.6-.956-5.706.162-2.076,1.1-5.719.276-6.652.036V1.661c1.19.3,4.752,1.033,6.941-.129,2.028-1.076,4.683-.3,5.416-.056Z"
                            transform="translate(-8)"
                            fill="#858585"
                          ></path>
                        </svg>
                        <input
                          name="national_code"
                          type="text"
                          maxlength="10"
                          autocomplete="off"
                          placeholder="کد ملی"
                          value=""
                        />
                      </div>
                      <button class="BtnCustom" onClick={this.sendOtp}>
                        ورود
                      </button>
                    </div>
                    <div class="secondLoginForm">
                      <p>
                        شماره موبایل شما 1234567 0912 میباشد.تایید می نمایید؟
                      </p>
                      <div class="wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.127"
                          height="19.885"
                          viewBox="0 0 17.127 19.885"
                        >
                          <g transform="translate(0.375 0.375)">
                            <path
                              d="M874.914,258.6v-3.643a1.975,1.975,0,0,1,1.262-1.842l3.225-1.248"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                            <path
                              d="M891.291,258.6v-3.643a1.974,1.974,0,0,0-1.249-1.842l-3.193-1.248"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                            <path
                              d="M880.288,250.414l-1.035,1.091,1.959,3,1.839-2.022Z"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                            <path
                              d="M885.9,250.414l1.039,1.091-1.968,3-1.848-2.022Z"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                            <line
                              y2="5.95"
                              transform="translate(8.137 13.011)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <line
                              y2="2.664"
                              transform="translate(2.872 16.471)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <line
                              y2="2.81"
                              transform="translate(13.402 16.325)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <line
                              y1="1.531"
                              x2="0.259"
                              transform="translate(5.653 9.624)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <line
                              x1="0.368"
                              y1="1.522"
                              transform="translate(10.335 9.633)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></line>
                            <rect
                              width="9.838"
                              height="9.976"
                              rx="4.919"
                              transform="translate(3.241)"
                              stroke-width="0.75"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                            ></rect>
                            <path
                              d="M887.95,243.765s-2.4.409-3.329-1.52c-4.784,2.469-6.467,2.141-6.467,2.141"
                              transform="translate(-874.914 -239.467)"
                              fill="none"
                              stroke="#858585"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0.75"
                            ></path>
                          </g>
                        </svg>
                        <input
                          name="code"
                          type="text"
                          placeholder="کد تایید را وارد کنید"
                          autocomplete="off"
                          autofocus=""
                          value=""
                        />
                      </div>
                      <div class="loginBtnsContainer">
                        {/* <button class="BtnCustom">ورود</button> */}
                        <Link to="/panel" class="BtnCustom">
                          ورود
                        </Link>
                        <button class="BtnCustom" onClick={this.backToSendOtp}>
                          بازگشت
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 p-0 d-none d-md-block">
                <div class="Lpart">
                  <img src={karshenasImg} alt="سامانه کارشناس رسمی"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
