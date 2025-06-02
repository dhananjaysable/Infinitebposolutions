import Video from "../assets/videos/video.mp4";
import Logo from "../assets/images/test.png";

const VideoHeader = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <video
          className="absolute object-cover w-full h-full opacity-70"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src={Logo}
              alt="Infinity BPO Solutions Logo"
              className="h-16 sm:h-20 md:h-32"
            />
          </div>

          <p className="mb-6 text-base text-white sm:text-lg md:text-2xl md:mb-8">
            A premier Business Process Outsourcing company dedicated to
            providing high-quality services to businesses worldwide.
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-2 text-sm font-bold text-white transition-colors duration-300 rounded-full bg-primary hover:bg-blue-700 sm:py-3 sm:px-8 sm:text-base md:text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
