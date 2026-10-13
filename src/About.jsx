import './index.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

function About({ setPage }) {
    return (
        <div className="folder_container">

            {/* Το πάνω Tab (Home) */}
            <button className="folder_tab" onClick={() => setPage('home')}>
                Home
            </button>

            {/* Το Κυρίως Κουτί */}
            <div className="folder_content">
                <h1 className="title" style={{ fontSize: '3rem', marginTop: 0, marginBottom: '30px' }}>About me</h1>

                <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                    Hello, I'm Angeliki Simigdali (aka simigdalius).<br /><br />
                    I am a student atbInformation & Electronic Engineering (IHU), blending my passion for software.
                    <br /><br />
                    I build 2D pixel-art games in Godot, develop interactive web apps like GitPets using Python/Flask, and write tools for data matching and exoplanet transit modeling.
                    <br /><br />
                    Currently, I'm exploring computer vision, developing an AI-based accessibility game controller using facial gesture recognition.
                </p>

                {/* Εσωτερικό Κουτί Επικοινωνίας (Contact) */}
                <div className="inner_contact_box">
                    <h2 className="title" style={{ marginTop: 0 }}>Contact</h2>
                    <p>Feel free to reach out for collaborations or just to say hi!</p>

                    <div className="contact_icons" style={{ justifyContent: 'flex-start' }}>
                        <a href="https://github.com/simigdalius" target="_blank" rel="noreferrer" className="contact_link" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="contact_link" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:your_email@gmail.com" className="contact_link" title="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;