import { color } from 'react-native-reanimated';
import styled from 'styled-components/native';
import colors from "../../styles/colors"

export const Container = styled.View`
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

// export const Container = styled.View`
//   flex: 1;
//   align-items: center;
// `;

// export const Container = styled.View`
//   flex: 1;
//   align-items: center;
// `;