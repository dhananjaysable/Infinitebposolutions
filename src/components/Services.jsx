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
    <div className="h-full p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg sm:p-8 hover:scale-105">
      <h3 className="mb-3 text-xl font-bold sm:text-2xl text-primary sm:mb-4">
        {title}
      </h3>
      <p className="text-base text-gray-700 sm:text-lg">{description}</p>
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-secondary">
            Services Offered
          </h2>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="mb-10 sm:mb-12">
            <div>
              <div className="relative h-64 sm:h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={cityImage}
                  alt="City Skyline"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-60 sm:p-8">
                  <div className="max-w-xl text-center text-white sm:max-w-2xl">
                    <h3 className="mb-2 text-xl font-bold sm:text-2xl md:text-3xl sm:mb-4">
                      We're - visionaries and strategic thinkers.
                    </h3>
                    <p className="text-base sm:text-xl">
                      Over ten years in the BPO industry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 bg-white rounded-lg shadow-lg sm:p-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                  {services.slice(0, 3).map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="relative h-64 sm:h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={executiveImage}
                  alt="Executive Portrait"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 right-0 max-w-xs p-4 text-white bg-primary sm:p-6">
                  <h3 className="mb-1 text-lg font-bold sm:text-2xl sm:mb-2">
                    Michelle Melecio
                  </h3>
                  <p className="text-xs sm:text-sm">CEO & COO</p>
                </div>
              </div>
            </div>
          </Slider>

          {/* Show arrows only on md+ screens */}
          <button
            onClick={previous}
            className="absolute z-10 hidden p-2 transition-all duration-300 -translate-y-1/2 bg-white rounded-full shadow-lg md:flex top-1/2 left-4 bg-opacity-80 hover:bg-opacity-100 text-primary"
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute z-10 hidden p-2 transition-all duration-300 -translate-y-1/2 bg-white rounded-full shadow-lg md:flex top-1/2 right-4 bg-opacity-80 hover:bg-opacity-100 text-primary"
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 sm:mt-16 md:grid-cols-2 sm:gap-8">
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
