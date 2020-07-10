import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100%;
  width: 130px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  box-shadow: 0 3px 50px rgba(0, 0, 0, 0.16);

  a.active > div {
    opacity: 1;

    span {
      font-weight: 700;
      color: #000;
    }
  }

  @media screen and (max-width: 550px) {
    width: 50px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding-top: 15px;
  width: 100%;
  cursor: pointer;
  opacity: ${(props) => props.opacity || 0.7};

  span {
    font-size: 16px;
    color: #7d7d7d;
  }

  img {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 550px) {
    height: 60px;

    span {
      display: none;
    }

    img {
      width: 30px;
    }
  }
`;

export const Divider = styled.div`
  border-top: 1px solid #ccc;
  width: 104px;

  @media screen and (max-width: 550px) {
    width: 35px;
  }
`;

export const FinchLogo = styled.div`
  position: absolute;
  bottom: 30px;

  @media screen and (max-width: 550px), screen and (max-height: 650px) {
    display: none;
  }
`;
