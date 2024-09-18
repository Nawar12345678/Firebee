import React, { useState } from "react";
import './FAQ.css';

const FAQ = ({ questionsAndAnswers }) => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleAnswer = (question) => {
        setSelectedQuestion(selectedQuestion === question ? null : question);
    };

    return (
        <div className="FAQ-pragraph">
            <h1>Frequently Asked Questions</h1>
            {questionsAndAnswers.map(({ question, answer }, index) => (
                <div key={index} className="question-answer">
                    <div className="faq-question" onClick={() => toggleAnswer(question)}>
                        <h4 className={selectedQuestion === question ? 'selected' : ''}>
                            {question}
                        </h4>
                        <span className="faq-toggle-icon">
                            {selectedQuestion === question ? '-' : '+'}
                        </span>
                    </div>
                    {selectedQuestion === question && (
                        <h6>
                            {answer}
                        </h6>
                    )}
                    {index < questionsAndAnswers.length - 1 && <hr className="faq-divider" />}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
