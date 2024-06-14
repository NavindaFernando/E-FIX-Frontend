import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import BodyContent from "../../components/BodyContent/BodyContent";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";

function ContactPage() {
  useEffect(() => {
    // load the emailjs script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      // initialize EmailJS after the script is loaded
      emailjs.init("ZzOJO38ATTvXI3GwN");
    };
    document.body.appendChild(script);

    // cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const sendMail = (e) => {
    e.preventDefault();

    var params = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const serviceID = "service_crwknqs";
    const templateID = "template_htqx0gl";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        e.target.reset();
        console.log(res);
        alert("Your message sent successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <BodyContent>
      <Navbar />
      <section className="contact position-relative min-h-dvh flex justify-center items-center flex-col bg-cover px-[100px] py-[50px]">
        <div className="text-center max-w-[800px]">
          <h2 className="text-white text-[36px] font-medium">Contact Us</h2>
          <p className="font-light text-white">
            Have a question, comment, or suggestion? Our dedicated team will get
            back to you as soon as possible. Your satisfaction is our priority,
            and we look forward to assisting you.
          </p>
        </div>

        <div className="containers w-full flex justify-center items-center mt-[30px]">
          <div className="contactInfo w-1/2 flex flex-col">
            <div className="position-relative flex px-[0] py-[20px]">
              <div className="min-w-[60px] h-[60px] bg-[#ffffff81] flex justify-center items-center rounded-[50%] text-[22px] [box-shadow:0_0_1em_rgba(1,_17,_39,_0.5)]">
                <i className="bx bx-current-location" aria-hidden="true"></i>
              </div>
              <div className="flex ml-[20px] text-[16px] text-white flex-col font-light">
                <h3 className="font-medium text-white text-[1.70rem]">
                  Address
                </h3>
                <p>
                  18 Rappel st, <br />
                  Greenvale VIC <br />
                  3059 Sri Lanka
                </p>
              </div>
            </div>

            <div className="position-relative flex px-[0] py-[20px]">
              <div className="min-w-[60px] h-[60px] bg-[#ffffff81] flex justify-center items-center rounded-[50%] text-[22px] [box-shadow:0_0_1em_rgba(1,_17,_39,_0.5)]">
                <i className="bx bxs-phone" aria-hidden="true"></i>
              </div>
              <div className="flex ml-[20px] text-[16px] text-white flex-col font-light">
                <h3 className="font-medium text-white text-[1.70rem]">Phone</h3>
                <p>0775919052</p>
              </div>
            </div>

            <div className="position-relative flex px-[0] py-[20px]">
              <div className="min-w-[60px] h-[60px] bg-[#ffffff81] flex justify-center items-center rounded-[50%] text-[22px] [box-shadow:0_0_1em_rgba(1,_17,_39,_0.5)]">
                <i className="bx bxs-envelope" aria-hidden="true"></i>
              </div>
              <div className="flex ml-[20px] text-[16px] text-white flex-col font-light">
                <h3 className="font-medium text-white text-[1.70rem]">Email</h3>
                <p>m.navindafernando@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contactForm w-1/2 flex flex-col">
            <form onSubmit={sendMail}>
              <h2>Get in touch</h2>
              <div className="inputBox">
                <input id="name" name="name" type="text" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea
                  id="message"
                  name="message"
                  required="required"
                ></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="inputBox">
                <button id="btnSendMail" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <Footer />
      </div>
    </BodyContent>
  );
}

export default ContactPage;
