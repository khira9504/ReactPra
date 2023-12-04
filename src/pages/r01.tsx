import styled from 'styled-components';

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Text = styled.p`
  text-align: center;
`;

export default function R01() {
  return (
    <TextWrap>
      <Text>Hello World</Text>
    </TextWrap>
  );
};
