import axios from "axios";
import { useState } from "react";

const ContactForm = ({ refresh }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      setError("Name and Phone are required");
      return;
    }

    await axios.post("https://contact-form-backend-xk3b.onrender.com/api/contacts", form);

    setForm({ name: "", email: "", phone: "", message: "" });
    setError("");
    refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE – CONTACT INFO */}
        <div className="bg-teal-500 text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Contact Information
            </h2>
            <p className="text-sm opacity-90 mb-6">
              Feel free to reach out to us anytime. We usually respond within 24 hours.
            </p>

            <div className="space-y-4 text-sm">
              <p>📞 +91 98765 43210</p>
              <p>📧 support@example.com</p>
              <p>📍 New Delhi, India</p>
            </div>
          </div>

          <div className="text-xs opacity-80">
            © 2026 Your Company
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Your Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Your Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              rows="3"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 resize-none"
              placeholder="Write your message"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={!form.name || !form.phone}
            className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition disabled:bg-gray-400 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
