import styled from "styled-components";

export const HomePageGrid = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 8% 88% 2%;
`

export const MainContentGrid = styled.div`
  grid-row-start: 2;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  width: 100%;
  overflow: auto;
`