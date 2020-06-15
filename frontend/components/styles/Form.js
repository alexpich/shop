import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.blue};
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: ${(props) => props.theme.darkGrey};
    color: white;
    border: 0;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      width: 30px;
      height: 30px;
      content: "";
      display: block;
      visibility: hidden;
      border: 4px solid ${(props) => props.theme.offWhite};
      border-top: 4px solid ${(props) => props.theme.lightBlue};
      border-radius: 50%;
      margin-bottom: 10px;
    }
    &[aria-busy="true"]::before {
      visibility: visible;
      animation: ${loading} 0.2s linear infinite;
    }
  }
`;

export default Form;
