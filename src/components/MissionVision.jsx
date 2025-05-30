import React from "react";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Mission</h3>
            <p className="text-gray-700 mb-4">
              At Infinity BPO Solutions Inc, our mission is to provide
              exceptional Business Process Outsourcing (BPO) services while
              enhancing the lives of our employees, whom we fondly refer to as
              ICONs (Infinity Collaborators of Outstanding Nominees).
            </p>
            <p className="text-gray-700 mb-4">
              We are committed to delivering high-quality BPO solutions to our
              clients, helping them streamline their operations, drive growth,
              and achieve success. Our team of dedicated professionals, the
              ICONs, are at the heart of everything we do.
            </p>
            <p className="text-gray-700">
              Our mission is to empower our ICONs by providing them with
              opportunities for personal and professional development,
              recognizing their contributions, and fostering a culture of
              inclusivity and diversity. We believe that by investing in our
              employees, we can create a strong and motivated team that is
              dedicated to delivering exceptional results for our clients.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Vision</h3>
            <p className="text-gray-700 mb-4">
              At Infinity BPO Solutions Inc, our vision is to be the leading
              provider of innovative and reliable Business Process Outsourcing
              (BPO) solutions in the industry. We strive to empower businesses
              worldwide by offering top-notch services that drive growth,
              efficiency, and success.
            </p>
            <p className="text-gray-700 mb-4">
              Our vision is to be a trusted partner for our clients, providing
              them with customized solutions that meet their unique needs and
              help them achieve their business goals. We aim to build
              long-lasting relationships with our clients based on trust,
              integrity, and mutual success.
            </p>
            <p className="text-gray-700">
              We envision a future where Infinity BPO Solutions Inc is
              recognized for its commitment to excellence, innovation, and
              customer satisfaction. We aspire to be a company that sets the
              standard for quality and professionalism in the BPO industry,
              continuously evolving and adapting to meet the changing needs of
              our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
