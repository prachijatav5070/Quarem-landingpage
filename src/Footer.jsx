import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const features = [
  { title: "Upload and store all related lease documents", description: "Including photos, space plans, amendments and more" },
  { title: "Store your list of related lease contacts", description: "Make a detailed contact profile for anyone related to the lease" },
  { title: "Set Critical Date Notifications", description: "Create automated email reminders for events, like expirations or option windows" },
  { title: "Share access and monitor all activity", description: "Invite your team in, assign access levels, and monitor any changes made to the lease" },
];

const faqs = [
  { question: "How does the data get into the system?", answer: "One of three ways – we import the data, integrate the data, or the data is manually entered." },
  { question: "How large of a lease portfolio can the software manage?", answer: "Quarem is powerful enough to handle large portfolios but built for small to midsize organizations." },
  { question: "Does Quarem manage any type of real estate lease?", answer: "Quarem can manage any type of commercial real estate, equipment or service lease." },
  { question: "Can I create custom data fields specific to my business?", answer: "Yes! Users can work with the Quarem Tech Team to implement a customization." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Features Section */}
      <div className="bg-gray-200 py-12 px-4 h-100 text-align-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              <h3 className="text-xl font-bold text-blue-600">{feature.title}</h3>
              <div className="w-12 border-b-2 border-blue-600 mb-2 mx-auto"></div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-gray-600 text-center mb-8">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-md transition-all duration-300">
              <button
                className={`flex justify-between items-center w-full py-4 px-6 text-left font-bold text-lg transition-all duration-300 ${openIndex === index ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <div className="p-4 border-t-2 border-blue-500 bg-white text-black">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-500 text-white text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Get Started With Quarem</h2>
        <p className="text-lg mb-6">Less headaches. More Control. A better way to manage your leases.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input type="email" placeholder="Work Email" className="p-3 w-full sm:w-80 bg-white text-black rounded-md" />
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-bold">Get Started</button>
        </div>
        <p className="mt-4"><a href="#" className="text-white underline">See Quarem in action. Get a Demo</a></p>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FEATURES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Leases</li>
              <li>Critical Dates</li>
              <li>ASC 842 | IFRS 16</li>
              <li>Reporting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Blog</li>
              <li>Guides</li>
              <li>CRE Conferences</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <p className="text-gray-400 flex items-center"><FaMapMarkerAlt className="mr-2" /> Houston, TX</p>
            <p className="text-gray-400 flex items-center"><FaPhoneAlt className="mr-2" /> 346-266-2500</p>
            <p className="text-gray-400 flex items-center"><FaEnvelope className="mr-2" /> info@quarem.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-gray-400 text-2xl" />
              <FaLinkedin className="text-gray-400 text-2xl" />
              <FaTwitter className="text-gray-400 text-2xl" />
              <FaYoutube className="text-gray-400 text-2xl" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>Copyright 2025 Quarem, all rights reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}
