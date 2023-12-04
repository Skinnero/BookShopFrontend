import styled from "styled-components";

const shadow = `.3rem .3rem .6rem #c8d0e7,
-.2rem -.2rem .5rem #FFFFFF`

const innerShadow = `inset .2rem .2rem .5rem #c8d0e7,
inset -.2rem -.2rem .5rem #FFFFFF`

export const FilterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  border-right: solid 2px darkgray;
`

export const FilterTitle = styled.p `
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`

export const FilterCheckBox = styled.div `
  input {
    display: none;
  }

  label {
    box-shadow: ${shadow};
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    width: 100%;
    height: 2rem;

    i {
      font-weight: 500;
      color: #9baacf;
      transition: .3s ease;
    }

    &:hover i {
      color: #6d5dfc;
    }

    p {
      color: darkgray;
    }
    
  }

  & input:checked {
    & ~ label {
      box-shadow: ${innerShadow};

      i {
        color: #6d5dfc;
      }

      p {
        color: black;
        font-weight: bold;
      }
    }
  }
`

export const CheckBoxRow = styled.label `
  margin-bottom: 3%;
  
  p {
    margin: auto;
  }
`