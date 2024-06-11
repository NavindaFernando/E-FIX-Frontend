import React from "react";
import BodyContent from "../../components/BodyContent/BodyContent";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";

function ContactPage() {
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
          <div class="contactInfo w-1/2 flex flex-col">
            <div className="position-relative flex px-[0] py-[20px]">
              <div className="min-w-[60px] h-[60px] bg-[#ffffff81] flex justify-center items-center rounded-[50%] text-[22px] [box-shadow:0_0_1em_rgba(1,_17,_39,_0.5)]">
                <i class="bx bx-current-location" aria-hidden="true"></i>
              </div>
              <div class="flex ml-[20px] text-[16px] text-white flex-col font-light">
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
                <i class="bx bxs-phone" aria-hidden="true"></i>
              </div>
              <div className="flex ml-[20px] text-[16px] text-white flex-col font-light">
                <h3 className="font-medium text-white text-[1.70rem]">Phone</h3>
                <p>0775919052</p>
              </div>
            </div>

            <div className="position-relative flex px-[0] py-[20px]">
              <div class="min-w-[60px] h-[60px] bg-[#ffffff81] flex justify-center items-center rounded-[50%] text-[22px] [box-shadow:0_0_1em_rgba(1,_17,_39,_0.5)]">
                <i class="bx bxs-envelope" aria-hidden="true"></i>
              </div>
              <div className="flex ml-[20px] text-[16px] text-white flex-col font-light">
                <h3 className="font-medium text-white text-[1.70rem]">Email</h3>
                <p>m.navindafernando@gmail.com</p>
              </div>
            </div>
          </div>

          {/* inputs */}
          <div class="contactForm">
            <form>
              <h2>Get in touch</h2>
              <div class="inputBox">
                <input id="name" type="text" required="required" />
                <span>Full Name</span>
              </div>
              <div class="inputBox">
                <input id="email" type="text" required="required" />
                <span>Email</span>
              </div>
              <div class="inputBox">
                <textarea id="message" required="required"></textarea>
                <span>Type Your Message...</span>
              </div>
              <div class="inputBox">
                <button id="btnSendMail" type="button" onclick="sendMail()">
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
