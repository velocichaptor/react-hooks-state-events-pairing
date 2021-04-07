import {useState} from "react";
import Comment from "./Comment.js"

function Comments({comments}) {

    const [shown, setShown] = useState(true)

    function handleCommentToggle() {
        setShown(!shown)
    }

const commentItems = comments.map((comment) => (
    <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
))

    return(
        <div>
            <div>
            <button onClick={handleCommentToggle} >
               {shown ? "Hide" : "Show"} Comments
            </button>
            </div>
        <hr/>
        <h2>{comments.length} Comments</h2>
        {shown ? commentItems : null}
        </div>
    )
}

export default Comments