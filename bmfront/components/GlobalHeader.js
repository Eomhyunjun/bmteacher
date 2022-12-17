import { css, cx } from "@emotion/css";
import { useRouter } from "next/router";
import HeaderWrapper from "./HeaderWrapper";

const HeaderBtn = ({ title, path, nowPath }) => {
  function onClickAction(path) {
    // if (path === "logout") handleLogout();
    location.href = path;
  }
  return (
    <button
      type="button"
      className={cx(
        commonNavElement,
        commonButtonStyle,
        confirmButtonWidth,
        buttonFont,
        `/${path}` === nowPath && selectedButton
      )}
      onClick={() => onClickAction(path)}
    >
      {title}
    </button>
  );
};

function GlobalHeader() {
  const router = useRouter();
  const nowPath = router.pathname;

  return (
    <HeaderWrapper>
      <div className={cx(flex, flexBtw)}>
        <h3 className={homeTitle}>반면교사</h3>
        <div className={cx(rightCloumn)}>
          <HeaderBtn title="about" path="about" nowPath={nowPath} />
          <HeaderBtn title="Archive" path="archive" nowPath={nowPath} />
          <HeaderBtn title="Q&A" path="qna" nowPath={nowPath} />
        </div>
      </div>
    </HeaderWrapper>
  );
}

const flex = css`
  display: flex;
  height: 100%;
`;

const flexBtw = css`
  justify-content: space-between;
  align-items: center;
`;

const homeTitle = css`
  font-size: 18px;
  font-weight: bold;
`;

const rightCloumn = css`
  display: flex;
  flex-direction: row;
`;

const commonNavElement = css`
  display: inline-block;
  text-align: justify;
  width: 100%;
  height: 44px;
  background-color: white;
`;

const commonButtonStyle = css`
  border-radius: 8px;
  border: none;
  padding: 12px 10px;
  margin: 0 8px;
  cursor: pointer;
`;

const buttonFont = css`
  font-size: 15px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #4e5968;
  &:hover {
    background-color: #f2f4f6;
  }
`;

const selectedButton = css`
  font-weight: 700;
`;

const confirmButtonWidth = css`
  width: fit-content;
`;

export default GlobalHeader;
