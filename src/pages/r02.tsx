import { useState } from "react";
import { styled } from "styled-components";

export default function R02() {
  const Main = styled.main`
    background-color: #e7f1fe;
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
  `;

  const Container = styled.section`
    background-color: #fff;
    border-radius: 20px;
    max-width: 300px;
    margin: 0 auto;
    padding: 20px 0;
    width: 90%;
  `;

  const Title = styled.h1`
    color: #abacae;
    font-size: 20px;
    margin: 0 0 20px;
    text-align: center;
  `;

  const CountNumber = styled.h2`
    color: #1c5bd0;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  `;

  const SetButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 50%;
  `;

  const SetButton01 = styled.button`
    background-color: #1c5Bd0;
    border: 1px solid #1c5Bd0;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    width: 40px;
  `;

  const SetButton02 = styled.button`
    background-color: #fff;
    border: 1px solid #1c5Bd0;
    border-radius: 50%;
    cursor: pointer;
    color: #1c5Bd0;
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    width: 40px;
  `;

  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount(count + 1);
  };

  const subtractNumber = () => {
    count != 0 && setCount(count - 1);
  };

  return (
    <Main>
      <Container>
        <Title>React Counter</Title>
        <CountNumber>{ count }</CountNumber>
        <SetButtons>
          <SetButton01 onClick={ addNumber }>＋</SetButton01>
          <SetButton02 onClick={ subtractNumber }>ー</SetButton02>
        </SetButtons>
      </Container>a
    </Main>
  );
};
