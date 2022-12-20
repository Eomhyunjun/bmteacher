import React from "react";
import styled from "@emotion/styled";
import { MarginCenter } from "../styledComponents/common";

function qna(props) {
  return (
    <Container>
      <MarginCenter>
        문의사항이 있으면 아래 메일로 연락주세요!
        <br />
        bmgs@gmail.com
      </MarginCenter>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  height: 30px;
`;

export default qna;
