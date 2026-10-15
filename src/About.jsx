import './index.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const translations = {
    en: {
        tabHome: "Home",
        tabAbout: "About me",
        tabWeb: "Web",
        tabApps: "Apps",
        tabGame: "Game Dev",
        tabGroup: "Group",
        title: "About me",
        contactTitle: "Contact",
        contactText: "Feel free to reach out for collaborations or just to say hi!",
        text: <>Hello, I'm Angeliki Simigdali (aka simigdalius).<br /><br />I am a final-year student at the Dept. of Information and Electronic Engineering (IHU). Having completed my coursework, I am currently working on my diploma thesis: "Design and implementation of a smart controller for people with motor disabilities", advancing my skills in Image Processing, Machine Learning, LLM integration, and GUI development.<br /><br />I am actively involved in Game Development. Participating in Game Jams has sharpened my problem-solving skills and ability to work under pressure. I also have experience in Web Development, Python, and microcontroller programming (ESP32).<br /><br />Through group projects, I have learned to collaborate effectively. Read more about my work in the respective folders and check out the source code on my GitHub!</>
    },
    el: {
        tabHome: "Αρχικη",
        tabAbout: "Σχετικα",
        tabWeb: "Web",
        tabApps: "Εφαρμογες",
        tabGame: "Παιχνιδια",
        tabGroup: "Ομαδικα",
        title: "Σχετικα με εμενα",
        contactTitle: "Επικοινωνια",
        contactText: "Μη διστάσετε να επικοινωνήσετε μαζί μου για συνεργασίες ή απλά για να πείτε ένα γεια!",
        text: <>Γεια, είμαι η Αγγελική Σιμιγδαλή (aka simigdalius).<br /><br />Είμαι τελειόφοιτη της Σχολής Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων (ΔΙΠΑΕ). Έχοντας ολοκληρώσει επιτυχώς όλα τα μαθήματα, εκπονώ τη διπλωματική μου εργασία με θέμα «Σχεδίαση και υλοποίηση έξυπνου χειριστηρίου για άτομα με κινητική αναπηρία», μέσω της οποίας εξελίσσω τις γνώσεις μου σε Image Processing, Machine Learning, ενσωμάτωση LLMs και ανάπτυξη GUI.<br /><br />Ασχολούμαι ενεργά με το Game Development. Η συμμετοχή μου σε Game Jams έχει οξύνει τις δεξιότητές μου και την αποτελεσματικότητά μου υπό πίεση. Επίσης, διαθέτω εμπειρία σε Web Development, Python και προγραμματισμό μικροελεγκτών (ESP32).<br /><br />Μέσα από ομαδικά projects έμαθα να συνεργάζομαι αποτελεσματικά. Διαβάστε αναλυτικότερα για τα projects μου στις αντίστοιχες καρτέλες και βρείτε τον πηγαίο κώδικα στο GitHub!</>
    }
};

function About({ setPage, lang, setLang }) {
    const t = translations[lang];

    return (
        <div className="folder_container">

            {/* MULTI-TAB NAVIGATION */}
            <div className="tabs_wrapper">
                <button className="folder_tab_inactive" onClick={() => setPage('home')}>{t.tabHome}</button>
                <button className="folder_tab_active" style={{ cursor: 'default' }}>{t.tabAbout}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('web')}>{t.tabWeb}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('app')}>{t.tabApps}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('gamedev')}>{t.tabGame}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('group')}>{t.tabGroup}</button>
            </div>

            <div className="folder_content">

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h1 className="title" style={{ fontSize: '3rem', margin: 0 }}>{t.title}</h1>
                    <span
                        className="lang_button"
                        onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
                        title={lang === 'el' ? 'Switch to English' : 'Αλλαγή σε Ελληνικά'}
                    >
                        {lang === 'el' ? '🇬🇧' : '🇬🇷'}
                    </span>
                </div>

                <p style={{ lineHeight: '1.6', margin: '0 0 40px 0', fontSize: '1.1rem' }}>{t.text}</p>

                {/* --- Το εσωτερικό κουτί Επικοινωνίας (με 2 στήλες) --- */}
                <div className="inner_contact_box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>

                    {/* Αριστερή Στήλη: Κείμενο και Εικονίδια */}
                    <div style={{ flex: '1 1 300px' }}>
                        <h2 className="title" style={{ marginTop: 0 }}>{t.contactTitle}</h2>
                        <p style={{ marginBottom: '20px' }}>{t.contactText}</p>

                        <div className="contact_icons" style={{ justifyContent: 'flex-start' }}>
                            <a href="https://github.com/simigdalius" target="_blank" rel="noreferrer" className="contact_link" title="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/aggelikh-simigdali-bb8b33443" target="_blank" rel="noreferrer" className="contact_link" title="LinkedIn"><FaLinkedin /></a>


                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aggelikhsimigdali@gmail.com" target="_blank" rel="noreferrer" className="contact_link" title="Email">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* Δεξιά Στήλη: Μίνι Gallery Φωτογραφιών (Δεν αλλάζει το ύψος του box) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '200px', flexShrink: 0 }}>



                        {/* 2η Σειρά (Working station & Εγώ) */}
                        <div style={{ display: 'flex', gap: '6px', width: '100%', height: '100px' }}>

                            <div className="gallery_frame" style={{ flex: 1, overflow: 'hidden', borderRadius: '3px' }}>
                                <img
                                    src="/egw.jpg"
                                    alt="Me"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', border: '1px solid var(--main-border-color)', borderRadius: '3px', opacity: 0.9 }}
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px dashed var(--main-border-color)', opacity: 0.6, fontSize: '0.9rem', fontFamily: "'Fira Code', monospace" }}>
                SYSTEM.ONLINE // © {new Date().getFullYear()} ANGELIKI SIMIGDALI // ALL SYSTEMS FUNCTIONAL.
            </div>
        </div >
    );
}

export default About;