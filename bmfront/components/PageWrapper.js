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
    margin-top: ${HEADER_HEIGHT};
    min-width: calc(900px - 2%);
`;