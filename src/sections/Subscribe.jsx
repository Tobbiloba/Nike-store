import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center flex-col max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold">
        Sign Up Form
        <span className="text-coral-red">Updates</span> & Newsletters
      </h3>

      <div className="lg:max-w-[60%] w-full bg-white flex items-center max-sm:flex-col gap-5 p-1.5 sm:border border-slate- rounded-xl">
        <input type="text" placeholder="subscribe@nikee.com" className="input font-mono"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" smRounded fullWidth/>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
