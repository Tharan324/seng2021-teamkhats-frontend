import React, { useRef } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/invoice_free_invoicemaker-1024x1024.png";
import { FiArrowDown } from "react-icons/fi";
import CreateImg from "../Assets/Lovepik_com-450091571- flat editable vector of online invoice (1).png";
import ValidateImg from "../Assets/validating.png";
import SendImg from "../Assets/output-onlinepngtools.png";

const Home = () => {
  const ref = useRef(null);
  const workInfoData = [
    {
      image: CreateImg,
      title: "Create Invoices",
      text: "Easily create electronic invoices by filling in a form with necessary data",
    },
    {
      image: ValidateImg,
      title: "Validate Invoices",
      text: "Validate your invoice against all AU/NZ UBL & PEPPOL business rules.",
    },
    {
      image: SendImg,
      title: "Send Invoices",
      text: "Forget about unreadable xml invoices, directly to your customer's email",
    },
  ];
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            E-Invoicing Made Easy and Accessible!
          </h1>
          <p className="primary-text">
            Bill customers directly via email, and do much more
          </p>
          <button className="secondary-button" onClick={() => ref.current?.scrollIntoView({behaviour: 'smooth'})}>
            Get Started <FiArrowDown />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      
      <div ref={ref} className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We offer the following services.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" className="work-section-images"/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
