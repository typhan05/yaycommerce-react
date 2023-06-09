import React from "react";
import BreadCrumb from "../../components/Breadcrumb";
import PreFooter from "../../blocks/pre-footer";
import Select from "react-select";

const breadcrumbs = [
  {
    id: 1,
    text: "Home",
    link: "/yaycommerce-react",
  },
  {
    id: 2,
    text: "Contact",
    link: "",
  },
];

const review_options = [
  { value: "recent", label: "Season subject 1" },
  { value: "latest", label: "Season subject 2" },
  { value: "yesterday", label: "Season subject 3" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: "54px",
    "min-height": "54px",
    borderRadius: "7px",
    boxShadow: state.isFocused ? "0px 5px 15px rgba(0, 0, 0, 0.07)" : 0,
    borderColor: state.isFocused ? "#122940" : "#D3DCE5",
    "&:hover": {
      borderColor: state.isFocused ? "#122940" : "#D3DCE5",
    },
    padding: "0 5px",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#5A6D80",
      opacity: 0.5,
    };
  },
  option: (base, { isFocused, isSelected }) => {
    return {
      ...base,
      backgroundColor: isFocused
        ? "#F2F2F2"
        : isSelected
        ? "#F2F2F2"
        : "#FFFFFF",
      color: "#122940",
      margin: "2px 5px",
      width: "auto",
      borderRadius: "7px",
    };
  },
};

export default function Contact() {
  return (
    <>
      <BreadCrumb content={breadcrumbs} />
      <section className="lg:mb-[150px] lg:mt-8 mb-20">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-[120px]">
            <div className="lg:col-span-7">
              <h1 className="md:text-4xl text-[28px] font-bold mb-2">
                We’re here to help you!
              </h1>
              <div className="lg:mb-8 mb-5">
                <p className="text-gray">
                  Have a question, comment, or brilliant idea you'd like to
                  share? Please contact Remit using the most convenient way
                  below:
                </p>
              </div>
              <div className="lg:mb-8 mb-5">
                <p className="mb-[15px]">
                  <strong>Call us today:</strong>
                  <a href="tel:6-146-389-574">6-146-389-574</a>
                </p>
                <p>
                  <strong>Send us an email:</strong>
                  <a href="mailto:support@remit.com">support@remit.com</a>
                </p>
              </div>
              <form>
                <p className="mb-[15px]">
                  Or fill out the form below and we’ll get back to you as soon
                  as possible.
                </p>
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="md:mb-7 mb-6">
                    <label
                      htmlFor="full-name"
                      className="block mb-2 text-sm font-medium"
                    >
                      Full name<span className="text-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                      placeholder="Enter your fullname"
                      required
                    />
                  </div>
                  <div className="md:mb-7 mb-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium"
                    >
                      Phone number<span className="text-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="md:mb-7 mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      Email Address<span className="text-pink">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="md:mb-7 mb-6">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium"
                    >
                      Subject<span className="text-pink">*</span>
                    </label>
                    <Select
                      className="react-select-container"
                      classNamePrefix="react-select"
                      options={review_options}
                      placeholder={"Select yours season"}
                      styles={customStyles}
                      components={{ IndicatorSeparator: () => null }}
                    />
                  </div>
                </div>
                <div className="md:mb-8 mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    Message<span className="text-pink">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-xl border border-transparent shadow-[0_7px_25px_rgba(55,126,98,0.2)] bg-green px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-700 hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1) min-w-[160px]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-5">
              <div className="relative lg:pb-[130%] pb-[56.25%] lg:mt-0 mt-10">
                <iframe
                  title="Map location"
                  width="600"
                  height="450"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.481384460927!2d-73.99940988444182!3d40.72943194448569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599051e43f09%3A0x73708ab233ccf977!2sBobst%20Library%2C%2070%20Washington%20Square%20S%2C%20New%20York%2C%20NY%2010012%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1663437780260!5m2!1svi!2s"
                  style={{ border: "0" }}
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreFooter />
    </>
  );
}
