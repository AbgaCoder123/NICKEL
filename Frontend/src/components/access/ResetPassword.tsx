import { ChangeEvent, useEffect, useState } from "react";
import AutoDisplayInfo from "../../resused-components/AutoDisplayInfo";
import CustomButton from "../../resused-components/CustomButton";
import MainContainer from "../../resused-components/MainContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Toasts from "../../resused-components/Toasts";
import SectionTitle from "../../resused-components/SectionTitle";
import Logo from "../../resused-components/Logo";
import CustomInput from "../../resused-components/CustomInput";
import { FaEye } from "react-icons/fa";
import { domain } from "../../resused-components/domain";
import Popups from "../../resused-components/Popups";

function ResetPassword() {
  const direct = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [Err, setErr] = useState({
    type: "",
    msg: "",
  });
    useEffect(() => {
      if (!token) {
        direct("/");
      }
    }, [token]);
  const [PopErr, setPopErr] = useState<{
    type: string;
    msg: string;
    text: string;
    clickfun: any;
  }>({
    type: "",
    msg: "",
    text: "",
    clickfun: "",
  });
  const [Toast, setToast] = useState(false);
  const [Popup, setPopup] = useState(false);
  const [Inputs, setInputs] = useState({
    password: "",
    confirm_password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  async function createnewpassword() {
    const response = await fetch(`${domain}/api/access/reset_password/new_password`, {
      method: "post",
      body: JSON.stringify(Inputs),
      headers: {
        "Content-Type": "application/json",
        "reset-token": token as string,
      },
    });

    const result = await response.text();
    if (response.ok) {
      setPopup(true);
      setPopErr({
        type: "success!",
        msg: "Created new password successfully",
        text: "Login",
        clickfun: () => direct("/"),
      });
    } else if (response.status === 402) {
      setPopup(true);
      setPopErr({
        type: "error!",
        msg: result,
        text: "resend token",
        clickfun: () => direct("/access/forgetpassword"),
      });
    } else {
      setToast(true);
      setErr({ type: "error", msg: result });
    }
  }
  const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Inputs.password === "" || Inputs.confirm_password === "") {
      setToast(true);
      setErr({ type: "error", msg: "All fields are required" });
    } else {
      createnewpassword();
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
            popup_type={PopErr.type}
            popup_msg={PopErr.msg}
            btn_text={PopErr.text}
            onclick_event={PopErr.clickfun}
          />
        )}
        <div className="w-full max-w-[300px]">
          <div className="w-full flex flex-col items-center justify-center mb-2">
            <div className="mb-1">
              <Logo className="text-4xl" />
            </div>
            <SectionTitle title="Create new password" />
          </div>
          <div className="w-full flex items-center justify-center gap-1">
            <div className="flex gap-1 surface_text">
              <div>Remember Password?</div>
              <Link to={"/"} className="primary-text font-bold">
                Sign in
              </Link>
            </div>
          </div>
          <form
            className="w-full flex mt-5 flex-col gap-3 items-center justify-center"
            autoComplete="off"
          >
            <CustomInput
              onchange_event={handleChange}
              placeholder="New password"
              input_type="password"
              value={Inputs.password}
              name="password"
              icon={<FaEye size={18} />}
            />
            <CustomInput
              onchange_event={handleChange}
              placeholder="Confirm password"
              input_type="password"
              value={Inputs.confirm_password}
              name="confirm_password"
              icon={<FaEye size={18} />}
            />
            <CustomButton
              btn_text={"Create new password"}
              type="submit"
              className="mt-5 w-full"
              onclick_event={handleSubmit}
            />
          </form>
        </div>
      </section>
      <AutoDisplayInfo />
    </MainContainer>
  );
}

export default ResetPassword;
