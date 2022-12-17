import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <MainText>반면교사[反面敎師]</MainText>
      <SubText>
        반면교사는 다른 사람의 잘못된 일과 실패를 거울삼아 나의 가르침으로
        삼는다는 뜻입니다.
      </SubText>
      <SeeMore
        as="a"
        href="https://heom.notion.site/31b33185cc7546ca8686b1c065f66edc?v=fad2b533272e4631a64e4f75b3cbfe3b"
      >
        go to Archive
      </SeeMore>
    </Container>
  );
}

const Container = styled.div`
`;

const MainText = styled.p`
  margin: 0 auto;
  width: 800px;
  font-size: 48px;
  font-weight: bold;

  text-align: center;
`;

const SubText = styled.p`
  width: 1000px;
  margin: 10px auto;

  text-align: center;
`;

const SeeMore = styled.a`
  display: block;
  margin: 80px auto;
  width: 120px;

  text-align: center;
  &:hover {
    color: blue;
  }
`;
