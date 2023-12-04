import styled from "styled-components";

const shadow = `.3rem .3rem .6rem #c8d0e7,
-.2rem -.2rem .5rem #FFFFFF`

const innerShadow = `inset .2rem .2rem .5rem #c8d0e7,
inset -.2rem -.2rem .5rem #FFFFFF`

export const ProductsGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-height: 40%;
  margin: 1% 1% 1% 1%;
  gap: 1%;
`

export const ProductCard = styled.div `
  box-shadow: ${shadow};
  position: relative;
  border-radius: .5rem;
  
  img {
    width: 100%;
    cursor: pointer;
  }
`

export const ProductCardBody = styled.div `
  padding: 2%;
`

export const ProductTitle = styled.p `
  text-align: left;
  font-weight: bold;
`

export const ProductPrice = styled.p `
    font-size: 26px;
`

export const ProductButton = styled.button `
  border: none;
  color: #9baacf;
  height: 100%;
  font-size: 26px;
  margin: auto;
  padding: 3%;
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