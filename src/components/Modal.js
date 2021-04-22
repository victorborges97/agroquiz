import React, { useState } from 'react';
import { Switch } from 'react-native';

import styled from 'styled-components/native';
import colors from '../styles/colors';
import Button from './Button';

const Container = styled.View`
    height: 206px;
    background-color: ${colors.white};
    border-radius: 10px;
    padding: 15px;
    justify-content: space-evenly;
`

const InputTitulo = styled.View`
    width: 100%;
    padding-left: 17px;
    padding-right: 17px;
    justify-content: center;
    margin-bottom: 10px;
    position: relative;
    border-color: ${colors.border_input};
    border-width: 1px;
    border-radius: 5px;
    min-height: 36px;
    `;
const InputTituloText = styled.Text`
    position: absolute;
    top: -6px;
    left: 10px;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    padding-left: 5px;
    padding-right: 5px;
    background: ${colors.white};
    color: ${colors.text_regular};
`;
const InputTituloTextInput = styled.TextInput`
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: ${colors.text_regular};
`;

const CardLine = styled.View`
    border-bottom-color: ${colors.color_line};
    border-bottom-width: 1px;
`
const CardFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
`   
const CardFooterSwitch = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const CardFooterText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.text_regular};
`
const CardFooterButtons = styled.View`
    flex-direction: row;
`

export default function ModalEditing({
  question,
  onPressSwitch,
  onPressClear,
  onPressTrue,
}) {

    const [isEnabled, setIsEnabled] = useState(question ? question.isRequired : false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onPressSwitch(!isEnabled);
    }

    return (
        <Container>

            <InputTitulo>
                <InputTituloText>TÍTULO DA PERGUNTA</InputTituloText>
                <InputTituloTextInput
                    value={question ? question.question : ""}
                />
            </InputTitulo>

            <CardLine />

            <CardFooter>
                <CardFooterSwitch>
                    <Switch
                        trackColor={{ false: colors.bg_switch, true: colors.bg_switch }}
                        thumbColor={isEnabled ? colors.bg_switch_true : colors.bg_switch_false}
                        ios_backgroundColor={colors.bg_switch}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <CardFooterText>
                        Obrigatória
                    </CardFooterText>
                </CardFooterSwitch>

                <CardFooterButtons>
                    <Button 
                        title="Cancelar"
                        onPress={onPressClear}
                        height="24px"
                        marginRight="10px"
                        themeCancel
                    />
                    <Button 
                        title="SALVAR"
                        onPress={ onPressTrue }
                        height="24px"
                    />
                </CardFooterButtons>
            </CardFooter>
            
        </Container>
    );
}