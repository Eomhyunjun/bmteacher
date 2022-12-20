import styled from "@emotion/styled";
import Head from "next/head";
import { MovePage_a } from "../styledComponents/common";
import { notionUrl } from "../global/notionUrl";

export default function Home() {
  return (
    <Container>
      <Head>
        <meta
          name="naver-site-verification"
          content="e5b01ccf23389c9c3316a778fe94b575e0a8f699"
        />
      </Head>
      <TextWrapper>
        <MainText>반면교사[反面敎師]</MainText>
        <SubText>
          위대한 기업의 성공요인은 비슷하고 어쩌면 똑같지만,
          <p>실패한 기업의 이유는 모두 다릅니다.</p>
          <p>우리는 실패한 사례를 통하여 성장하고자 합니다</p>
        </SubText>
      </TextWrapper>
      <MovePage_a as="a" href={notionUrl}>
        go to Archive
      </MovePage_a>
    </Container>
  );
}

const Container = styled.div``;

const TextWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const MainText = styled.div`
  width: 100%;
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

const SubText = styled.div`
  width: 100%;
  text-align: center;
  & p {
    margin: 16px auto;
  }
`;
