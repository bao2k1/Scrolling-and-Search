import styled from "styled-components";
const StyledHomePage = styled.div`
    .home-content{
        height:2000px;
        flex: 72%;
        overflow-y: auto ;
        overflow-x: hidden ;
        background-color:var(--body-background);
        height: 100% !important;
        .home-content-wrapper{
            margin:12px 13%;
            background-color:var(--body-background);
            border-radius:12px;
            display: flex;
            .home-content-left{
                flex:2.5;
                overflow: hidden ;
                margin-right:16px;
            }
            .home-content-right{
                flex:1;
                background-color:blue;
            }
       } 
    }
`;
export {StyledHomePage}