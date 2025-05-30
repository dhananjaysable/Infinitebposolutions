import Video from "../assets/videos/video.mp4";
import Logo from "../assets/images/test.png";

const VideoHeader = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl">
          <div className="flex justify-center mb-6">
            <img
              src={Logo}
              alt="Infinity BPO Solutions Logo"
              className="h-24 md:h-32"
            />
          </div>

          <p className="text-xl md:text-2xl text-white mb-8">
            A premier Business Process Outsourcing company dedicated to
            providing high-quality services to businesses worldwide.
          </p>
          <a
            href="#about"
            className="inline-block bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
