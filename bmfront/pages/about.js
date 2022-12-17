import styled from "@emotion/styled";
import React from "react";

function about(props) {
  return (
    <Container>
      <div>
      <MainText>반면교사[反面敎師]</MainText>
      <SubText>
        반면교사는 다른 사람의 잘못된 일과 실패를 거울삼아 나의 가르침으로
        삼는다는 뜻입니다. 우리는 수많은 스타트업 중 살아남은 회사들의
        생존자편향 오류에서 벗어나 실패하거나, 시장의 선택을 받지 못한 기업들에
        대한 사례를 모읍니다. 이를 통해 창업을 시작 하는 사람들에게 조금이나마
        긍정적인 도움이 되고자합니다.
      </SubText>
      </div>
      <img
        width={300}
        src="https://i0.wp.com/www.andrewahn.co/wp-content/uploads/2017/07/C1Bh6UwUAAA5k41.jpg?fit=1200%2C893&ssl=1"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const MainText = styled.p`
  margin: 0 auto;
  width: 800px;
  font-size: 48px;
  font-weight: bold;

  text-align: center;
`;

const SubText = styled.p`
  width: 500px;
  margin: 10px auto;

  text-align: center;
`;

export default about;
