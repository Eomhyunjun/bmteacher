import { css } from "@emotion/css";

const HEADER_HEIGHT = '60px';

function PageWrapper({children}) {

    return (
        <div className={marginTopHeader}>
            {children}
        </div>
    );
}

export default PageWrapper;

const marginTopHeader = css`
    margin-top: calc(${HEADER_HEIGHT} + 170px);
    min-width: calc(900px - 2%);
    font-family: 'Nexon Gothic', 'Malgun Gothic', Sans-Serif;
    background-color: white;
`;