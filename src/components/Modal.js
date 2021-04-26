import React, { useState } from 'react';

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
    border-bottom-color: ${colors.color_line2};
    border-bottom-width: 1px;
`
 
const CardFooterButtons = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

export default function ModalEditing({
    id,
  question,
  idx,
  onPressClear,
  onPressTrue,
  nameButton
}) {

    let INITIAL_ITEM = {
        "id": id,
        "answer": "",
        "data_register": new Date(),
        "localization": {
            "lat": "",
            "log": "",
        },
        "question": "",
    }

    const [Question, setQuestion] = useState(question ? question : INITIAL_ITEM);

    let type = question ? "EXISTING" : "NEW"
    const handleAdd = () => {
        let item = {
            ...Question,
            "data_register": new Date(),
            "localization": Question.localization,
            "question": Question.question,
        }
        console.log(`INDEX: ${idx}`)
        console.log(`TYPE: ${type}`)
        onPressTrue(item, type, idx);
    }

    return (
        <Container>

            <InputTitulo>
                <InputTituloText>TÍTULO DA PERGUNTA</InputTituloText>
                <InputTituloTextInput
                    value={Question.question}
                    onChangeText={(text) => {
                        setQuestion({
                            ...Question,
                            question: text
                        })
                    }}
                />
            </InputTitulo>

            <CardLine />

            <CardFooterButtons>
                <Button 
                    title="Cancelar"
                    onPress={onPressClear}
                    height="24px"
                    themeCancel
                    bold
                />
                <Button 
                    title={question ? "EDITAR" : "CRIAR"}
                    onPress={handleAdd}
                    height="24px"
                    bold
                />
            </CardFooterButtons>
            
        </Container>
    );
}