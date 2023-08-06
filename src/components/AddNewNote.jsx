import { useState } from "react"

export default function AddNewNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setNote(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form className="create-note">
                <input type="text" onChange={handleChange} value={note.title} name="title" placeholder="Title..." />
                <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="4" />
                <button onClick={(event) => {
                    event.preventDefault()
                    props.onAdd(note)
                    setNote({ title: "", content: "" })
                }}>
                    Add
                </button>
            </form>
        </div>
    )
}