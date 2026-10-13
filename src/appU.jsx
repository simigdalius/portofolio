import './index.css';

// ΠΡΟΣΟΧΗ: Το όνομα της συνάρτησης είναι AppU (με κεφαλαίο)
function AppU({ setPage }) {
    return (
        <div className="folder_container">
            <button className="folder_tab" onClick={() => setPage('home')}>Home</button>
            <div className="folder_content">
                <h1 className="title" style={{ fontSize: '3rem', marginTop: 0, marginBottom: '30px' }}>Applications</h1>
                <p>My desktop and mobile application projects:</p>
                <ul>
                    <li><strong>starcalator:</strong> Astronomy/exoplanet utility.</li>
                    <li><strong>File Comparison (Data Matcher):</strong> A Python desktop app using CustomTkinter and OpenPyXL to cross-reference datasets.</li>
                    <li><strong>HorusAcces:</strong> Custom application logic.</li>
                    <li><strong>Planet Simulation & Restaurant Management:</strong> Additional Java/Python projects.</li>
                </ul>
            </div>
        </div>
    );
}

export default AppU;