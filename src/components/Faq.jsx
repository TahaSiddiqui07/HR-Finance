import React, { useState } from 'react';

const faqs = [
  {
    question: "Do I need to invest right away?",
    answer: "No, you can explore and invest when you're ready."
  },
  {
    question: "What's the minimum investment amount?",
    answer: "The minimum amount varies by startup"
  },
  {
    question: "How does HR Finance make money?",
    answer: "We earns a small commission from your investment."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
      <p className="text-center text-gray-500 mb-8">
        Common questions from our investor community.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left text-lg font-medium"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default FAQ;
