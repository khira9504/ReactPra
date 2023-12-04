import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 2em;
`;

const List = styled.li`
  list-style: decimal;
  margin: 0 0 10px;
`;

export default function App() {
  return (
    <div className="App">
      <Title>100本ノック</Title>
      <nav> 
        <ul>
          <List><a href={`/r01`}>HelloWorld(r01)</a></List>
          <List><a href={`/r02`}>Counter(r02)</a></List>
          <List><a href={`/r03`}>TodoList(r03)</a></List>
        </ul>
      </nav>  
    </div>
  );
};