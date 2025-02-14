
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