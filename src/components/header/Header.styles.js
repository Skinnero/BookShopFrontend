import styled from "styled-components";

const shadow = `.3rem .3rem .6rem #c8d0e7,
-.2rem -.2rem .5rem #FFFFFF`

const innerShadow = `inset .2rem .2rem .5rem #c8d0e7,
inset -.2rem -.2rem .5rem #FFFFFF`

export const HeaderNavbar = styled.nav`
  height: 8%;
  background-color: #E4EBF5;
  z-index: 1;
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.5% 0 0.5% 0;
  width: 100vw;
  border-bottom: solid 2px darkgray;
`

export const LeftHeaderPanel = styled.div`
  grid-column-start: 1;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  font-size: 150%;
`
export const RightHeaderPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    font-family: inherit;
    font-size: 26px;
    border: none;
    color: #9baacf;
    height: 100%;
    width: 20%;
    margin: 1%;
    padding: 2%;
    border-radius: 1rem;
    box-shadow: ${shadow};
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .3s ease;

    &:hover {
      color: #6d5dfc;
    }
    
    &:active {
      box-shadow: ${innerShadow};
    }
    
  }
`
export const MiddleHeaderForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    font-size: 26px;
    width: 100%;
    height: 60%;
    padding: 2% 5% 2% 10%;
    border: none;
    border-radius: 1rem;
    box-shadow: ${innerShadow};
    background: none;
    font-family: inherit;
    color: black;

    &::placeholder {
      color: #bec8e4;
    }

    &:focus {
      outline: none;
      box-shadow: ${shadow};
  
      +.icon {
        color: #6d5dfc;
      }
    }
  }

  div {
    position: absolute;
    font-size: 2rem;
    padding: 0 1rem;
    display: flex;
    color: #9baacf;
    transition: .3s ease;
  }
`