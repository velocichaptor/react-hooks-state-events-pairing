import {useState} from "react";

function Video({video}) {
    const [upvotes, setUpVotes] = useState(video.upvotes);
    const [downvotes, setDownVotes] = useState(video.downvotes);

    function handleDownVote() {
        setDownVotes(downvotes + 1)
    }

    function handleUpVote() {
        setUpVotes(upvotes + 1)
    }


    return(
        <div>
            <iframe
                 width="919"
                 height="525"
                 src={video.embedUrl}
                 frameborder="0"
                 allowfullscreen
                 title="Thinking in React"
                 />
                 <h1>{video.title}</h1>
                 <p>
                    {video.views} Views | Uploaded {video.createdAt}
                 </p>
            <div>  
                <button onClick={handleUpVote}>{upvotes}👍</button>
                <button onClick={handleDownVote}>Votes: {downvotes}👎</button>
            </div>
        </div>
    )
}

export default Video