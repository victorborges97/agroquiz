import React from 'react';
import { RectButton } from "react-native-gesture-handler"

import colors from "../styles/colors"
import fonts from '../styles/fonts';
import styled from 'styled-components';

export default function Button({ 
  title,
  height,
  marginRight,
  marginLeft,
  fontText,
  themeCancel,
  ...rest
}) {

  const ContainerButton = styled(RectButton)`
    background-color: ${themeCancel ? colors.bg_button_trash : colors.bg_button_send};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: ${marginRight ? marginRight : "0px"};
    margin-left: ${marginLeft ? marginLeft : "0px"};
    height: ${height ? height : "56px"};
  `

  const TextButton = styled.Text`
    color: ${themeCancel ? colors.text_trash : colors.text_send};
    font-size: ${fontText ? fontText : "12px"};
    padding: 8px 16px;
  `

  return (
    <ContainerButton {...rest}>
        <TextButton>
            { title }
        </TextButton>
    </ContainerButton>
  );
}
