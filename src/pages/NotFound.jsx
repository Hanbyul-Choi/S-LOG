import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");
  setTimeout(goBack, 2500);

  return (
    <>
      <FullPage onClick={goBack}>
        <Container>
          <TitleMassage>알 수 없는 요청입니다.</TitleMassage>
        </Container>
        <Message>메인 페이지로 이동합니다.</Message>
      </FullPage>
    </>
  );
}

export default NotFound;
const FullPage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: linear-gradient(to top, #6c8d64, #fff4f4);
  color: #6c8d64;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  animation: fadeout 0.2s 1.8s forwards;

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TitleMassage = styled.h1`
  color: #fff;
`;

const Message = styled.h3`
  color: #fff;
`;
