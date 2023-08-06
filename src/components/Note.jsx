import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

export default function Note(props) {
    return (
        <div className="note" id={props.id}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab onClick={() => { props.onDelete(props.id) }}><DeleteIcon /></Fab>
        </div>
    );
}