import styled from "styled-components";

const shadow = `.3rem .3rem .6rem #c8d0e7,
-.2rem -.2rem .5rem #FFFFFF`

const innerShadow = `inset .2rem .2rem .5rem #c8d0e7,
inset -.2rem -.2rem .5rem #FFFFFF`

export const UserProfileDisplay = styled.div `
  padding: 10% 5% 5% 5%;
  width: 90%;
  height: 74%;
  display: grid;
  grid-template-columns: 25% 70%;
  gap: 5%;
`

export const UserProfileDetailsPanel = styled.div `
  box-shadow: ${shadow};
  border-radius: .5rem;
  padding: 5%;
  display: flex;
  flex-direction: column;
  text-align: left;
  
  p {
    width: 100%;
    font-size: 20px;
    margin: 0;
    padding: 3%;
  }
  
  button {
    border: none;
    color: #9baacf;
    font-size: 26px;
    width: 100%;
    padding: 3%;
    margin-bottom: 5%;
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

export const UserProfileOrderPanel = styled.div `
  box-shadow: ${shadow};
  border-radius: .5rem;
  padding: 1%;
  overflow: auto;
  
  table {
    padding: 2%;
    text-align: center;
    width: 100%;
  }

  button {
    border: none;
    color: #9baacf;
    border-radius: 1rem;
    box-shadow: ${shadow};
    font-size: 16px;
    padding: 4%;
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