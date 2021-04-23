import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import colors from "../../styles/colors"

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 17px;
`;

export const InputTitulo = styled.View`
    width: 100%;
    padding-left: 17px;
    padding-right: 17px;
    justify-content: center;
    margin-top: 23px;
    margin-bottom: 10px;
    position: relative;
    border-color: ${colors.border_input};
    border-width: 1px;
    border-radius: 5px;
    min-height: 36px;
`;
export const InputTituloText = styled.Text`
    position: absolute;
    top: -6px;
    left: 10px;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    padding-left: 5px;
    padding-right: 5px;
    background: ${colors.background};
    color: ${colors.text_regular};
`;
export const InputTituloTextInput = styled.TextInput`
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: ${colors.text_regular};
`;

export const ButtonGoBack = styled.View`
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;
    padding-left: 100px;
    padding-right: 100px;
`;

export const CardList = styled.View`
  width: 100%;
  align-items: center;
`;

export const CardLine = styled.View`
  border-bottom-color: ${colors.color_line};
  border-bottom-width: 1px;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
`

export const ButtonAdd = styled.View`
  width: 25px;
  justify-content: center;
  align-items: center;
  height: 25px;
  border-radius: 12.5px;
  border-width: 1px;
  border-color: ${colors.color_line};
  background: ${colors.background};
  position: absolute;
  left: 47%;
  top: -12.5px;
  z-index: 2;
`