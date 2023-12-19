import styled from "styled-components";

const shadow = `.3rem .3rem .6rem #c8d0e7,
-.2rem -.2rem .5rem #FFFFFF`

const innerShadow = `inset .2rem .2rem .5rem #c8d0e7,
inset -.2rem -.2rem .5rem #FFFFFF`

export const MainBody = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #E4EBF5;
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: ${shadow};
    background: white;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: ${innerShadow};
    border-radius: 10px;
  }
`