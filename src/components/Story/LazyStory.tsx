import React from "react";
import { Story } from "./StoryTypes";
interface LazyStoryProps {
  story:  Story;
}

const LazyStory: React.FC<LazyStoryProps> = ({ story }) => {
  return (
    <div
      className="story-image"
      style={{ backgroundImage: `url(${story.image})` }}
    >
      <div className="info-user">
        <img className="story-user" alt="avatar" src={story.avatar} />
        <div className="story-content">{story.user}</div>
      </div>
    </div>
  );
};

export default LazyStory;