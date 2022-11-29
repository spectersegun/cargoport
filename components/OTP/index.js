// import { Button, Checkbox, Form, Input } from 'antd';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function OTP() {
  const router = useRouter();
  const onFinish = values => {
    console.log('Success:', values);
  };

  let digitValidate = function (ele) {
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g, '');
  };

  let tabChange = function (val) {
    let ele = document.querySelectorAll('input');
    if (ele[val - 1].value != '') {
      ele[val].focus();
    } else if (ele[val - 1].value == '') {
      ele[val - 2].focus();
    }
  };

  return (
    <div className="login-forms">
      <div className="row">
        <h4>Verify Your Mail</h4>
        <p className="form-info">
          A 4 digit code has been sent to atandadray@gmail.com, Input the code
          to verify your account.
        </p>
      </div>
      <div className="row otp">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className=" text-center">
              <div className="row">
                <div className="">
                  <form action="" id="otpForm">
                    <input
                      type="text"
                      oninput="digitValidate(this)"
                      onkeyup="tabChange(1)"
                      //   oninput="digitValidate(this)"
                      //   onInput={() => digitValidate()}
                      //   onKeyup={() => tabChange(1)}
                      maxlength="1"
                    />
                    <input
                      type="text"
                      oninput="digitValidate(this)"
                      onkeyup="tabChange(2)"
                      maxlength="1"
                    />
                    <input
                      type="text"
                      oninput="digitValidate(this)"
                      onkeyup="tabChange(3)"
                      maxlength="1"
                    />
                    <input
                      type="text"
                      oninput="digitValidate(this)"
                      onkeyup="tabChange(4)"
                      maxLength="1"
                    />
                  </form>

                  <button className="btn ">Verify Mail</button>
                </div>
                <p className="form-footer-p">
                  Didnt get the code? <Link href="#">Resend OTP</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
