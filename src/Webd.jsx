import './index.css';
import { FaGithub, FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { SiFlask, SiSqlite } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const translations = {
    en: {
        tabHome: "Home",
        tabAbout: "About me",
        tabWeb: "Web",
        tabApps: "Apps",
        tabGame: "Game Dev",
        tabGroup: "Group",
        title: "Web Development",
        subtitle: "Detailed breakdown of my web projects, the tech stack I used, and what I learned from each one.",
        overview: "Overview:",
        learned: "What I learned:",
        gitpetsDesc: "A gamified GitHub activity tracking web app that displays a digital pet based on your commits.",
        gitpetsLearn: "Integrating APIs, handling backend logic, and creating a fun user experience utilizing server-side rendering.",
        mqDesc: "A retro-styled web app for interactive machine learning quizzes.",
        mqLearn: "Managing SQLite database storage, implementing backend routing, and designing a cohesive retro-themed UI layout.",
        portDesc: "This very retro-minimal, single-page React website with a hacker/terminal aesthetic.",
        portLearn: "Component-based state management (useState) in React, responsive CSS Grid/Flexbox layouts, and advanced CSS animations (CRT effects, animated grid backgrounds)."
    },
    el: {
        tabHome: "Αρχικη",
        tabAbout: "Σχετικα",
        tabWeb: "Web",
        tabApps: "Εφαρμογες",
        tabGame: "Παιχνιδια",
        tabGroup: "Ομαδικα",
        title: "Αναπτυξη Web",
        subtitle: "Αναλυτική παρουσίαση των web projects μου, των τεχνολογιών που χρησιμοποίησα και τι αποκόμισα από το καθένα.",
        overview: "Περιγραφή:",
        learned: "Τι έμαθα:",
        gitpetsDesc: "Ένα gamified web app παρακολούθησης δραστηριότητας στο GitHub που εμφανίζει ένα ψηφιακό κατοικίδιο βάσει των commits σας.",
        gitpetsLearn: "Ενσωμάτωση APIs, διαχείριση backend λογικής και δημιουργία διασκεδαστικής εμπειρίας χρήστη με server-side rendering.",
        mqDesc: "Ένα ρετρό web app για διαδραστικά κουίζ μηχανικής μάθησης.",
        mqLearn: "Διαχείριση αποθήκευσης σε βάση δεδομένων SQLite, υλοποίηση backend routing και σχεδιασμός ενός συνεπούς retro UI.",
        portDesc: "Αυτή ακριβώς η retro-minimal, single-page React ιστοσελίδα με hacker/terminal αισθητική.",
        portLearn: "Διαχείριση κατάστασης με components (useState) στο React, responsive CSS Grid/Flexbox layouts, και προχωρημένα CSS animations (CRT effects, κινούμενα background)."
    }
};

function Webd({ setPage, lang, setLang }) {
    const t = translations[lang];

    return (
        <div className="folder_container">

            {/* MULTI-TAB NAVIGATION */}
            <div className="tabs_wrapper">
                <button className="folder_tab_inactive" onClick={() => setPage('home')}>{t.tabHome}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('about')}>{t.tabAbout}</button>
                <button className="folder_tab_active" style={{ cursor: 'default' }}>{t.tabWeb}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('app')}>{t.tabApps}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('gamedev')}>{t.tabGame}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('group')}>{t.tabGroup}</button>
            </div>

            <div className="folder_content">

                {/* Επικεφαλίδα και Σημαία στην ίδια ευθεία */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h1 className="title" style={{ fontSize: '3rem', margin: 0 }}>{t.title}</h1>
                    <span
                        className="lang_button"
                        onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
                        title={lang === 'el' ? 'Switch to English' : 'Αλλαγή σε Ελληνικά'}
                    >
                        {lang === 'el' ? 'GB' : '🇬🇷'}
                    </span>
                </div>

                <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>{t.subtitle}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                    {/* --- PROJECT 1: GitPets --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>GitPets</h2>
                            <a href="https://github.com/simigdalius/GitPets" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.gitpetsDesc}</p>
                        <p><strong>{t.learned}</strong> {t.gitpetsLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaPython title="Python" /> <SiFlask title="Flask" /> <FaHtml5 title="HTML5" /> <FaCss3Alt title="CSS3" />
                        </div>
                    </div>

                    {/* --- PROJECT 2: machineQuestioning --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>machine Questioning</h2>
                            <a href="https://github.com/simigdalius/machineQuestioning" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.mqDesc}</p>
                        <p><strong>{t.learned}</strong> {t.mqLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaPython title="Python" /> <SiFlask title="Flask" /> <SiSqlite title="SQLite" />
                        </div>
                    </div>

                    {/* --- PROJECT 3: portofolio --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>portofolio</h2>
                            <a href="https://github.com/simigdalius/portofolio" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.portDesc}</p>
                        <p><strong>{t.learned}</strong> {t.portLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaReact title="React" /> <IoLogoJavascript title="JavaScript" /> <FaCss3Alt title="CSS3" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Webd;