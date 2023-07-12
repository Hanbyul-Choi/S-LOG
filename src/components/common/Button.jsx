import { css, styled } from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

// button을 navigate를 써서 라우팅기능을 사용해도 되지만 a태그를 기반으로 한 Link가 시멘틱하다.(HTML용도대로 사용)
// styled에서 "styled(Link)" 을 사용해서 구현 시 props는 a태그까지 전달되는데
// a태그는 props로 Boolean값을 받지 않는다. 따라서 삼항연산자로 숫자형태로 바꾸어 주었다.
// 추가적으로 Link는 react-router-dom의 함수이지 HTML정식 태그가 아니므로 상속형태로 styled해야한다.
const Button = (props) => {
  return props.to ? <StyledLink {...props} cyan={props.cyan ? 1 : 0} /> : <StyledButton {...props} />;
};

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.25rem 1rem;
  color: #ffffff;
  outline: none;
  cursor: pointer;

  background-color: ${palette.gray[8]};
  &:hover {
    background-color: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullwidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background-color: ${palette.cyan[5]};
      &:hover {
        background-color: ${palette.cyan[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export default Button;
