
import './index.css';

// ΠΡΟΣΟΧΗ: Το όνομα της συνάρτησης είναι Group (με κεφαλαίο)
function Group({ setPage }) {
    return (
        <div className="folder_container">
            <button className="folder_tab" onClick={() => setPage('home')}>Home</button>
            <div className="folder_content">
                <h1 className="title" style={{ fontSize: '3rem', marginTop: 0, marginBottom: '30px' }}>Group Projects</h1>
                <p>Collaborative works and hardware integrations:</p>
                <ul>
                    <li><strong>Smart Home IoT:</strong> Embedded systems coding using C/C++ on ESP32 microcontrollers.</li>
                    <li><strong>Braille Keyboard:</strong> Accessibility hardware project.</li>
                    <li><strong>Card Game:</strong> Group logic/game project.</li>
                </ul>
            </div>
        </div>
    );
}

export default Group;