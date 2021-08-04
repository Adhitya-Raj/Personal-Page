import { useEffect, useState } from "react"

const skillset = {
    main: [
    ['HTML','CSS','JS','C/C++'],
    ['Bootstrap','ReactJS','NodeJS','Git'],
    ['SQL','MongoDB']
    ],
    other:[
        ['Graphic Designing','Photo Manipulation','UI Designing','Video Editing'],
        ['Illustrator','Photoshop','Figma','Filmora']
    ]
}

// const SkillElements = {
//     main: skillset.main.forEach(skill => {
//         return skill.map((item)=>{
//         return (<p className="skill-item">{item}</p>)
//     })}),
//     other: skillset.other.forEach(skill => {
//         return skill.map((item)=>{
//         return (<p className="skill-item">{item}</p>)
//     })})
// }

export default function SkillsSection(){

    const [SkillElements, setSkillElements] = useState({main: [], other: []})    
    
    useEffect(()=>{
        setSkillElements({
            main: (
            <div className="skill-container">
                { skillset.main.map((skill,index) => {
                    return (
                    <div className="skill-box" key={index}>
                        {skill.map((item,index)=>{
                        return (<p className="skill-item" key={index}>{item}</p>)
                        })}
                    </div>
                    )
                })}
            </div>
            ),
            other: (
            <div className="skill-container">
                { skillset.other.map((skill,index) => {
                    return (
                    <div className="skill-box" key={index}>
                        {skill.map((item,index)=>{
                        return (<p className="skill-item" key={index}>{item}</p>)
                        })}
                    </div>
                )})}
            </div>
            )
        })
    }, [])

    return (
        <section id="skills" className="h-full d-center pb-5 bg-alt">
            <div className="container f-rb">
                <h2 className="mb-5 f-pd fs-1"><strong>Skills</strong></h2>
                {SkillElements.main}
                <br/><br/>
                <h2 className="mb-5 f-pd fs-1"><strong>Hobbies</strong></h2>
                {SkillElements.other}
            </div>
        </section>
    )
}