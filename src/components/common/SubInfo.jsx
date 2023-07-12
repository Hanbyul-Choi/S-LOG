import React from "react";
import { css, styled } from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const SubInfo = ({ username, publishedDate, has_margin_top }) => {
  return (
    <SubInfoBlock has_margin_top="true">
      <span>
        <b>
          <Link to={`/${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleString()}</span>
    </SubInfoBlock>
  );
};

const SubInfoBlock = styled.div`
  ${(props) =>
    props.has_margin_top &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
`;

export default SubInfo;
