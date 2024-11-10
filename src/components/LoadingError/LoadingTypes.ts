import React from "react";
import styled from "styled-components";

export interface LoadingProps {
  size?: string;
  color?: string;
}

export interface MessageProps {
  variant?: string;
  children?: React.ReactNode;
}

const defaultMessage: MessageProps = {
  variant: "alert-info",
}

const SnipperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Spinner = styled.div<LoadingProps>`
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  border: 5px solid #f3f3f3; /* Light grey border */
  border-top: 5px solid ${(props) => props.color || "#28a745"}; /* Green top border */
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
export {SnipperWrapper, Spinner, defaultMessage};