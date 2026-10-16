import './index.css';
import { FaGithub, FaPython, FaJava } from "react-icons/fa6";
import { SiGodotengine } from "react-icons/si"; // Προσθήκη για το Egg Boil App
import { SiSqlite } from "react-icons/si";

const translations = {
    en: {
        tabHome: "Home",
        tabAbout: "About me",
        tabWeb: "Web",
        tabApps: "Apps",
        tabGame: "Game Dev",
        tabGroup: "Group",
        title: "Applications",
        subtitle: "Detailed breakdown of my desktop and mobile applications, the tech stack I used, and what I learned.",
        overview: "Overview:",
        learned: "What I learned:",
        horusTitle: "HorusAcces",
        horusDesc: "Design and implementation of a smart controller for people with motor disabilities.",
        horusLearn: "Image Processing, Machine Learning, LLM integration, and GUI development.",
        fileCompTitle: "File Comparison",
        fileCompDesc: "A desktop application built to match alphanumeric records between Excel and PDF files.",
        fileCompLearn: "Building graphical user interfaces (GUI) with CustomTkinter, and extracting/cross-referencing data using OpenPyXL and pdfplumber.",
        planetTitle: "Planet Simulation",
        planetDesc: "An interactive simulation of planetary systems.",
        planetLearn: "Physics simulations, 2D animation, and Object-Oriented Programming (classes).",
        restTitle: "Restaurant Management",
        restDesc: "A comprehensive and robust restaurant management system.",
        restLearn: "Working with Java Swing and designing scalable management architectures.",
        eggTitle: "Egg Boil App",
        eggDesc: "A mobile application designed to help you perfectly boil eggs.",
        eggLearn: "Managing alarms, push notifications, countdown timers, and mobile app development for smartphones using the Godot engine."
    },
    el: {
        tabHome: "Αρχικη",
        tabAbout: "Σχετικα",
        tabWeb: "Web",
        tabApps: "Εφαρμογες",
        tabGame: "Παιχνιδια",
        tabGroup: "Ομαδικα",
        title: "Εφαρμογες",
        subtitle: "Αναλυτική παρουσίαση των εφαρμογών (desktop & mobile) που έχω αναπτύξει, των τεχνολογιών που χρησιμοποίησα και τι αποκόμισα.",
        overview: "Περιγραφή:",
        learned: "Τι έμαθα:",
        horusTitle: "HorusAcces",
        horusDesc: "Σχεδίαση και υλοποίηση έξυπνου χειριστηρίου για άτομα με κινητική αναπηρία.",
        horusLearn: "Image Processing, Machine Learning, ενσωμάτωση LLMs και ανάπτυξη GUI.",
        fileCompTitle: "File Comparison",
        fileCompDesc: "Μια desktop εφαρμογή σχεδιασμένη για την αντιστοίχιση αλφαριθμητικών εγγραφών μεταξύ αρχείων Excel και PDF.",
        fileCompLearn: "Δημιουργία γραφικών διεπαφών χρήστη (GUI) με το CustomTkinter, καθώς και εξαγωγή/διασταύρωση δεδομένων χρησιμοποιώντας OpenPyXL και pdfplumber.",
        planetTitle: "Planet Simulation",
        planetDesc: "Μια διαδραστική προσομοίωση πλανητικών συστημάτων.",
        planetLearn: "Προσομοιώσεις φυσικής, 2D animation και αντικειμενοστραφής προγραμματισμός (κλάσεις).",
        restTitle: "Restaurant Management",
        restDesc: "Ολοκληρωμένο σύστημα διαχείρισης εστιατορίου.",
        restLearn: "Ανάπτυξη UI με Java Swing και σχεδιασμός συστημάτων διαχείρισης.",
        eggTitle: "Egg Boil App",
        eggDesc: "Μια εφαρμογή για κινητά που σας βοηθά στο τέλειο βράσιμο αυγών.",
        eggLearn: "Διαχείριση ειδοποιήσεων (alarms), χρονόμετρα αντίστροφης μέτρησης και ανάπτυξη εφαρμογών για smartphones με τη μηχανή Godot."
    }
};

function AppU({ setPage, lang, setLang }) {
    const t = translations[lang];

    return (
        <div className="folder_container">

            {/* MULTI-TAB NAVIGATION */}
            <div className="tabs_wrapper">
                <button className="folder_tab_inactive" onClick={() => setPage('home')}>{t.tabHome}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('about')}>{t.tabAbout}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('web')}>{t.tabWeb}</button>
                <button className="folder_tab_active" style={{ cursor: 'default' }}>{t.tabApps}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('gamedev')}>{t.tabGame}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('group')}>{t.tabGroup}</button>
            </div>

            <div className="folder_content">

                {/* Επικεφαλίδα και Σημαία */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h1 className="title portfolio_main_title" style={{ fontSize: '3rem', margin: 0 }}>{t.title}</h1>
                    <span
                        className="lang_button"
                        onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
                        title={lang === 'el' ? 'Switch to English' : 'Αλλαγή σε Ελληνικά'}
                    >
                        {lang === 'el' ? '🇬🇧' : '🇬🇷'}
                    </span>
                </div>

                <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>{t.subtitle}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                    {/* --- PROJECT 1: HorusAcces --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.horusTitle}</h2>
                            <a href="https://github.com/simigdalius/HorusAccess" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.horusDesc}</p>
                        <p><strong>{t.learned}</strong> {t.horusLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaPython title="Python" /><SiSqlite title="SQLite" />
                        </div>
                    </div>

                    {/* --- PROJECT 2: File Comparison --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.fileCompTitle}</h2>
                            <a href="https://github.com/simigdalius/FileComparison" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.fileCompDesc}</p>
                        <p><strong>{t.learned}</strong> {t.fileCompLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaPython title="Python" />
                        </div>
                    </div>

                    {/* --- PROJECT 3: Planet Simulation --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.planetTitle}</h2>
                            <a href="https://github.com/simigdalius/PlanetSim" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.planetDesc}</p>
                        <p><strong>{t.learned}</strong> {t.planetLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaPython title="Python" />
                        </div>
                    </div>

                    {/* --- PROJECT 4: Restaurant Management --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.restTitle}</h2>
                            <a href="https://github.com/simigdalius/restaurantManagment" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.restDesc}</p>
                        <p><strong>{t.learned}</strong> {t.restLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaJava title="Java" />
                        </div>
                    </div>

                    {/* --- PROJECT 5: Egg Boil App --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.eggTitle}</h2>
                            <a href="https://github.com/simigdalius/eggboiledapp" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.eggDesc}</p>
                        <p><strong>{t.learned}</strong> {t.eggLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <SiGodotengine title="Godot" />
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px dashed var(--main-border-color)', opacity: 0.6, fontSize: '0.9rem', fontFamily: "'Fira Code', monospace" }}>
                SYSTEM.ONLINE // © {new Date().getFullYear()} ANGELIKI SIMIGDALI // ALL SYSTEMS FUNCTIONAL.
            </div>
        </div>
    );
}

export default AppU;