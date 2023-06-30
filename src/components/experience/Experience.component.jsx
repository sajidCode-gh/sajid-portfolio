import { Fade } from "react-awesome-reveal";
import "./Experience.styles.css";

const Experience = () => {
    return (
        <div className="experience" id="experience">
            <Fade triggerOnce>
                <div className="experience-info text-middle">
                    <h2>Experience</h2>
                    <p>
                        I'm thrilled to share my exciting journey, I've learned
                        and grown a lot during these past few years and all
                        thanks to the incredible people I've worked with.
                    </p>
                </div>
            </Fade>
            <div className="experiences">
                <Fade cascade triggerOnce>
                    <div className="experience-section">
                        <h3>
                            <img
                                src="//cdn.shopify.com/s/files/1/1905/1333/files/Boost_logo_32x32.png?v=1613597819"
                                alt=""
                            />
                            <a href="https://boostcommerce.net/">
                                {" "}
                                Boostcommerce{" "}
                            </a>
                            <small>May 17th 2022 - Present</small>
                        </h3>
                        <h4>Technical Support Engineer</h4>
                        <p>
                            In my role as a tech engineer, I foster close
                            collaboration with customers to address critical
                            issues promptly. I am adept at implementing or
                            extending small features for customers' stores based
                            on their requests. Furthermore, I have gained
                            valuable experience in debugging complex issues
                            within large-scale stores, showcasing my proficiency
                            in troubleshooting with precision and expertise.
                        </p>
                        <div className="skills">
                            <h4>Expertise:</h4>
                            <span>Shopify</span>
                            <span>Liquid</span>
                            <span>Javascript</span>
                            <span>Typescript</span>
                            <span>JQuery</span>
                            <span>API</span>
                            <span>React</span>
                            <span>HTML</span>
                        </div>
                    </div>
                    <div className="experience-section upwork">
                        <h3>
                            <img
                                src="https://www.upwork.com/favicon.ico"
                                alt="upwork"
                            />
                            <a href="https://www.upwork.com/freelancers/muhammadsajid35">
                                UpWork
                            </a>{" "}
                            <small>June 2020 - Jan 2022</small>
                        </h3>
                        <h4>Front End Developer</h4>
                        <p>
                            As a freelance front-end developer on Upwork for a
                            year, I've had the opportunity to help many clients
                            build beautiful and modern websites. Along the way,
                            I've learned essential skills like effective
                            communication, negotiation, and understanding client
                            needs. These experiences have enriched my expertise
                            and enabled me to deliver outstanding results.
                        </p>
                        <div className="skills">
                            <h4>Expertise:</h4>
                            <span>Javascript</span>
                            <span>React</span>
                            <span>SCSS</span>
                            <span>HTML</span>
                            <span>Figma</span>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Experience;
