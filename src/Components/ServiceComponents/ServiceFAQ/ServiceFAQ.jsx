import React, { useState } from 'react';
import './ServiceFAQ.css';
import faq_image from '../../../assets/servicehero-image1.jpg'

const ServiceFAQ = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const faqs = [
    {
      question: "How does Toyota handle customer concerns/feedback?",
      answer: "Toyota has always been a customer-centric company. We value your feedback and strive to address your concerns and feedback with speed and empathy and in a fair and transparent manner"
    },
    {
      question: "How can I send feedback on my experience with a dealer or an individual?",
      answer: "You can send your feedback through telephone or email or through the Queries & Feedback Section of this website or through a feedback form available at all our dealer showrooms and workshops. You can also visit our Toyota Bharat website/mobile app (www.toyotabharat.com) & give your feedback in Get In touch section Or you can call us on 1800 309 0001 / 080 4505 9000"
    },
    {
      question: "How long will it take for my communication to be responded to ?",
      answer: "Our Customer Care team shall endeavour to reply to you within 1 working day."
    },
    {
      question: "Who should I contact in case of product or service related enquiry ?",
      answer: "Please call our 24x7 Toyota toll free number 1800 309 0001 for your queries"
    }
  ];

  return (
    <div className="toyota-faq-container">
      <div className="toyota-faq-left">
        <h1 className="toyota-faq-heading">Frequently<br />Asked Questions</h1>
        <div className="toyota-faq-image-container">
          <img 
            src={faq_image}
          />
          <div className="toyota-faq-response">
            <div className="response-text">Response is</div>
            <div className="awesome-text">Awesome</div>
          </div>
        </div>
      </div>
      <div className="toyota-faq-right">
        <div className="toyota-faq-box">
          {faqs.map((faq, index) => (
            <div key={index} className="toyota-faq-item">
              <div className="toyota-faq-question">
                <span className="toyota-faq-bullet">•</span>
                <span className="toyota-faq-question-text">{faq.question}</span>
              </div>
              <div className="toyota-faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
        <div className="toyota-faq-footer">
          <div className="toyota-faq-pagination">
            {currentPage}/{totalPages}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ;