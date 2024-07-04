import React from "react";

const Faq = () => {
  return (
    <div className="max-w-[1160px] mx-auto mt-56 space-y-6 px-6 my-12">
      <button className=" bg-[#FBFBFB] border-2 border-[#343268] text-[16px] text-[#020043] px-6 py-2 rounded-full">
        Faq
      </button>
      <h1 className="text-4xl  font-semibold text-[#020043]">
        Frequntly Asked Question
      </h1>

      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-sm my-4">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl text-[#020043] font-medium">
            {" "}
            What are your office hours?
          </div>
          <div className="collapse-content bg-white">
            <p>
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content bg-white">
            <p>
              To schedule an appointment, contact the service provider via
              phone, email, or their website. Provide necessary details and
              suggest a few available dates and times. Once confirmed, request a
              confirmation and prepare any required documents. Ensure you arrive
              on time or log in promptly for virtual appointments
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you accept insurance?
          </div>
          <div className="collapse-content bg-white">
            <p>
              Yes, we accept insurance. Please provide your insurance details
              when scheduling your appointment. We will verify your coverage and
              inform you of any co-pays or additional charges. If you have
              specific questions about your plan or coverage, feel free to
              contact our office, and we'll be happy to assist you
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What should I bring to my appointment?
          </div>
          <div className="collapse-content bg-white">
            <p>
              For your appointment, bring a valid ID, your insurance card, and
              any relevant medical records or documents. If applicable, also
              bring a list of current medications and any paperwork related to
              your visit.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content bg-white">
            <p>
              Yes, we offer telemedicine appointments. You can schedule a
              virtual visit through our website or by contacting our office.
              We’ll provide the necessary details and instructions for accessing
              your appointment online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
