import styled from "styled-components";

const shadow = `.3rem .3rem .6rem #c8d0e7,
-.2rem -.2rem .5rem #FFFFFF`

const innerShadow = `inset .2rem .2rem .5rem #c8d0e7,
inset -.2rem -.2rem .5rem #FFFFFF`

export const BasketTitle = styled.p `

`

export const BasketTable = styled.table `
  margin: 1%;
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
      height: 2rem;
      font-family: inherit;
      font-size: 1.4rem;
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
  min-width: 80%;
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