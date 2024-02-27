import { Link, useNavigate } from "react-router-dom";
import Logo from "../../resused-components/Logo";
import MainContainer from "../../resused-components/MainContainer";
import { FaEye } from "react-icons/fa";
import SectionsTitle from "../../resused-components/SectionTitle";
import { ChangeEvent, useState } from "react";
import Toasts from "../../resused-components/Toasts";
import CustomInput from "../../resused-components/CustomInput";
import CustomButton from "../../resused-components/CustomButton";
import AutoDisplayInfo from "../../resused-components/AutoDisplayInfo";
import Popups from "../../resused-components/Popups";
import { domain } from "../../resused-components/domain";
function Register() {
  const direct = useNavigate();
  const [Toast, setToast] = useState(false);
  const [Popup, setPopup] = useState(false);
  const [Inputs, setInputs] = useState({
    full_name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [Err, setErr] = useState({
    type: "",
    msg: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  async function post_signup() {
    const response = await fetch(`${domain}/api/access/register`, {
      method: "post",
      body: JSON.stringify(Inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.text();
    if (response.ok) {
      setPopup(true);
      setErr({
        type: "error",
        msg: "Congratulations! You have successfully registered",
      });
    } else {
      setToast(true);
      setErr({ type: "error", msg: result });
    }
  }
  const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      Inputs.email === "" ||
      Inputs.full_name === "" ||
      Inputs.mobile === "" ||
      Inputs.password === ""
    ) {
      setToast(true);
      setErr({ type: "error", msg: "All fields are required" });
    } else {
      post_signup();
    }
  };
  return (
    <MainContainer className="flex items-center justify-center ">
      <section className="w-1/2 max-md:w-full h-screen flex flex-col items-center justify-center relative">
        {Toast && (
          <div className="w-full max-w-[300px] absolute top-[20px]">
            <Toasts
              toast_type={Err.type}
              toast_msg={Err.msg}
              Toast={Toast}
              setToast={setToast}
            />
          </div>
        )}
        {Popup && (
          <Popups
            popup={true}
            className="!absolute"
            popup_msg="Congratulations! You have successfully register to fileshare"
            popup_type="success!"
            btn_text="LOGIN"
            onclick_event={() => {
              direct("/");
            }}
          />
        )}
        <div className="w-full max-w-[300px]">
          <div className="w-full flex flex-col items-center justify-center mb-2">
            <div className="mb-1">
              <Logo className="text-4xl" />
            </div>
            <SectionsTitle title="Create Account" />
          </div>
          <div className="w-full flex items-center justify-center gap-1">
            <div className="surface_text">Already have an account?</div>
            <Link to="/" className="primary-text font-bold">
              Sign in
            </Link>
          </div>
          <form
            className="w-full flex mt-5 flex-col gap-3 items-center justify-center"
            autoComplete="off"
          >
            <div className="flex items-center gap-3 w-full">
              <CustomInput
                onchange_event={handleChange}
                placeholder="Your name"
                input_type="text"
                value={Inputs.full_name}
                name="full_name"
              />
              <CustomInput
                onchange_event={handleChange}
                placeholder="Mobile number"
                input_type="text"
                value={Inputs.mobile}
                name="mobile"
              />
            </div>
            <CustomInput
              onchange_event={handleChange}
              placeholder="Work Email"
              input_type="text"
              value={Inputs.email}
              name="email"
            />
            <CustomInput
              onchange_event={handleChange}
              placeholder="Your personal password"
              input_type="password"
              value={Inputs.password}
              name="password"
              icon={<FaEye size={18} />}
            />
            <div className="flex w-full items-center gap-3">
              <div className="">
                <input
                  type="checkbox"
                  className="w-[17px] h-[17px] border-zinc-200 rounded-sm border m-0 focus:outline-none outline-none"
                  name=""
                />
              </div>
              <div className="w-full flex items-center gap-1 my-3">
                <div className="surface_text">I agree to the </div>
                <div
                  className="primary-text cursor-pointer font-bold"
                  onClick={() => {
                    setToast(true);
                    setErr({ type: "info", msg: "Working on it soon!" });
                  }}
                >
                  Term of Services
                </div>
              </div>
            </div>
            <CustomButton
              btn_text="Proceed"
              type="submit"
              className="w-full"
              onclick_event={handleSubmit}
            />
          </form>
        </div>
      </section>
      <AutoDisplayInfo />
    </MainContainer>
  );
}

export default Register;
