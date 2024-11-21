import React, { useEffect, useState, Suspense, lazy } from "react";
import Slider from "react-slick";
import { Story } from "./StoryTypes";
import { StyledStory } from "./StyledStory";

// Lazy load component
const LazyStory = lazy(() => import("./LazyStory"));

interface StorySliderProps {
  stories: Story[];
}

const StorySlider: React.FC<StorySliderProps> = ({ stories }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000); // Điều chỉnh thời gian tải
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.6,
    slidesToScroll: 1,
    onInit: () => {
      // Điều chỉnh lại kích thước slider sau khi component được tải
      window.dispatchEvent(new Event("resize"));
    },
  };

  return (
    <div
      className={`story-slider-container ${isLoaded ? "loaded" : ""}`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <StyledStory>
          <Slider {...settings}>
            {stories.map((story, index) => (
              <div key={story.id} className="story-item">
                {index === 0 ? (
                  <div className="add-story">
                    <button className="add-story-button">
                      <span>+</span>
                    </button>
                  </div>
                ) : (
                  <LazyStory story={story} />
                )}
              </div>
            ))}
          </Slider>
        </StyledStory>
      </Suspense>
    </div>
  );
};

export default StorySlider;
