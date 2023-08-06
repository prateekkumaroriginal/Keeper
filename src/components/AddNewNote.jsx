import { useState } from "react"

export default function AddNewNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        setNote(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div id="add-note">
            <input type="text" onChange={handleChange} value={note.title} name="title" placeholder="Title..." />
            <input type="text" onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." />
            <button onClick={() => {
                props.onAdd(note)
                setNote({ title: "", content: "" })
            }}>
                Add
            </button>
        </div>
    )
}