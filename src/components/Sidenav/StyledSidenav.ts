import styled from "styled-components";

const StyledSidenav = styled.div`
    display: flex;
    flex-direction:column;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color:var(--body-background);

    .logo{
        display: flex;
        justify-content:center;
        align-items:center ;
        height:96px;
        background-color:#fff;
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);
        position: fixed; /* Fixes the element to the viewport */
        top: 0; /* Set the distance from the top of the viewport */
        left: 0;
        width: 17.9%;
        z-index: 1000; 
        .logo-img{
            width:40px;
            height:40px;
            fill:#00f51d;  
        }
        span{
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size:32px;
            color:#0055ff;
            font-weight:bold;
        }

    }
    .navigate-sidenav{
        margin-top:96px;
    }
    
`;

export {StyledSidenav}