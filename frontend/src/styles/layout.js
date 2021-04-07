import styled from "styled-components";

const MainLayout = styled.div`
  display: grid;
  grid-template-columns:
    [padding-left-start] 10vw [padding-left-end content-start]
    auto [content-end padding-right-start]
    10vw [padding-right-end];
  grid-template-rows:
    [header-start] 3.5rem
    [header-end content-start] 90vh
    [content-end footer-start] 3rem [footer-end];
  row-gap: 3rem;
`;

export { MainLayout };
