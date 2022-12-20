import React from "react";
import styled from "@emotion/styled";
import { MovePage_a } from "../styledComponents/common";
import { notionUrl } from "../global/notionUrl";

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
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export default archive;
