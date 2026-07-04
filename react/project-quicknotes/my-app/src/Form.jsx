import { useState, useEffect } from 'react'
import { format } from 'date-fns';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Text } from '@mantine/core';

const CATEGORIES = {
    Personal: { label: 'Personal', color: '#ffeb3b' },
    Work: { label: 'Work', color: '#64b5f6' },
    Shopping: { label: 'Shopping', color: '#81c784' },
    Ideas: { label: 'Ideas', color: '#ba68c8' },
    Other: { label: 'Other', color: '#e0e0e0' }
};

function Form() {

    const [opened, { open, close }] = useDisclosure(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('Personal');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("my-notes");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("my-notes", JSON.stringify(notes));
    }, [notes]);

    const handleNoteClick = (note) => {
        const realIndex = notes.findIndex(n => n.id === note.id);
        setSelectedNote({ ...note });
        setSelectedIndex(realIndex);
        open();
    };

    const handleAdd = () => {
        if (text.length === 0) {
            window.alert("Cannot add an empty note! Please write something first");
            return;
        }
        setNotes([...notes, { title, text, category, date, updatedDate: null }]);
        setText('')
        setTitle('')
        setCategory('Personal');
    }

    const handleUpdate = () => {
        if (!selectedNote || selectedIndex === null) return;
        const updatedNotes = [...notes];
        updatedNotes[selectedIndex] = {
            ...selectedNote,
            updatedDate: format(new Date(), "MMM do h:mm a")
        };
        setNotes(updatedNotes);
        close();
    };

    const handleDelete = (e, noteId) => {
        e.stopPropagation();
        const isConfirmed = window.confirm("Are you sure you want to delete your note?");
        if (!isConfirmed) return;     
        setNotes(notes.filter(note => note.id !== noteId));
    }

    function autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    const filteredNotes = notes.filter(note => {
        const matchesSearch =
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.text.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            activeFilter === 'All' ||
            note.category === activeFilter;

        return matchesSearch && matchesCategory;
    });

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
                <div className="category-select-container">
                    <label>Category: </label>
                    <select
                        value={selectedNote?.category || 'Personal'}
                        onChange={(e) => setSelectedNote({ ...selectedNote, category: e.target.value })}
                    >
                        {Object.keys(CATEGORIES).map((key) => (
                            <option key={key} value={key}>{CATEGORIES[key].label}</option>
                        ))}
                    </select>
                </div>
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

            <div className="filter-controls-container">
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search notes by title or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <div className="filter-buttons-group">
                    <button 
                        className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('All')}
                    >
                        All
                    </button>
                    {Object.keys(CATEGORIES).map(key => (
                        <button
                            key={key}
                            className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
                            style={{ '--category-color': CATEGORIES[key].color }}
                            onClick={() => setActiveFilter(key)}
                        >
                            {CATEGORIES[key].label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-container">
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    placeholder="Title"
                    maxLength={200}
                />
                <div className="category-select-container">
                    <label>Category: </label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {Object.keys(CATEGORIES).map((key) => (
                            <option key={key} value={key}>{CATEGORIES[key].label}</option>
                        ))}
                    </select>
                </div>
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
                {filteredNotes.map((note, index) => {
                    const noteColor = CATEGORIES[note.category]?.color || CATEGORIES.Other.color;
                    return (
                        <div key={index}
                            className="note-card"
                            style={{ backgroundColor: noteColor }}
                            onClick={() => handleNoteClick(note)}>
                            <button className="delete-btn" onClick={(e) => handleDelete(e, note.id)}>
                                &times;
                            </button>
                            <span className="category-badge">{note.category || 'Other'}</span>
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
                    )
                })}
            </div>

        </>
    )
}

export default Form
