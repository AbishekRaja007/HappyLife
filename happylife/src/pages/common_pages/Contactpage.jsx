import React, { useState } from "react";

const ContactPage = () => {
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessageSent(true);
        event.target.reset();
    };

    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4"
        }}>
            <div style={{
                background: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "100%", maxWidth: "400px"
            }}>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
                    <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
                    <textarea name="message" rows="5" placeholder="Your Message" required style={inputStyle}></textarea>
                    <button type="submit" style={buttonStyle}>Send Message</button>
                </form>
                {messageSent && <p style={{ color: "green" }}>Message sent successfully!</p>}
            </div>
        </div>
    );
};

const inputStyle = {
    width: "100%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "4px"
};

const buttonStyle = {
    width: "100%", padding: "10px", background: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer"
};

export default ContactPage;
