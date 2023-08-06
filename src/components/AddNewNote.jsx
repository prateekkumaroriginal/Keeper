import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function AddNewNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const [isExpanded, setIsExpanded] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setNote(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const submitNote = (event) => {
        event.preventDefault()
        props.onAdd(note)
        setNote({ title: "", content: "" })
        setIsExpanded(false)
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input type="text" onChange={handleChange} value={note.title} name="title" placeholder="Title..." />}
                <textarea onChange={handleChange} onClick={() => { setIsExpanded(true) }} value={note.content} name="content" placeholder="Take a note..." rows={isExpanded ? "4" : 1} />
                {isExpanded && <Zoom in={true}>
                    <Fab color="warning" aria-label="add" onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>}
            </form>
        </div>
    )
}