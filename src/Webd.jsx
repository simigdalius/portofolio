import './index.css';

function Webd({ setPage }) {
    return (
        <div className="folder_container">
            <button className="folder_tab" onClick={() => setPage('home')}>Home</button>
            <div className="folder_content">
                <h1 className="title" style={{ fontSize: '3rem', marginTop: 0, marginBottom: '30px' }}>Web Development</h1>
                <p>Here you will find all my web projects, including:</p>
                <ul>
                    <li><strong>GitPets:</strong> A gamified GitHub activity tracking web app built with Python and Flask.</li>
                    <li><strong>machineQuestioning:</strong> A retro-styled web app for interactive machine learning quizzes.</li>
                    <li><strong>portofolio:</strong> This very retro-minimal React website!</li>
                </ul>
            </div>
        </div>
    );
}

export default Webd;