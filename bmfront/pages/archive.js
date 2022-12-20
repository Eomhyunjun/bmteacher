import React from "react";
import styled from "@emotion/styled";
import { MovePage_a } from "../styledComponents/common";
import { notionUrl } from "../value/notionUrl";

function archive(props) {
  return (
    <Container>
        <MovePage_a 
        as="a" href={notionUrl}>
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
