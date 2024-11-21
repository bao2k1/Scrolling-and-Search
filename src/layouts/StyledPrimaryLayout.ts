import styled from "styled-components";

const StyledPrimaryLayout = styled.div`
display: flex;
height: 100vh;
    .primary-left {
        flex: 18%;
        overflow-y: auto;
        ::-webkit-scrollbar {
            width: 1px;
        }
        
        ::-webkit-scrollbar-track {
            background-color: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #888; 
            border-radius: 10px; 
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #555; 
        }
    }

    .primary-right {
        flex: 82%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 1px !important; /* Chỉnh kích thước thanh cuộn để dễ nhận thấy */
        }
        ::-webkit-scrollbar-track {
            background-color: #f1f1f1 !important;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #888 !important;
            border-radius: 10px !important;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #555 !important;
        }
    }
    .primary-main {
        flex: 72%;
        overflow-x: hidden !important;
        
    }
    .primary-end {
        display:none;
        flex: 10%;
        height: 100%; 
        overflow-y: auto;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 2px !important; 
        }
        
        ::-webkit-scrollbar-track {
            background-color: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #888; 
            border-radius: 10px; 
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #555; 
        }
    }
    .children-wrapper {
      height: auto;
      overflow-y: auto; 
      display:flex;
    }
    @media screen and (min-width: 1660px){
        .primary-end{
            display: block;
        }
    }
`;

export {StyledPrimaryLayout}