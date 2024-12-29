

const Hero = () => {
  const imgSrc = "../../public/assets/Hero-img.svg"; 

  return (
    <section className="relative h-screen bg-gradient-to-b from-[#C7DDFD] to-white">
      <img
        src={imgSrc}
        alt="CSI-ACE"
        className="absolute inset-0 w-full h-full object-cover rounded-[35px] p-5"
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold mb-4 text-primary p-5 " data-text="CSI-ACE">
          CSI-ACE
        </h1>
        <p className="text-xl sm:text-2xl mb-8 font-bai text-primary font-thin">Computer Society of India</p>
      </div>
    </section>
  );
}

export default Hero;