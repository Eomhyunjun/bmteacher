import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <MainText>
        Project 반면교사[反面敎師] 반면교사는 다른 사람의 잘못된 일과 실패를
        거울삼아 나의 가르침으로 삼는다는 뜻입니다.
      </MainText>
      <SeeMore>→ go to Archive</SeeMore>
    </Container>
  );
}

const Container = styled.div``;

const MainText = styled.p``;

const SeeMore = styled.a`

`;
