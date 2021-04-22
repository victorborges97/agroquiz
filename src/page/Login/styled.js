import styled from 'styled-components/native';
import colors from "../../styles/colors"

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background: #9460F4;
  flex: 1;
`;

export const ImageLogin = styled.Image`
  width: 138px;
  height: 120px;
  margin-bottom: 10px;
`

export const TextInputLogin = styled.TextInput`
  font-size: 14px;
  color: ${colors.text_regular};
  font-weight: 400;
  background: ${colors.background};
  border-width: 1px;
  width: 80%;
  border-color: ${colors.text_regular};
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const ButtonLogin = styled.View`
  width: 80%;
  margin-bottom: 10px;
  margin-top: 10px;
`