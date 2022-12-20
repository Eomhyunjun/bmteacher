import React from "react";
import styled from "@emotion/styled";
import { MovePage_a } from "../styledComponents/wrapper";

function archive(props) {
  return (
    <Container>
        <MovePage_a 
        as="a" href="https://heom.notion.site/31b33185cc7546ca8686b1c065f66edc?v=fad2b533272e4631a64e4f75b3cbfe3b">
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
