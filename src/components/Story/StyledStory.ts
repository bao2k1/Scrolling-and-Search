import styled from "styled-components";

const StyledStory = styled.div`
  .story-slider-container {
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  }
  .story-slider-container.loaded {
    opacity: 1;
    visibility: visible;
  }

  .story-item {
    text-align: center;
  }

  .story-image {
    width: 125px;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .info-user {
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    color: white;
  }

  .story-user {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-bottom: 4px;
  }

  .story-content {
    font-size: 14px;
    color: #fff;
    text-align: center;
  }

  .add-story {
    width: 125px;
    height: 200px;
    background-color: #343a40;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  /* Button styling */
  .add-story-button {
    background-color: #ffffff;
    color: #5429ff;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 42px;
  }

  /* Plus icon */
  .add-story-button span {
    font-size: 30px;
    font-weight: medium;
  }

  /* Hover effect */
  .add-story-button:hover {
    background-color: #5429ff;
    color: #ffffff;
  }
`;

export { StyledStory };
