import { useState } from "react";

const faqs = [
  [
    "What is NEXORA?",
    "NEXORA is an AI-powered productivity and workflow platform that helps modern teams organize work, automate repetitive tasks, and move from ideas to outcomes with less friction.",
  ],
  [
    "Is there a free plan?",
    "Yes. The Starter plan is free forever for individuals who want to bring their essential projects and workflows into one focused workspace.",
  ],
  [
    "Can I cancel anytime?",
    "Absolutely. You can change or cancel your plan at any time. Your workspace stays available through the end of your current billing period.",
  ],
  [
    "Is my data secure?",
    "Security is built into every NEXORA workspace with thoughtful permissions, encrypted data, and controls designed to keep your work private.",
  ],
  [
    "Can I use NEXORA with my team?",
    "Yes. Invite your team, connect your workflows, and give everyone a shared view of priorities, projects, and progress.",
  ],
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section id="faq" className="faq-section section-pad">
      <div className="section-heading-row faq-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> QUESTIONS, ANSWERED
          </div>
          <h2>
            Good to know
            <br />
            <em>before you begin.</em>
          </h2>
        </div>
        <p>
          Everything you need to choose the right way forward for your team.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => {
          const answerId = `faq-answer-${index}`;
          const isOpen = openFaq === index;
          return (
            <div
              className={`faq-item ${isOpen ? "is-open" : ""}`}
              key={question}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span>{question}</span>
                <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
              </button>
              <div
                className="faq-answer"
                id={answerId}
                role="region"
                aria-hidden={!isOpen}
              >
                <p>{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
