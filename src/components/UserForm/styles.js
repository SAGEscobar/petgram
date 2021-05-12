import styled from 'styled-components';

export const Form = styled.form`
  padding: 16px 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.75;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  padding: 8px 2px;
`
export const Error = styled.span`
  color: red;
  font-size: 14px;
`;