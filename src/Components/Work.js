import React from "react";
import PickMeals from "../Assets/Lovepik_com-450091571- flat editable vector of online invoice (1).png";
import ChooseMeals from "../Assets/validating.png";
import DeliveryMeals from "../Assets/output-onlinepngtools.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Create Invoices",
      text: "Easily create electronic invoices by filling in a form with necessary data",
    },
    {
      image: ChooseMeals,
      title: "Validate Invoices",
      text: "Validate your invoice against all AU/NZ UBL & PEPPOL business rules.",
    },
    {
      image: DeliveryMeals,
      title: "Send Invoices",
      text: "Forget about unreadable xml invoices, directly to your customer's email",
    },
  ];
  return (
    <div className="work-section-wrapper">
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
  );
};

export default Work;
