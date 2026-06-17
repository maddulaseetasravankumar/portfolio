import React, { useState } from 'react';
import { educationData } from '../data/portfolioData';
import "./Education.css";

const Education = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className="section education-section" id="education">
            <div className="container">
                <div className="tag reveal">
                    Qualifications
                </div>
                <h2 className="section-head reveal">
                    My Education
                </h2>
                <div className="education-accordion reveal">
                    {educationData.map((edu, index) => (
                        <div className="education-item" key={edu.id}>
                            <div
                                className={`education-header ${activeIndex === index ? "active" : ""}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3>{edu.Degree}</h3>
                            </div>
                            <div className={`education-body ${activeIndex === index ? "show" : ""}`}>
                                <p>
                                    Successfully completed my {edu.Degree} from {edu.University} with {edu.Mainsubject}, {edu.Note}
                                </p>
                                <p>
                                    Score: {edu.Percentage}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
}
export default Education;