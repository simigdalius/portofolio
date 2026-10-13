import './index.css';

// ΠΡΟΣΟΧΗ: Το όνομα της συνάρτησης είναι GameD (με κεφαλαίο)
function GameD({ setPage }) {
    return (
        <div className="folder_container">
            <button className="folder_tab" onClick={() => setPage('home')}>Home</button>
            <div className="folder_content">
                <h1 className="title" style={{ fontSize: '3rem', marginTop: 0, marginBottom: '30px' }}>Game Development</h1>
                <p>I build 2D games and write custom game controllers:</p>
                <ul>
                    <li><strong>ice-scream:</strong> A 2D retro pixel art game.</li>
                    <li><strong>Robin Boom, doomFest, lastdown:</strong> More Godot engine projects.</li>
                    <li><strong>Accessibility Game Controller:</strong> An AI-based controller using computer vision and facial gesture recognition!</li>
                </ul>
            </div>
        </div>
    );
}

export default GameD;