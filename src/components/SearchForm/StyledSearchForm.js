import styled from "styled-components";
import { colors } from "../../style/Variables";

export const StyledForm = styled.form`
  width: 90%;
  height: 150px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormInput = styled.input`
  width: 80%;
  height: 40px;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 5px;

  ::placeholder {
    color: ${colors.mainColor};
    font-size: 15px;
  }
`;

export const FormSubmit = styled.button`
  width: 50%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: ${colors.textColor};
  font-size: 20px;
  font-weight: bold;
  background-color: ${colors.mainColor};
`;
