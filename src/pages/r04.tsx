import { useEffect, useState } from "react";
import ProgressBar from "react-customizable-progressbar";
import { styled } from "styled-components";

const Main = styled.main`
  background-color: #eee;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const ProgressWrap = styled.div`
  position: relative;
  margin: 0 auto;
`;

const CountNumber = styled.p`
  position: absolute;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  inset: 0;
  margin: auto;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: 2px solid #000;
  cursor: pointer;
  font-size: 20px;
  margin: 0 10px;
  padding: 4px 10px;
  text-align: center;
`;

export default function R04() {
  const [count , setCount] = useState(60);
  const startTimer: any = setInterval(() => {
    if(count > 0) {
      setCount(count - 1);
    } else if(count == 0) {
      console.log("finished");
      setCount(60);
      return;
    } 
  }, 1000);

  useEffect(() => {
    setCount(count);
  }, [count]);

  return (
    <Main>
      <Section>
        <ProgressWrap>
          <ProgressBar
            radius={100}
            progress={count}
            strokeWidth={18}
            strokeColor="#a0d468"
            strokeLinecap="round"
            trackStrokeWidth={18}
            counterClockwise
          >
          </ProgressBar>
          <CountNumber>{ count }</CountNumber>
        </ProgressWrap>
        <Buttons>
          <Button onClick={ () => startTimer() }>Start</Button>
          <Button>Stop</Button>
          <Button>Reset</Button>
        </Buttons>
      </Section>
    </Main>
  )
}
