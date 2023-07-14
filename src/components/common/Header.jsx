import React from "react";
import { styled } from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useState } from "react";
import AskLogoutModal from "../auth/AskLogoutModal";

function Header({ user, onLogout }) {
  const [modal, setModal] = useState(false);
  const onLogoutClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onLogout();
  };
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            S-LOG
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogoutClick}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
      {createPortal(
        <AskLogoutModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />,
        document.getElementById("portal-target")
      )}
    </>
  );
}

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

export default Header;
