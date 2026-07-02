import { useState } from 'react'
import { format } from 'date-fns';

function Form() {

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState([]);

    const handleAdd = () => {
        if (text.length === 0) {
            window.alert("Cannot add an empty note! Please write something first");
            return;
        }
        setNotes([...notes, { title, text, date }]);
        setText('')
        setTitle('')
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
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    placeholder="Title"
                />
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
                        <p className="note-title">{note.title}</p>
                        <p className="note-text">{note.text}</p>
                    </div>
                )}
            </div>

        </>
    )
}

export default Form
