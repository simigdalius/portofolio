import './index.css';
import { FaGithub, FaItchIo } from "react-icons/fa6";
import { SiGodotengine } from "react-icons/si";

const translations = {
    en: {
        tabHome: "Home",
        tabAbout: "About me",
        tabWeb: "Web",
        tabApps: "Apps",
        tabGame: "Game Dev",
        tabGroup: "Group",
        title: "Game Development",
        subtitle: "A collection of my 2D and 3D games, pixel art projects, and interactive experiences.",
        overview: "Overview:",
        learned: "What I learned:",
        doomTitle: "Doom Fest",
        doomDesc: "An action-packed card arcade game experience with intense gameplay elements.",
        doomLearn: "Working in 2D, managing resources, writing turn-based scripts, drawing assets, creating animations, and implementing spawners and scoring systems.",
        iceTitle: "Ice-Scream",
        iceDesc: "A 2D point-and-click adventure.",
        iceLearn: "2D game development, handling resources, utilizing timers, and creating custom hand-drawn assets and animations.",
        robinTitle: "Robin Boom",
        robinDesc: "An explosive, 2D action top-down shooter.",
        robinLearn: "2D game physics, bullet mechanics, collision detection, drawing assets and animations, and crafting an engaging story.",
        lastTitle: "Last Down / Last Down 3D",
        lastDesc: "A challenging game concept developed and explored in both 2D and 3D environments.",
        lastLearn: "Implementing inventory systems, 3D game mechanics, bullet physics, collision detection, and story creation."
    },
    el: {
        tabHome: "Αρχικη",
        tabAbout: "Σχετικα",
        tabWeb: "Web",
        tabApps: "Εφαρμογες",
        tabGame: "Παιχνιδια",
        tabGroup: "Ομαδικα",
        title: "Αναπτυξη Παιχνιδιων",
        subtitle: "Μια συλλογή από 2D και 3D παιχνίδια, pixel art projects και διαδραστικές εμπειρίες.",
        overview: "Περιγραφή:",
        learned: "Τι έμαθα:",
        doomTitle: "Doom Fest",
        doomDesc: "Μια γεμάτη δράση εμπειρία arcade παιχνιδιού καρτών με έντονα στοιχεία gameplay.",
        doomLearn: "Εργασία σε 2D, διαχείριση πόρων (resources), συγγραφή turn-based scripts, σχεδιασμός assets/animations, και υλοποίηση spawners και συστημάτων βαθμολογίας.",
        iceTitle: "Ice-Scream",
        iceDesc: "Μια 2D point-and-click περιπέτεια.",
        iceLearn: "Ανάπτυξη 2D παιχνιδιών, διαχείριση πόρων, χρήση timers, και δημιουργία custom assets και animations.",
        robinTitle: "Robin Boom",
        robinDesc: "Ένα εκρηκτικό 2D action top-down shooter.",
        robinLearn: "Φυσική 2D παιχνιδιών, μηχανικές βλημάτων (bullets), ανίχνευση συγκρούσεων (collisions), σχεδιασμός assets/animations και δημιουργία ιστορίας.",
        lastTitle: "Last Down / Last Down 3D",
        lastDesc: "Ένα απαιτητικό concept παιχνιδιού που αναπτύχθηκε και εξερευνήθηκε τόσο σε 2D όσο και σε 3D περιβάλλοντα.",
        lastLearn: "Υλοποίηση συστημάτων inventory, μηχανικές 3D παιχνιδιών, φυσική βλημάτων, ανίχνευση συγκρούσεων και δημιουργία ιστορίας."
    }
};

function GameD({ setPage, lang, setLang }) {
    const t = translations[lang];

    return (
        <div className="folder_container">

            {/* MULTI-TAB NAVIGATION */}
            <div className="tabs_wrapper">
                <button className="folder_tab_inactive" onClick={() => setPage('home')}>{t.tabHome}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('about')}>{t.tabAbout}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('web')}>{t.tabWeb}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('app')}>{t.tabApps}</button>
                <button className="folder_tab_active" style={{ cursor: 'default' }}>{t.tabGame}</button>
                <button className="folder_tab_inactive" onClick={() => setPage('group')}>{t.tabGroup}</button>
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

                    {/* --- PROJECT 1: Doom Fest --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.doomTitle}</h2>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://simigdalius.itch.io/doom-fest" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}><FaItchIo /></a>
                                <a href="https://github.com/simigdalius/DoomFest" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}><FaGithub /></a>
                            </div>
                        </div>

                        {/* ΠΡΟΣΘΗΚΗ: className="game_row" */}
                        <div className="game_row" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ flex: 1 }}>
                                <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.doomDesc}</p>
                                <p><strong>{t.learned}</strong> {t.doomLearn}</p>
                                <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '15px', justifyContent: 'flex-start' }}>
                                    <SiGodotengine title="Godot" />
                                </div>
                            </div>

                            <a href="https://simigdalius.itch.io/doom-fest" target="_blank" rel="noreferrer" className="game_thumbnail_link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'var(--accent-color)', flexShrink: 0 }}>
                                <img src="/doom-fest.png" alt="Doom Fest" style={{ width: '120px', height: '120px', objectFit: 'cover', border: '2px solid var(--main-border-color)', borderRadius: '8px', opacity: 0.9 }} />
                                <span style={{ marginTop: '8px', fontFamily: "'Fira Code', monospace", fontWeight: 'bold', fontSize: '0.9rem' }}>&gt; play</span>
                            </a>
                        </div>
                    </div>

                    {/* --- PROJECT 2: Ice-Scream --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.iceTitle}</h2>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://simigdalius.itch.io/ice-scream" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}><FaItchIo /></a>
                                <a href="https://github.com/simigdalius/ice-scream" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}><FaGithub /></a>
                            </div>
                        </div>

                        {/* ΠΡΟΣΘΗΚΗ: className="game_row" */}
                        <div className="game_row" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ flex: 1 }}>
                                <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.iceDesc}</p>
                                <p><strong>{t.learned}</strong> {t.iceLearn}</p>
                                <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '15px', justifyContent: 'flex-start' }}>
                                    <SiGodotengine title="Godot" />
                                </div>
                            </div>

                            <a href="https://simigdalius.itch.io/ice-scream" target="_blank" rel="noreferrer" className="game_thumbnail_link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'var(--accent-color)', flexShrink: 0 }}>
                                <img src="/ice-scream.png" alt="Ice-Scream" style={{ width: '120px', height: '120px', objectFit: 'cover', border: '2px solid var(--main-border-color)', borderRadius: '8px', opacity: 0.9 }} />
                                <span style={{ marginTop: '8px', fontFamily: "'Fira Code', monospace", fontWeight: 'bold', fontSize: '0.9rem' }}>&gt; play</span>
                            </a>
                        </div>
                    </div>

                    {/* --- PROJECT 3: Robin Boom --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.robinTitle}</h2>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://simigdalius.itch.io/robin-boom" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}><FaItchIo /></a>
                                <a href="https://github.com/simigdalius" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}><FaGithub /></a>
                            </div>
                        </div>

                        {/* ΠΡΟΣΘΗΚΗ: className="game_row" */}
                        <div className="game_row" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ flex: 1 }}>
                                <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.robinDesc}</p>
                                <p><strong>{t.learned}</strong> {t.robinLearn}</p>
                                <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '15px', justifyContent: 'flex-start' }}>
                                    <SiGodotengine title="Godot" />
                                </div>
                            </div>

                            <a href="https://simigdalius.itch.io/robin-boom" target="_blank" rel="noreferrer" className="game_thumbnail_link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'var(--accent-color)', flexShrink: 0 }}>
                                <img src="/robin-boom.png" alt="Robin Boom" style={{ width: '120px', height: '120px', objectFit: 'cover', border: '2px solid var(--main-border-color)', borderRadius: '8px', opacity: 0.9 }} />
                                <span style={{ marginTop: '8px', fontFamily: "'Fira Code', monospace", fontWeight: 'bold', fontSize: '0.9rem' }}>&gt; play</span>
                            </a>
                        </div>
                    </div>

                    {/* --- PROJECT 4: Last Down & Last Down 3D --- */}
                    <div className="bento_box" style={{ cursor: 'default' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--main-border-color)', paddingBottom: '10px', marginBottom: '15px' }}>
                            <h2 className="game_title" style={{ margin: 0, color: 'var(--accent-color)' }}>{t.lastTitle}</h2>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://simigdalius.itch.io" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}><FaItchIo /></a>
                                <a href="https://github.com/simigdalius/last-down" target="_blank" rel="noreferrer" className="contact_link" style={{ fontSize: '1.8rem' }}><FaGithub /></a>
                            </div>
                        </div>

                        {/* ΠΡΟΣΘΗΚΗ: className="game_row" */}
                        <div className="game_row" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ flex: 1 }}>
                                <p style={{ marginTop: 0 }}><strong>{t.overview}</strong> {t.lastDesc}</p>
                                <p><strong>{t.learned}</strong> {t.lastLearn}</p>
                                <div className="tech_icons" style={{ fontSize: '1.8rem', marginTop: '15px', justifyContent: 'flex-start' }}>
                                    <SiGodotengine title="Godot" />
                                </div>
                            </div>

                            <a href="https://simigdalius.itch.io" target="_blank" rel="noreferrer" className="game_thumbnail_link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'var(--accent-color)', flexShrink: 0 }}>
                                <img src="/last-down.png" alt="Last Down" style={{ width: '120px', height: '120px', objectFit: 'cover', border: '2px solid var(--main-border-color)', borderRadius: '8px', opacity: 0.9 }} />
                                <span style={{ marginTop: '8px', fontFamily: "'Fira Code', monospace", fontWeight: 'bold', fontSize: '0.9rem' }}>&gt; play</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GameD;