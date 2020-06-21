import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import Provinces from "../../components/selectProvinces";
import States from "../../components/selectStates";
import Cites from "../../components/selectCity";

class Default extends React.Component {
  state = {
    typeOption: [
      { value: "master", label: "بیمه شده اصلی" },
      { value: "tabaee", label: "بیمه شده تبعی" },
      { value: "karfarma", label: "کارفرمای حقیقی" },
    ],
    bloodGroupOption: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
      { value: "AB", label: "AB" },
      { value: "O", label: "O" },
    ],
    bloodGroupTypeOption: [
      { value: "positive", label: "مثبت +" },
      { value: "negative", label: "منفی -" },
    ],
    relationOption: [
      { value: "father", label: "پدر" },
      { value: "mother", label: "مادر" },
      { value: "wife", label: "همسر" },
      { value: "child", label: "فرزند" },
    ],
    maridStatusOption: [
      { value: "marrid", label: "متاهل" },
      { value: "notMarrid", label: "مجرد" },
    ],
    sarbaziOption: [
      { value: "doIt", label: "انجام خدمت" },
      { value: "exempt", label: "معاف" },
      { value: "notDoIt", label: "عدم انجام خدمت" },
    ],
    province: "",
    state: "",
    city: "",
  };

  changeProvinces = (selectedOption) => {
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.province = selectedOption;
      return newState;
    });
  };

  changeState = (selectedOption) => {
    // console.log(selectedOption);
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.state = selectedOption;
      return newState;
    });
  };

  render() {
    return (
      <div className="Lpart">
        <div className="FormPage">
          <form>
            {/* <div className="titr">
              <strong>نوع مخاطب</strong>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <Select
                      options={this.state.typeOption}
                      placeholder="نوع مخاطب"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <br /> <br />
            <div className="titr">
              <strong>اطلاعات هویتی</strong>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام خانوادگی" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام پدر" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره ملی" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره شناسنامه / گذرنامه" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="سری شناسنامه" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="سریال شناسنامه" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="تاریخ تولد" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="کشور محل تولد" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شهر محل تولد" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="محل صدور" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="بخش صدور" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <Select
                      options={this.state.bloodGroupOption}
                      placeholder="گروه خونی"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <Select
                      options={this.state.bloodGroupTypeOption}
                      placeholder="Rh خونی"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="دین" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="مذهب" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <Select
                      options={this.state.relationOption}
                      placeholder="نسبت"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <Select
                      options={this.state.maridStatusOption}
                      placeholder="وضعیت تاهل"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <Select
                      options={this.state.sarbaziOption}
                      placeholder="وضعیت نظام وظیفه"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="titr">
              <strong>نشانی محل سکونت مخاطب</strong>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <Provinces changeProvinces={this.changeProvinces} />
                  </div>
                  {/* <select name="state" id="countySel" size="1">
                    <option value="" selected="selected">
                      استان
                    </option>
                  </select> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <States
                      changeState={this.changeState}
                      data={this.state.province}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <div className="selectBox">
                    <Cites
                      // changeProvinces={this.changeState}
                      data={this.state}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="کدپستی" />
                </div>
              </div>

              <div className="col-12">
                <div className="wrap">
                  <input type="text" placeholder="نشانی" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="تاریخ شروع سکونت" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="کد شهر" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره تلفن ثابت" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره تلفن همراه" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نشانی الکترونیکی" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="titr">
              <strong>اطلاعات تحصیلی</strong>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="آخرین مقطع تحصیلی" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="سال اخذ مدرک" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="رشته تحصیلی" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="titr">
              <strong>اطلاعات آشنای اول مخاطب</strong>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام خانوادگی" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره ملی" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="تلفن ثابت" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="تلفن همراه" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره بیمه" />
                </div>
              </div>

              <div className="col-12">
                <div className="wrap">
                  <input type="text" placeholder="نشانی" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="titr">
              <strong>اطلاعات آشنای دوم مخاطب</strong>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام خانوادگی" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره ملی" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="تلفن ثابت" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="تلفن همراه" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره بیمه" />
                </div>
              </div>

              <div className="col-12">
                <div className="wrap">
                  <input type="text" placeholder="نشانی" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="titr">
              <strong>اطلاعات بانکی مخاطب</strong>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="تاریخ افتتاح حساب" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="شماره حساب" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نوع حساب" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام بانک" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="نام شعبه" />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="wrap">
                  <input type="text" placeholder="کد شعبه" />
                </div>
              </div>
            </div>
            <div className="upload">
              <strong>بارگزاری اسناد :</strong>
              <span>انتخاب فایل</span>
              <input type="file" name="myfile" />
            </div>
            <button className="BtnCustom">ثبت اطلاعات</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Default;
