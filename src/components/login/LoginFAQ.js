import React from "react";
import { nanoid } from "nanoid";

function LoginFAQ() {
    
    const [faqs, setFaqs] = React.useState([
        {
            question: 'What is netflix?', 
            answer: 'This is the answer to all of your questions about rick astley. This answer needs to be very long, very very very long. This is a little boring but it will all be worth it',
            displayAnswer: false,
            id: nanoid()
        },
        {
            question: 'What is netflix?', 
            answer: 'This is the answer to all of your questions about rick astley. This answer needs to be very long, very very very long. This is a little boring but it will all be worth it',
            displayAnswer: false,
            id: nanoid()
        },
        {
            question: 'What is netflix?', 
            answer: 'This is the answer to all of your questions about rick astley. This answer needs to be very long, very very very long. This is a little boring but it will all be worth it',
            displayAnswer: false,
            id: nanoid()
        },
        {
            question: 'What is netflix?', 
            answer: 'This is the answer to all of your questions about rick astley. This answer needs to be very long, very very very long. This is a little boring but it will all be worth it',
            displayAnswer: false,
            id: nanoid()
        }
    ]);

    function toggleDisplay(id) {
        setFaqs((prevFaqs) => {
            return prevFaqs.map((question => {
                return ({
                    ...question,
                    displayAnswer: id === question.id ? !question.displayAnswer : false
                }); 
            }));
        });
    }

    const questionElements = faqs.map((question) => {
        return (
            <div className="question" onClick={() => toggleDisplay(question.id)}>
                <div className="question-text">
                    <h3>{question.question}</h3>
                    <span>+</span>
                </div>
                <div className={question.displayAnswer ? "answer-shown" : "answer-hidden"}>
                    <p>{question.answer}</p>
                </div>
            </div>
        );
    });

    return (
        <div>
            <hr className="login-info-hr" />
            <div className="login-info-faq">
                <h2>Frequently Asked Questions</h2>
                <div className="questions">
                    {questionElements}
                </div>
            </div>           
        </div>
    );
}

export default LoginFAQ;