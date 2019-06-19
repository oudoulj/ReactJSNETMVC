import styled from 'styled-components';

const MyStyle = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default function TestStyle() {
    return (
        <MyStyle>Inside my TestStyle component</MyStyle>
        );
}