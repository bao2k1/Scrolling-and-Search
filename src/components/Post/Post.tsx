import { StyledPost } from "./StyledPost";

import TextArea from "antd/es/input/TextArea";
export const Post:React.FC<Partial<any>> = (props) => {
    return (
        <StyledPost>
           <div className="header-post">Create Post</div>
           <div className="create-post">
            <TextArea rows={4} placeholder="What's on your mind?"/>
           </div>
           <div className="button-post">
            <button className="button-post-item">Live Video</button>
            <button className="button-post-item">Photo/Video</button>
            <button className="button-post-item">Feeling/Activity</button>
           </div>
        </StyledPost>
    )
}

export default Post;