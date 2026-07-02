import { useState } from 'react'
import { format } from 'date-fns';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Text } from '@mantine/core';

function Form() {

    const [opened, { open, close }] = useDisclosure(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState([]);

    const handleNoteClick = (note, index) => {
        setSelectedNote({ ...note });
        setSelectedIndex(index);
        open();
    };

    const handleAdd = () => {
        if (text.length === 0) {
            window.alert("Cannot add an empty note! Please write something first");
            return;
        }
        setNotes([...notes, { title, text, date, updatedDate: null }]);
        setText('')
        setTitle('')
    }

    const handleUpdate = () => {
        if (!selectedNote) return;
        const updatedNotes = [...notes];
        updatedNotes[selectedIndex] = {
            ...selectedNote,
            updatedDate: format(new Date(), "MMM do h:mm a")
        };
        setNotes(updatedNotes);
        close();
    };

    const handleDelete = (e, index) => {
        e.stopPropagation();
        const isConfirmed = window.confirm("Are you sure you want to delete your note?");
        if (!isConfirmed) return;
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    }

    function autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                withCloseButton={true}
                centered
            >
                <input
                    className="note-title modal-input-title"
                    value={selectedNote?.title || ''}
                    onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })}
                />
                <textarea
                    className="note-text modal-textarea-text"
                    value={selectedNote?.text || ''}
                    onChange={(e) => setSelectedNote({ ...selectedNote, text: e.target.value })}
                    onInput={(e) => autoResize(e.target)}
                    rows={1}
                />
                <button className="update-btn" onClick={handleUpdate}>
                    Update
                </button>
            </Modal>

            <div className="form-container">
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    placeholder="Title"
                    maxLength={200}
                />
                <textarea
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                        setDate(format(new Date(), "MMM do h:mm a"))
                    }}
                    rows={1}
                    placeholder="Your note..."
                    onInput={(e) => autoResize(e.target)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <div className="notes-grid">
                {notes.map((note, index) =>
                    <div key={index}
                        className="note-card"
                        onClick={() => handleNoteClick(note, index)}>
                        <button className="delete-btn" onClick={(e) => handleDelete(e, index)}>
                            &times;
                        </button>
                        <p className="note-title">{note.title}</p>
                        <p className="note-text">{note.text}</p>
                        <div className="note-dates-container">
                            <small className="note-date">Created: {note.date}</small>
                            {note.updatedDate && (
                                <small className="note-date note-date-updated">
                                    Updated: {note.updatedDate}
                                </small>
                            )}
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default Form
