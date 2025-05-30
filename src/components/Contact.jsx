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
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
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
    // Show success message
    alert("Message sent successfully!");
  };

  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Let us help you with your business!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-secondary font-medium mb-2"
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
                  className="block text-secondary font-medium mb-2"
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
                className="block text-secondary font-medium mb-2"
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
              <label className="block text-secondary font-medium mb-3">
                Services <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sales"
                    name="sales"
                    checked={formData.services.sales}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
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
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
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
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
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
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
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
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
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
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
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
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
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
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
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
