import styled from 'styled-components';

export const UserCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5rem;
  display: block;
  background: ${props => props.bg};
  color: #fff;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20rem;
`;
