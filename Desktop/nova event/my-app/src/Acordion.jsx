import React from "react";
import useOpenController from "./useOpenController";

export const Acordion = ({ section }) => {
    const { isOpen, toggle } = useOpenController(false);
    return (
        <div className="accordion-container" id="faq">
            <ExpandableColumn 
                question={section.question} 
                isOpen={isOpen}
                toggle={toggle}
            />
            {isOpen &&  <TextSection text={section.answer}/>}
            <div className="underline"></div>
        </div>
    );
};

export const ExpandableColumn = ({ question, isOpen, toggle }) => {
    return (
        <div className="column-container" onClick={toggle}>
            <div className="column-text">{question}</div>
            <button className="expandable-button">
                <span 
                    className="material-symbols-outlined" 
                    style={{
                        transform: `rotate(${isOpen ? 180 : 0}deg)`,
                        transition: "all 0.25s",
                    }}
                >
                    expand_more
                </span>
            </button>
        </div>
    );
};

export const TextSection = ({text}) => {
    return (
    <div className="column-container">
    <div>{text}</div>
    </div>
    );
};
