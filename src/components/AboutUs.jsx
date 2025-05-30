const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#0B3B7F] mb-4">About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Established on July 8, 2013, Infinity BPO Solutions Inc. is a
              premier Business Process Outsourcing (BPO) company dedicated to
              providing high-quality services to businesses worldwide.
            </p>

            <p className="text-lg text-gray-700">
              At Infinity BPO Solutions Inc., we offer a wide range of BPO
              services to help businesses streamline their operations, improve
              efficiency, and drive growth. Our team of experienced
              professionals is committed to delivering exceptional results and
              exceeding our clients' expectations.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-6">
              With a focus on innovation and technology, we continuously strive
              to improve our processes and stay ahead of industry trends. Our
              customized solutions are designed to meet the unique needs of each
              client, ensuring that they receive the best possible support to
              achieve their business goals.
            </p>

            <p className="text-lg text-gray-700">
              At Infinity BPO Solutions Inc., we value integrity, transparency,
              and excellence in everything we do. We take pride in building
              strong relationships with our clients and providing outstanding
              customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
