import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Homely apartment?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How do I sign up on the platform?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Can I filter apartments by location, budget, and type?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How do I contact an agent for more details?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Are the accommodations verified?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Can I schedule a property viewing?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const fadeInTop = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 mb-10">
      <div className="container mx-auto px-4">
        <motion.h2 
         variants={fadeInTop}
         initial="initial"
         whileInView="animate"
        className="text-4xl font-bold mb-8 text-center ">
          Frequently asked questions
        </motion.h2>
        <motion.div 
         variants={fadeInTop}
         initial="initial"
         whileInView="animate"
        className="w-[80%]  mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 text-lg">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-200 rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
