import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cityImage =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const executiveImage =
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105 h-full">
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Services = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Sales",
      description:
        "Our sales team is equipped with cutting-edge strategies and techniques developed by our CEO, ensuring that every sales manager is of the highest caliber. Our thorough analysis of customer behavior and targeted approach to calling different types of businesses at the optimal time, combined with the use of advanced analytics, consistently leads to positive results for our clients.",
    },
    {
      title: "Customer Service Support",
      description:
        "Our dedicated team of customer service representatives is trained to provide exceptional support to your customers, ensuring their inquiries and concerns are addressed promptly and professionally.",
    },
    {
      title: "Back Office Support",
      description:
        "Our back office support services include data entry, document processing, and administrative tasks to streamline your business operations and enhance efficiency.",
    },
    {
      title: "Lead Generation",
      description:
        "Our lead generation team is skilled in driving revenue growth for your business through effective lead generation techniques, helping you acquire new customers and expand your market reach.",
    },
    {
      title: "Technical Support",
      description:
        "Our technical support specialists are equipped with the knowledge and expertise to troubleshoot technical issues and provide solutions to ensure seamless operation.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full ${
          i === currentSlide ? "bg-primary" : "bg-gray-300"
        }`}
      />
    ),
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Services Offered
          </h2>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="mb-12">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <img
                src={cityImage}
                alt="City Skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center p-8">
                <div className="text-white text-center max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4">
                    We're - visionaries and strategic thinkers.
                  </h3>
                  <p className="text-xl">Over ten years in the BPO industry</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 3).map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <img
                src={executiveImage}
                alt="Executive Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-primary text-white p-6 max-w-xs">
                <h3 className="text-2xl font-bold mb-2">Michelle Melecio</h3>
                <p className="text-sm">CEO & COO</p>
              </div>
            </div>
          </Slider>

          <button
            onClick={previous}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-primary p-2 rounded-full shadow-lg z-10 transition-all duration-300"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-primary p-2 rounded-full shadow-lg z-10 transition-all duration-300"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(3, 5).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
