import styled from "styled-components";

const shadow = `.3rem .3rem .6rem #c8d0e7,
-.2rem -.2rem .5rem #FFFFFF`

const innerShadow = `inset .2rem .2rem .5rem #c8d0e7,
inset -.2rem -.2rem .5rem #FFFFFF`

export const HeaderNavbar = styled.nav`
  height: 8%;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: #E4EBF5;
  z-index: 1;
  position: fixed;
  display: flex;
  padding: 0.5% 5% 0.5% 5%;
  width: 100vw;
  border-bottom: solid 2px darkgray;
`

export const LeftHeaderPanel = styled.div`
  cursor: pointer;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
`
export const RightHeaderPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 25%;

  button {
    border: none;
    color: #9baacf;
    height: 100%;
    width: 30%;
    margin: auto;
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
export const MiddleHeaderPanel = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
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

export const BasketTitle = styled.p `

`

export const BasketTable = styled.table `
  margin: 1%;
  padding: 2%;
  overflow: scroll;
  
  img {
    width: 25%;
  }

  td {
    padding: 1%;
    width: 10%;
    border-left: 1px solid darkgray;
  }
  
  .basketImage {
    border: none;
  }
  
  tr {
    border-radius: 1rem;
    box-shadow: ${shadow};
  }
  
  .quantity {
    
    input {
      width: 20%;
      margin-left: 5%;
    }
  }

  .closeIcon {
    color: red;
    text-align: right;
    margin: auto;
    padding-right:  2%;
    
    ion-icon {
      cursor: pointer;
    }
  }
`

export const CheckoutButton = styled.button `
  border: none;
  color: #9baacf;
  height: 100%;
  width: 30%;
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
`