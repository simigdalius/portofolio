import './index.css';
import { FaGithub, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaMicrochip, FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const translations = {
    en: {
        tabHome: "Home",
        tabAbout: "About me",
        tabWeb: "Web",
        tabApps: "Apps",
        tabGame: "Game Dev",
        tabGroup: "Group",
        title: "Group Projects",
        subtitle: "Collaborative works, hardware integrations, and team-based software engineering.",
        overview: "Overview:",
        collaborator: "Collaborator:",
        learned: "What we learned:",
        smarthomeTitle: "Smart Home IoT",
        smarthomeDesc: "Embedded systems project focusing on home automation and IoT hardware integration.",
        smarthomeLearn: "Hardware/software communication, programming microcontrollers, and processing sensor data.",
        cardTitle: "Card Game (REST API)",
        cardDesc: "A multiplayer card game logic implemented using a RESTful API architecture.",
        cardLearn: "Designing and consuming REST APIs, backend logic structuring, and asynchronous frontend integration.",
        brailleTitle: "Braille Keyboard",
        brailleDesc: "An accessibility hardware project designing a functional Braille keyboard interface.",
        brailleLearn: "Building accessibility-first tech, hardware prototyping, and working in a shared organization repository.",
        starTitle: "starculator",
        starDesc: "An astronomy and exoplanet utility tool designed to find transit times and update already existing ephemerides.",
        starLearn: "Handling astronomical data, implementing mathematical models for planetary transits, and building tools for scientific research."
    },
    el: {
        tabHome: "Αρχικη",
        tabAbout: "Σχετικα",
        tabWeb: "Web",
        tabApps: "Εφαρμογες",
        tabGame: "Παιχνιδια",
        tabGroup: "Ομαδικα",
        title: "Ομαδικα Project",
        subtitle: "Συνεργατικές εργασίες, ενσωμάτωση υλικού (hardware) και ομαδική ανάπτυξη λογισμικού.",
        overview: "Περιγραφή:",
        collaborator: "Συνεργάτης:",
        learned: "Τι μάθαμε:",
        smarthomeTitle: "Smart Home IoT",
        smarthomeDesc: "Πρότζεκτ ενσωματωμένων συστημάτων με εστίαση στον οικιακό αυτοματισμό και το IoT hardware.",
        smarthomeLearn: "Επικοινωνία hardware/software, προγραμματισμός μικροελεγκτών και επεξεργασία δεδομένων αισθητήρων.",
        cardTitle: "Card Game (REST API)",
        cardDesc: "Λογική ενός multiplayer παιχνιδιού καρτών, υλοποιημένη με αρχιτεκτονική RESTful API.",
        cardLearn: "Σχεδιασμός και χρήση REST APIs, δόμηση backend λογικής και ασύγχρονη ενσωμάτωση στο frontend.",
        brailleTitle: "Braille Keyboard",
        brailleDesc: "Ένα hardware project προσβασιμότητας για τον σχεδιασμό ενός λειτουργικού πληκτρολογίου Braille.",
        brailleLearn: "Δημιουργία τεχνολογιών προσβασιμότητας, hardware prototyping και εργασία σε κοινό repository οργανισμού.",
        starTitle: "starculator",
        starDesc: "Ένα εργαλείο αστρονομίας και εξωπλανητών, σχεδιασμένο για την εύρεση χρόνων διέλευσης και την ενημέρωση ήδη υπαρχουσών εφημερίδων.",
        starLearn: "Διαχείριση αστρονομικών δεδομένων, υλοποίηση μαθηματικών μοντέλων για πλανητικές διελεύσεις και δημιουργία εργαλείων επιστημονικής έρευνας."
    }
};

function Group({ setPage, lang, setLang }) {
    const t = translations[lang];

    return (
        <div className="folder_container">

            {/* MULTI-TAB NAVIGATION */}
            <div className="tabs_wrapper">
                <button className="folder_tab_inactive" onClick={() => setPage('home')}>{t.tabHome}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('about')}>{t.tabAbout}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('web')}>{t.tabWeb}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('app')}>{t.tabApps}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('gamedev')}>{t.tabGame}</button>
                <button className="folder_tab_active" style={{ cursor: 'default' }}>{t.tabGroup}</button>
            </div>

            <div className="folder_content">

                {/* Επικεφαλίδα και Σημαία */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h1 className="title" style={{ fontSize: '3rem', margin: 0 }}>{t.title}</h1>
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

                    {/* --- PROJECT 1: Smart Home IoT --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.smarthomeTitle}</h2>
                            <a href="https://github.com/mariach26/SmartHome" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.smarthomeDesc}</p>
                        <p><strong>{t.collaborator}</strong> <a href="https://github.com/mariach26" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'underline', textDecorationStyle: 'dashed' }}>Maria Chatzistamati</a></p>
                        <p><strong>{t.learned}</strong> {t.smarthomeLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaMicrochip title="ESP32 / Microcontrollers" />
                        </div>
                    </div>

                    {/* --- PROJECT 2: Card Game REST API --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.cardTitle}</h2>
                            <a href="https://github.com/simigdalius/CardGame" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.cardDesc}</p>
                        <p><strong>{t.collaborator}</strong> <a href="https://github.com/mariakon261" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'underline', textDecorationStyle: 'dashed' }}>Maria Konstantinidou</a></p>
                        <p><strong>{t.learned}</strong> {t.cardLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaPhp title="PHP" /> <IoLogoJavascript title="JavaScript" /> <FaReact title="React" /> <FaHtml5 title="HTML5" /> <FaCss3Alt title="CSS3" />
                        </div>
                    </div>

                    {/* --- PROJECT 3: Braille Keyboard --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.brailleTitle}</h2>
                            <a href="https://github.com/aggeliki-maria-uni-projects/braille-keyboard-project" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.brailleDesc}</p>
                        <p><strong>{t.collaborator}</strong> <a href="https://github.com/mariakon261" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'underline', textDecorationStyle: 'dashed' }}>Maria Konstantinidou</a></p>
                        <p><strong>{t.learned}</strong> {t.brailleLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaMicrochip title="Hardware / Microcontrollers" />
                        </div>
                    </div>

                    {/* --- PROJECT 4: starculator --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.starTitle}</h2>
                            <a href="https://github.com/simigdalius/starculator" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}>
                                <FaGithub />
                            </a>
                        </div>

                        <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.starDesc}</p>
                        <p><strong>{t.collaborator}</strong> <a href="https://github.com/nickyGeorgiadou" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'underline', textDecorationStyle: 'dashed' }}>Nicky Georgiadou</a></p>
                        <p><strong>{t.learned}</strong> {t.starLearn}</p>

                        <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '20px', justifyContent: 'flex-start' }}>
                            <FaPython title="Python" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Group;