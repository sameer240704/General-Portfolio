const About = () => {
  return (
    <div className="h-[90%] flex flex-col justify-center items-center bg-black text-white">
      <h2 className="text-4xl font-montserrat uppercase font-bold tracking-[.75rem] text-[#F7F0F5]">
        <i>Hello there, my name is</i>
      </h2>
      <h1 className="font-hiatus text-[11.5rem] tracking-wider h-fit -mt-5 relative overflow-hidden">
        <span className="gradient-text">Sameer Gupta</span>
      </h1>
      <div className="flex flex-col justify-center items-center text-xl -mt-5 font-montserrat tracking-[.7rem]">
        <h3>- Ex-Intern @ FMX Proptech -</h3>
      </div>
    </div>
  );
};

export default About;
