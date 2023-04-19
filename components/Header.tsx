import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <h3 className="white">Hey There!</h3>
                    <h2 className="white">I&apos;m Ashok Indla </h2>

                    <h3 className="green">I am an independent application developer, Passionate about bringing the 
                    customer&apos;s visions to life. Since starting my journey with application development in 2016, 
                    I have developed multiple projects for a diverse client base, including MNCs and Startups..</h3>
                    <p className="gray">I love programming, as well as running, taking photos and learning new things!</p>
                </div>
                <Image src="/images/ashok.png" width={463} height={513} alt="Ashok Reddy Indla"  /> 
            </div>
        </header>
    )
}