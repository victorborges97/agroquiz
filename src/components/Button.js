import React from 'react';
import { RectButton } from "react-native-gesture-handler"

import colors from "../styles/colors"
import fonts from '../styles/fonts';
import styled from 'styled-components';

export default function Button({ title, height, marginRight, marginLeft, ...rest }) {

  const ContainerButton = styled(RectButton)`
    background-color: ${colors.bg_button_send};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: ${marginRight ? marginRight : "0px"};
    margin-left: ${marginLeft ? marginLeft : "0px"};
    height: ${height ? height : "56px"};
  `

  const TextButton = styled.Text`
    color: ${colors.text_send};
    font-size: 16px;
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
