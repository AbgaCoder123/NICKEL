import CustomButton from './CustomButton'

function Subscibesection() {
  return (
    <section className="mx-auto surface rounded-xl max-w-[1200px] w-full font-[poppins] py-5 overflow-hidden">
      <div className="w-full flex items-center justify-center h-[300px] ">
        <div className="w-[40%] flex items-start justify-start flex-col gap-5">
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="text-3xl sm:text-5xl font-bold w-[500px] primary-text">
            SUBSCRIBE TO THE NEWS
          </p>
          <div className="w-[350px] leading-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            cupiditate obcaecati labore aut neque aperiam?
          </div>
          <CustomButton
            btn_text="Subscribe"
            className="px-10 !bg-transparent border-2 primary-text primary-border"
          />
        </div>
        <div className="w-[40%] flex justify-end">
          <img
          className="object-contain w-full h-[350px] translate-y-5"
            src="/public/8f4b843056b690db176172b9d196ea5e-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Subscibesection