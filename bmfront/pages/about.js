import styled from "@emotion/styled";
import React from "react";

function about(props) {
  return (
    <Container>
      <TextWrapper>
        <MainText>반면교사[反面敎師]</MainText>
        <SubText>
          반면교사는 다른 사람의 잘못된 일과 실패를 거울삼아 나의 가르침으로
          삼는다는 뜻입니다. 우리는 수많은 스타트업 중 살아남은 회사들의
          생존자편향 오류에서 벗어나 실패하거나, 시장의 선택을 받지 못한
          기업들에 대한 사례를 모읍니다. 이를 통해 창업을 시작 하는 사람들에게
          조금이나마 긍정적인 도움이 되고자합니다.
        </SubText>
      </TextWrapper>
      <MainImg
        src="https://i0.wp.com/www.andrewahn.co/wp-content/uploads/2017/07/C1Bh6UwUAAA5k41.jpg?fit=1200%2C893&ssl=1"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  
  justify-content: space-between;
  padding-left: 150px;
  padding-right: 150px;
`;

const TextWrapper = styled.div`
  width: 500px;
`;

const MainText = styled.p`
  margin: 0 auto;
  width: 100%;
  font-size: 40px;
  font-weight: bold;

  text-align: left;
`;

const SubText = styled.p`
  width: 100%;
  margin: 10px auto;

  text-align: left;
  line-height: 27px;
`;

const MainImg = styled.img`
  width: 300px;
  margin-left: 100px;
`;

export default about;
