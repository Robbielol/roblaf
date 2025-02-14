import React, { useState, useRef } from "react";
import Skills from "../../skills.json";
import { 
    DiReact, 
    DiJavascript1, 
    DiHtml5, 
    DiCss3, 
    DiGithubBadge,
    DiNodejsSmall 
} from "react-icons/di";
import { TbSql } from "react-icons/tb";
import CSharp from "../../SVGs/CSharp";
import JavaLogo from "../../SVGs/Java";
import PythonLogo from "../../SVGs/Python";
import { SiDotnet } from "react-icons/si";
import HeaderBar from "../../HeaderBar";
import Footer from "../../Footer";

const SkillSection = () => {
    const iconComponents = {
        DiReact,
        DiJavascript1,
        JavaLogo,
        DiHtml5,
        DiCss3,
        TbSql,
        SiDotnet,
        PythonLogo,
        DiGithubBadge,
        DiNodejsSmall,
        CSharp
    };
    
    return (
        <div className="section-container">
            <div className="skills-filter-wrapper">
                <div className="skills-container">
                    { Skills.map((skill, index) => {
                        const IconComponent = iconComponents[skill.Component];
                        return (
                            <div key={index} className="skill-box">
                                <h4>{skill.Name}</h4>
                                <KnowledgeBar progress={skill.Value}  IconComponent={IconComponent} color={skill.Color}/>
                            </div>
                        );
                    }) }
                </div>
            </div>
        </div>
    );
}

const KnowledgeBar = ({ progress, IconComponent, color }) => {
    return (
        <div className="circular-bar">
            <div className="progress-circle" style={{ '--progress': progress }}>
                <IconComponent color={color} size="100" className="center-image" />
            </div>
        </div>
    );
};

const Knowledgebase = () => {

    return(
        <>
            <HeaderBar />
            <SkillSection />
            <Footer/>
        </>
    );
}

export default Knowledgebase;
