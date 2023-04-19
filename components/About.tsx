import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="UI/ReactJS Developer"
                        icon="/icons/design.svg"
                        description="I create design products with unique ideas."
                        projects={7} />
                    <AboutCard
                        title="Web Design and Development"
                        icon="/icons/code.svg"
                        description="I develop Front-End with coding super smooth."
                        projects={12} />
                    <AboutCard
                        title="Mobile"
                        icon="/icons/phone.svg"
                        description="I develop cross-platform mobile applications."
                        projects={3} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray"> Introduce </h5>
                    <h1 className="white">Hello, I&#39;m Ashok Indla</h1>
                    <p className="green">I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer with a UI/ReactJS Developer background. I always feel enthusiastic about Application development, It gives me the scope of upgrading my skills with new requirements every time. I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                    <br />
                    <h3 className="white">Testimonials</h3>
                    <p className="gray">Email me at:</p>
                    <a className="green" href="mailto:indlaashokreddy406@gmail.com">indlaashokreddy406@gmail.com</a>
                </div>
            </div>

            <div className="flex partners justify-space">
                <Image src="/images/partners/Farmers.jfif" height={45} width={180} alt="Famers Insurance" />
                <Image src="/images/partners/jpm.jfif" height={45} width={180} alt="JPMorgan Chase" />
                <Image src="/images/partners/securends.jfif" height={45} width={120} alt="SecurEnds" />
                <Image src="/images/partners/hhax.jfif" height={45} width={120} alt="HHAeXachange" />
            </div>
            <div className="flex partners justify-space">
                <Image src="/images/partners/rm_logo.jfif" height={65} width={140} alt="RouteMatch" />
                <Image src="/images/partners/rentals.png" height={45} width={180} alt="Rentals.com" />
                <Image src="/images/partners/rv.jfif" height={45} width={180} alt="RedVentures" />
                <Image src="/images/partners/at_t.jfif" height={65} width={180} alt="AT & T" />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}