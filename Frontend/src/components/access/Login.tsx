import { ChangeEvent, useRef, useState } from "react";
import AutoDisplayInfo from "../../resused-components/AutoDisplayInfo";
import CustomButton from "../../resused-components/CustomButton";
import MainContainer from "../../resused-components/MainContainer";
import { Link } from "react-router-dom";
import Toasts from "../../resused-components/Toasts";
import SectionTitle from "../../resused-components/SectionTitle";
import Logo from "../../resused-components/Logo";
import CustomInput from "../../resused-components/CustomInput";
import { FaEye } from "react-icons/fa";
import { domain } from "../../resused-components/domain";

function Login() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [Toast, setToast] = useState(false);
  const [Inputs, setInputs] = useState({
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
  const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Inputs.email === "" || Inputs.password === "") {
      setToast(true);
      setErr({ type: "error", msg: "All fields are required" });
    } else {
      post_signin();
    }
  };
  async function post_signin() {
    const response = await fetch(`${domain}/api/access/login`, {
      method: "post",
      body: JSON.stringify(Inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.text();
    if (response.ok) {
      console.log(result)
      localStorage.setItem("ecommerce_token", result);
      window.location.href = "/user/home";
    } else {
      setToast(true);
      setErr({ type: "error", msg: result });
    }
  }
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
        <div className="w-full max-w-[300px]">
          <div className="w-full flex flex-col items-center justify-center mb-2">
            <div className="mb-1">
              <Logo className="text-4xl" />
            </div>
            <SectionTitle title="Welcome back!" />
          </div>
          <div className="w-full flex items-center justify-center gap-1">
            <div className="surface_text">Dont have an account?</div>
            <Link to="/access/signup" className="font-bold primary-text">
              Sign up
            </Link>
          </div>
          <form
            className="w-full flex mt-5 flex-col gap-3 items-center justify-center"
            autoComplete="off"
          >
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
            <CustomButton
              btn_text="Proceed"
              type="submit"
              className="w-full mt-5"
              onclick_event={handleSubmit}
            />
          </form>
          <div className="w-full flex items-center flex-wrap gap-1 justify-center md:flex-nowrap mt-4">
            <div className="surface_text flex-shrink-0">
              Dont remember password?
            </div>
            <Link
              to="/access/forgetpassword"
              className="primary-text font-bold flex-shrink-0"
            >
              Forget password
            </Link>
          </div>
        </div>
      </section>
      <AutoDisplayInfo />
    </MainContainer>
  );
}

export default Login;
