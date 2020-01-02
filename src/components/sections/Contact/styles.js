import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  background: #526f7a;
`;

export const FormWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 7rem;
`;

export const Form = styled.form`
  background: #485564;
  padding: 25px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const FormHeading = styled.h1`
  display: block;
  color: white;
  margin-bottom: 1rem;
`;

export const Fieldset = styled.fieldset`
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
`;

export const Textarea = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
`;

export const Input = styled.input`
  width: 100%;
  resize: none;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  background: #526f7a;
  color: white;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid #526f7a;

  &:hover {
    border: 1px solid black;
  }

  &:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }
`;
