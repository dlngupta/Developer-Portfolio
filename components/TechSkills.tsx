import React from "react";
import Image from "next/image";

export default function TechSkills() {
    return (
        <>
            <div className="header flex gray projects">
                <h1>Technical Skills</h1>
            </div>
            <div className="flex partners justify-space">
                <Image src="/images/skills/html_css.png" height={45} width={100} alt="HTML5 CSS3" />
                <Image src="/images/skills/sass.png" height={45} width={100} alt="sass" />
                <Image src="/images/skills/js.png" height={45} width={100} alt="JavaScript" />
                <Image src="/images/skills/jutro.jfif" height={55} width={100} alt="Guidewire Jutro" />
                <Image src="/images/skills/reactjs.png" height={45} width={100} alt="React JS" />
                <Image src="/images/skills/jsx.jfif" height={55} width={150} alt="JSX" />
            </div>
            <div className="flex partners justify-space">
                <Image src="/images/skills/npm.png" height={55} width={100} alt="NPM" />
                <Image src="/images/skills/ts.png" height={45} width={80} alt="TS" />
                <Image src="/images/skills/nextjs.png" height={45} width={100} alt="Next JS" />
                <Image src="/images/skills/node.png" height={45} width={100} alt="Node JS" />
                <Image src="/images/skills/jquery.png" height={45} width={100} alt="JQuery" />
                <Image src="/images/skills/vue.jfif" height={65} width={140} alt="Vue JS" />
            </div>
        </>
    )
}
