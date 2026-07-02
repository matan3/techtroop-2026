import { useState } from 'react'
import { format } from 'date-fns';

function Form() {

    const [text, setText] = useState('');
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState([]);

    const handleAdd = () => {
        setNotes([...notes, { text, date }]);
        setText('')
    }

    const handleDelete = index => {
        const isConfirmed = window.confirm("Are you sure you want to delete your note?");
        if (!isConfirmed) return;
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    }

    return (
        <>
            <div className="form-container">
                <textarea
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                        setDate(format(new Date(), "MMM do h:mm a"))
                    }}
                    rows={6}
                    placeholder="Your note..."
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <div className="notes-grid">
                {notes.map((note, index) =>
                    <div key={index} className="note-card">
                        <button className="delete-btn" onClick={() => handleDelete(index)}>
                            &times;
                        </button>
                        <small className="note-date">{note.date}</small>
                        <p className="note-text">{note.text}</p>
                    </div>
                )}
            </div>

        </>
    )
}

export default Form
