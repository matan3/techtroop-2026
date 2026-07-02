import { useState } from 'react'
import { format } from 'date-fns';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Text } from '@mantine/core';

function Form() {

    const [opened, { open, close }] = useDisclosure(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState([]);

    const handleNoteClick = (note) => {
        setSelectedNote(note);
        open();
    };

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
                <span className="note-date">
                    {selectedNote?.date}
                </span>
                <span className="note-title">
                    {selectedNote?.title}
                </span>
                <Text className="note-text">
                    {selectedNote?.text}
                </Text>
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
                        onClick={() => handleNoteClick(note)}>
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
