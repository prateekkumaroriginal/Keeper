import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import AddNewNote from "./AddNewNote";

export default function App() {
    const [notes, setNotes] = useState([])
    const addNote = (note) => {
        setNotes(prev => {
            return [...prev, note]
        })
    }

    const deleteNote = (id) => {
        setNotes(prev => {
            return prev.filter((note, i) => {
                if (i != id) {
                    return note
                }
            })
        })
    }

    return (<>
        <Header />
        <AddNewNote onAdd={addNote} />
        {notes.map((note, i) => (
            <Note
                key={i}
                id={i}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
            />
        ))}
        <Footer />
    </>
    );
}