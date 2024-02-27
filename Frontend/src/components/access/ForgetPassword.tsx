import { ChangeEvent, useState } from "react";
import AutoDisplayInfo from "../../resused-components/AutoDisplayInfo";
import CustomButton from "../../resused-components/CustomButton";
import MainContainer from "../../resused-components/MainContainer";
import { Link } from "react-router-dom";
import Toasts from "../../resused-components/Toasts";
import SectionTitle from "../../resused-components/SectionTitle";
import Logo from "../../resused-components/Logo";
import CustomInput from "../../resused-components/CustomInput";
import { clientDomain, domain } from "../../resused-components/domain";
import { MdMarkEmailRead } from "react-icons/md";

function ForgetPassword() {
  const [Verified, setVerified] = useState<boolean>(false);
  // const direct = useNavigate();
  const [Toast, setToast] = useState(false);
  const [Inputs, setInputs] = useState({
    user: "",
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
    if (Inputs.user === "") {
      setToast(true);
      setErr({ type: "error", msg: "All fields are required" });
    } else {
      forgetpassword();
    }
  };
  async function forgetpassword() {
    const response = await fetch(
      `${domain}/api/access/reset_password/send_link`,
      {
        method: "post",
        body: JSON.stringify({
          ...Inputs,
          link: `${clientDomain}/access/resetpassword`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.text();
    if (response.ok) {
      console.log(result);
      setVerified(true);
    } else {
      setToast(true);
      setErr({ type: "warning", msg: result });
    }
  }
  return (
    <MainContainer className="flex items-center justify-center ">
      {!Verified && (
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
              <SectionTitle title="Recover Password" />
            </div>
            <div className="w-full flex items-center justify-center gap-1">
              <div className="">Remember password?</div>
              <Link to="/" className="primary-text font-bold">
                Sign in
              </Link>
            </div>
            <form
              className="w-full flex mt-5 flex-col gap-3 items-center justify-center"
              autoComplete="off"
            >
              <CustomInput
                onchange_event={handleChange}
                placeholder="Active Email or Mobile number"
                input_type="text"
                value={Inputs.user}
                name="user"
              />

              <CustomButton
                btn_text="Proceed"
                type="submit"
                className="w-full"
                onclick_event={handleSubmit}
              />
            </form>
          </div>
        </section>
      )}
      {Verified && (
        <section className="w-1/2 max-md:w-full h-screen flex flex-col items-center justify-center relative">
          <section className="flex flex-col items-center w-full justify-center !max-w-[300px]">
            <div className="primary-text">
              <MdMarkEmailRead size={60} />
            </div>
            <SectionTitle title="Check your email" title_class="primary-text" />
            <div className="w-full flex justify-center">
              <p className="surface_text text-center">
                We have sent you and activation link. Please be sure to check
                your console or email
              </p>
            </div>
          </section>
        </section>
      )}
      <AutoDisplayInfo />
    </MainContainer>
  );
}

export default ForgetPassword;
