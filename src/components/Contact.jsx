import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: {
      sales: false,
      technicalSupport: false,
      leadGeneration: false,
      backOfficeSupport: false,
      customerServiceSupport: false,
      surveyServices: false,
      others: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      services: {
        sales: false,
        technicalSupport: false,
        leadGeneration: false,
        backOfficeSupport: false,
        customerServiceSupport: false,
        surveyServices: false,
        others: false,
      },
    });
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-primary">
            Let us help you with your business!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-secondary"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-secondary"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-secondary"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about the project"
                rows="6"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <div>
              <label className="block mb-3 font-medium text-secondary">
                Services <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sales"
                    name="sales"
                    checked={formData.services.sales}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="sales" className="ml-2 text-gray-700">
                    Sales
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="technicalSupport"
                    name="technicalSupport"
                    checked={formData.services.technicalSupport}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="technicalSupport"
                    className="ml-2 text-gray-700"
                  >
                    Technical Support
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="leadGeneration"
                    name="leadGeneration"
                    checked={formData.services.leadGeneration}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="leadGeneration"
                    className="ml-2 text-gray-700"
                  >
                    Lead Generation
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="backOfficeSupport"
                    name="backOfficeSupport"
                    checked={formData.services.backOfficeSupport}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="backOfficeSupport"
                    className="ml-2 text-gray-700"
                  >
                    Back Office Support
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="customerServiceSupport"
                    name="customerServiceSupport"
                    checked={formData.services.customerServiceSupport}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="customerServiceSupport"
                    className="ml-2 text-gray-700"
                  >
                    Customer Service Support
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="surveyServices"
                    name="surveyServices"
                    checked={formData.services.surveyServices}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="surveyServices"
                    className="ml-2 text-gray-700"
                  >
                    Survey Services
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="others"
                    name="others"
                    checked={formData.services.others}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="others" className="ml-2 text-gray-700">
                    Others
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 font-bold text-white transition duration-300 bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
