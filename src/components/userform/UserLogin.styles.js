import styled from "styled-components";

const shadow = `.3rem .3rem .6rem #c8d0e7,
-.2rem -.2rem .5rem #FFFFFF`

const innerShadow = `inset .2rem .2rem .5rem #c8d0e7,
inset -.2rem -.2rem .5rem #FFFFFF`

export const UserCredentialDiv = styled.div `
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`

export const UserCredentialInput = styled.input `
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  border: none;
  font-size: 26px;
  width: 16rem;
  height: 3rem;
  padding: 2% 10% 2% 10%;
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
  }
  
`

export const UserCredentialTitle = styled.span `
  font-weight: bold;
  font-size: 26px;
  padding-bottom: 10%;
`

export const UserCredentialContentDiv = styled.div`
  background: #E4EBF5;
  padding: 2%;
  box-shadow: ${shadow};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UserConfirmationButton = styled.button `
  font-size: 26px;
  font-family: inherit;
  width: 20rem;
  height: 3rem;
  border: none;
  box-shadow: ${shadow};
  border-radius: 1rem;
  color: #9baacf;
  transition: .3s ease;
  

  &:hover {
    color: #6d5dfc;
  }

  &:active {
    box-shadow: ${innerShadow};
  }
`

export const BackButton = styled.a `
  margin-left: 85%;
  color: black;
  cursor: pointer;
  font-size: 30px;
  text-align: right;
`

export const UserText = styled.p `
  margin-top: 5%;
  color: black;
`

export const UserLink = styled.a `
  margin-top: -10px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #6d5dfc;
  }
`