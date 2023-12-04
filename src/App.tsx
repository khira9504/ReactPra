import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 2em;
`;

const List = styled.li`
  list-style: none;
`;

export default function App() {
  return (
    <div className="App">
      <Title>100本ノック</Title>
      <nav> 
        <ul>
          <List><a href={`/r01`}>r01</a></List>
          <List><a href={`/r02`}>r02</a></List>
        </ul>
      </nav>  
    </div>
  );
};