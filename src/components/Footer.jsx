import React, { useRef, useState } from "react";
import { resourcesLinks } from "../constants";
import emailjs from "emailjs-com";
import "./Footer.css";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Mail,
} from "lucide-react"; // Import Lucide React icons
import logo from "../assets/logoi.png"; // Ensure the path is correct

const Footer = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_i04p8a9",
        "template_e47xjzq",
        {
          from_name: formData.name,
          to_name: "SG Multi",
          from_email: formData.email,
          to_email: "info@multinational.com",
          message: formData.message,
        },
        "9PovvJodKqC0m8IO2"
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage(
            "Thank you, I will get back to you as soon as possible."
          );
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <footer id="footer" className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        {/* Logo and Contact Details Column */}
        <div className="text-left">
          <h3 className="text-md font-semibold mb-4">Our Services</h3>
          <ul className="custom-list space-y-3">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <br />
          <div className="flex items-start mb-2">
            <MapPin className="mr-2" size={24} />
            <p className="text-sm sm:text-base font-light">
              2307 OAK LANE SUITE 201, GRAND PRAIRIE TEXAS 75051-8286, U.S.A
            </p>
          </div>
          <div className="flex items-start mb-2">
            <Mail className="mr-2" size={24} />
            <p className="text-sm sm:text-base font-light">
              802 SOUTH CARRIER PKWY # 530395, GRAND PRAIRIE TEXAS 75053-0395,
              U.S.A
            </p>
          </div>
        </div>

        <div
          id="contact-form"
          className="text-left px-4 py-4 bg-neutral rounded-md md:rounded-none md:p-0"
        >
          <h3 className="text-md font-semibold mb-4">Contact Us</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-neutral-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-white text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-neutral-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-white text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-neutral-400">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Enter your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-blue-500"
              ></textarea>
              {errors.message && (
                <p className="text-white text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className={`bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {successMessage && (
              <p className="text-white mt-4">{successMessage}</p>
            )}
          </form>
        </div>

        {/* Social Media Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold mb-4">Our Location</h3>
          <div className="w-full h-64 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.0477227128827!2d-97.00690482368958!3d32.71135957369102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e85fdab82e09f%3A0xf885c743d551fa8f!2s2307%20Oak%20Ln%20%23201%2C%20Grand%20Prairie%2C%20TX%2075051%2C%20USA!5e0!3m2!1sen!2sng!4v1717000269826!5m2!1sen!2sng"
              width="120%"
              height="120%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>
          <h3 className="text-md font-semibold mb-4 mt-10">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
