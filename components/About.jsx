import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="h-screen w-screen relative flex flex-col justify-center items-center text-white">
      <div>
        <h2
          className="text-4xl font-montserrat uppercase text-center font-bold tracking-[.75rem] text-[#F7F0F5] opacity-0"
          style={{
            animation: "slideUp 1s ease-out forwards",
            animationDelay: "0.2s",
          }}
        >
          <i>Hello there, my name is</i>
        </h2>
        <h1
          className="font-hiatus text-[11.5rem] tracking-wider h-fit -mt-5 relative overflow-hidden gradient-text opacity-0"
          style={{
            animation: "slideUp 1s ease-out forwards",
            animationDelay: "0.6s",
          }}
        >
          Sameer Gupta
        </h1>
        <div
          className="flex flex-col justify-center items-center text-xl -mt-5 font-montserrat tracking-[.7rem] opacity-0"
          style={{
            animation: "slideUp 1s ease-out forwards",
            animationDelay: "1s",
          }}
        >
          <h3>- Ex-Intern @ FMX Proptech -</h3>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
