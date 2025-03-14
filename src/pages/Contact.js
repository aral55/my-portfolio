import React, { useState } from "react";

function Contact () {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
};
    
    
    return (
        <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                {/*Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>

                {/*Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>

                {/*Message Texterea*/}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus
                    :ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                    />
                </div>

                {/*Submit Button */}
                <div className="flex justify-center">
                    <button type="submit"
                    className="px-6 py-3 bg-blue-300 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;