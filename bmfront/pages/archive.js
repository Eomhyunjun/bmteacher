import React from "react";
import styled from "@emotion/styled";
import { MovePage_a } from "../styledComponents/wrapper";

function archive(props) {
  return (
    <Container>
        <MovePage_a 
        as="a" href="https://heom.notion.site/50998d3b1bde43ff8b16a94ec622731c?v=9248c38ff1ca44de90225d53dc85b010">
          archive 보기
        </MovePage_a>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  margin-top: -30px;
`;

export default archive;
