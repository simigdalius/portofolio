import { useState } from 'react';
import About from './About';
import Webd from './Webd';     // <-- Προσθήκη
import AppU from './appU';     // <-- Προσθήκη (Το Component να λέγεται AppU με κεφαλαίο)
import Group from './group';   // <-- Προσθήκη (Το Component να λέγεται Group)
import GameD from './gameD';   // <-- Προσθήκη
import './index.css';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaMicrochip, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFlask, SiGodotengine } from "react-icons/si";

const translations = {
  en: {
    aboutTitle: "About me",
    aboutText: <>Hello, I'm Angeliki Simigdali (aka simigdalius).<br /><br /> I am a student at Information & Electronic Engineering (IHU).</>,
    contactTitle: "Contact",
    portfolioTitle: "Portofolio",
    readMore: "read more >>",
    webTitle: "WEB DEVELOPMENT",
    appTitle: "APPLICATIONS",
    groupTitle: "GROUP PROJECTS",
    gameTitle: "GAME DEVELOPMENT"
  },
  el: {
    aboutTitle: "Σχετικα με εμενα",
    aboutText: <>Γεια, είμαι η Αγγελική Σιμιγδαλή (aka simigdalius).<br /><br />Είμαι φοιτήτρια στην Μηχανικών Πληροφορικής και ηλεκτρονικών συστημάτων(ΔΙΠΑΕ).</>,
    contactTitle: "Επικοινωνια",
    portfolioTitle: "Πορτοφολιο",
    readMore: "περισσοτερα >>",
    webTitle: "ΑΝΑΠΤΥΞΗ WEB",
    appTitle: "ΕΦΑΡΜΟΓΕΣ",
    groupTitle: "ΟΜΑΔΙΚΑ PROJECT",
    gameTitle: "ΑΝΑΠΤΥΞΗ ΠΑΙΧΝΙΔΙΩΝ"
  }
};

function App() {
  const [page, setPage] = useState('home');
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  // Ο "τροχονόμος" των σελίδων
  if (page === 'about') return <About setPage={setPage} />;
  if (page === 'web') return <Webd setPage={setPage} />;
  if (page === 'app') return <AppU setPage={setPage} />;
  if (page === 'group') return <Group setPage={setPage} />;
  if (page === 'gamedev') return <GameD setPage={setPage} />;

  return (
    <div className="portfolio_container">

      <div className="left_column">
        <div className="bento_box clickable_box" style={{ flex: 1, display: 'flex', flexDirection: 'column' }} onClick={() => setPage('about')}>
          <h2 className="title" style={{ marginTop: 0 }}>{t.aboutTitle}</h2>
          <p style={{ flex: 1, lineHeight: '1.4' }}>{t.aboutText}</p>
          <span className="read_more" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>{t.readMore}</span>
        </div>

        <div className="bento_box" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="title" style={{ marginTop: 0 }}>{t.contactTitle}</h2>
          <div className="contact_icons">
            <a href="https://github.com/simigdalius" target="_blank" rel="noreferrer" className="contact_link" title="GitHub"><FaGithub /></a>
            <a href="#" target="_blank" rel="noreferrer" className="contact_link" title="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:your_email@gmail.com" className="contact_link" title="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="right_column">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 className="title" style={{ fontSize: '3rem', margin: 0 }}>{t.portfolioTitle}</h1>
          <span className="lang_button" onClick={() => setLang(lang === 'el' ? 'en' : 'el')}>
            {lang === 'el' ? '🇬🇧' : '🇬🇷'}
          </span>
        </div>

        <div className="projects_grid">
          {/* Τώρα έχουν setPage(...) αντί για goToPage */}
          <div className="bento_box project_web clickable_box" onClick={() => setPage('web')}>
            <h3 className="game_title" style={{ marginTop: 0 }}>{t.webTitle}</h3>
            <p style={{ margin: 0 }}>GitPets, machineQuestioning...</p>
            <div className="tech_icons">
              <FaPython title="Python" /> <SiFlask title="Flask" /> <FaCss3Alt title="CSS3" /> <FaReact title="React" /> <IoLogoJavascript title="JavaScript" />
            </div>
            <span className="read_more" style={{ alignSelf: 'flex-end' }}>{t.readMore}</span>
          </div>

          <div className="bento_box project_app clickable_box" onClick={() => setPage('app')}>
            <h3 className="game_title" style={{ marginTop: 0 }}>{t.appTitle}</h3>
            <p style={{ margin: 0 }}>HorusAcces, file comparison...</p>
            <div className="tech_icons">
              <FaPython title="Python" /> <FaJava title="Java Swing" />
            </div>
            <span className="read_more" style={{ alignSelf: 'flex-end' }}>{t.readMore}</span>
          </div>

          <div className="bento_box project_gamedev clickable_box" onClick={() => setPage('gamedev')}>
            <h3 className="game_title" style={{ marginTop: 0 }}>{t.gameTitle}</h3>
            <p style={{ margin: 0 }}>ice-scream, Robin Boom...</p>
            <div className="tech_icons">
              <SiGodotengine title="Godot" />
            </div>
            <span className="read_more" style={{ alignSelf: 'flex-end' }}>{t.readMore}</span>
          </div>

          <div className="bento_box project_gfx clickable_box" onClick={() => setPage('group')}>
            <h3 className="game_title" style={{ marginTop: 0 }}>{t.groupTitle}</h3>
            <p style={{ margin: 0 }}>smart home IoT, card game...</p>
            <div className="tech_icons">
              <FaPhp title="PHP" /> <FaHtml5 title="HTML" /> <FaCss3Alt title="CSS" /> <IoLogoJavascript title="JavaScript" /> <FaReact title="React" /> <FaMicrochip title="ESP32" />
            </div>
            <span className="read_more" style={{ alignSelf: 'flex-end' }}>{t.readMore}</span>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px dashed var(--main-border-color)', opacity: 0.6, fontSize: '0.9rem', fontFamily: "'Fira Code', monospace" }}>
        SYSTEM.ONLINE // © {new Date().getFullYear()} ANGELIKI SIMIGDALI // ALL SYSTEMS FUNCTIONAL.
      </div>

    </div>
  )
}

export default App;