import styled from "styled-components";


export const StyledHeader = styled.div<any>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:var(--header-bg-color);
    height: 96px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
    .left{
      display: flex;
      justify-content: center ;
      align-items: center;
      .header-toolbar{
        display: flex;
        margin-left:20px;
        .header-toolbar-item{
          height:50px;
          width:50px;
          border-radius:50%;
          background-color:var(--toolbar-bg-color);
          display: flex;
          justify-content:center ;
          align-items:center ;
          margin-right:16px;
           svg{
            height:30px;
            fill:#adb5bd !important;
            stroke:#adb5bd !important;
           }
          &.active{
            background-color: #d2e3ff;
            /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
              svg {
                fill: #1e74fd !important;
                stroke: #1e74fd !important;
              }
          }
        }
      }
    }
    .right{
      display: flex;
      justify-content:center;
      align-items:center ;
      img{
        height:36px;
        background-color:#fff;
        border-radius:50%;
        width:36px;
        margin-right:40px;
        border:1px solid #ccc;
      }
      .icon-header{
          height:50px;
          width:50px;
          border-radius:50%;
       
          display: flex;
          justify-content:center ;
          align-items:center ;
          margin-right:8px;
           svg{
            height:24px;
           }
           cursor: pointer;
          
        }
    }
`
export const CustomSearchWrapper = styled.div<any>`
.custom-search .ant-input,
.custom-search .ant-input-affix-wrapper {
  height:48px;
  border-radius: 30px !important; 
  background-color:var(--search-bg-color);
  font-size:14px;
  font-weight:600;
  position:relative;
  padding: 0 50px;
}
.ant-input-group-addon{
  background-color:var(--search-bg-color);
  position:absolute;
  left:100px;
  top:0;
  transform: translate(10px, 24%);
  z-index:1;
}
.ant-input-search-button{
    background-color:var(--search-bg-color);
    border:none;
    border-radius:30px !important;
    height:32px;
    z-index:1;
    &:hover{
      background-color:transparent !important;
    }
  }


`