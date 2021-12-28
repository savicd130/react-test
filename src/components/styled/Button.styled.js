import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${props => props.bg};
  color: #fff;
  border-radius: 5px;
  padding: 0.4rem 1.2rem;
  text-decoration: none;
  text-align: center;
`;
