import React from "react";
import { Dimensions } from "react-native"
import { Feather } from '@expo/vector-icons';
import { RectButton } from "react-native-gesture-handler"

import styled from "styled-components";
import colors from "../styles/colors";
import Button from "./Button";

const Card = styled.View`
    width: 100%;
    min-height: 96px;
    justify-content: space-evenly;
    background-color: ${colors.white};
    margin-top: 15px;
    border-radius: 10px;
`
const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 23px;
    padding-right: 23px;
`
const CardHeaderText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 90%;
    color: ${colors.text_bold_agro};
`
const CardHeaderIcon = styled(RectButton)`
    margin-left: 5px;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
`

const CardLine = styled.View`
    border-bottom-color: ${colors.color_line};
    border-bottom-width: 1px;
    margin-left: 9px;
    margin-right: 9px;

    padding-left: 10px;
    padding-right: 10px;
`

const CardFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    padding-left: 23px;
    padding-right: 23px;
`
const CardFooterText = styled.Text`
    font-size: 14px;
    line-height: 16px;
    color: ${colors.text_regular};
`
const CardFooterButtons = styled.View`
    flex-direction: row;
`

export default function CardQuestion({ 
    question,
    onPressClear,
    onPressTrue,
    onPressEdit,
    iconHeader,
    fontText,
}) { 
    return(
      <Card>

        <CardHeader>
        
            <CardHeaderText>
                { question.title }
            </CardHeaderText>

            {
                iconHeader &&
                (
                    <CardHeaderIcon onPress={onPressEdit}>
                        <Feather name="edit" size={15} color={colors.text_bold_agro} />
                    </CardHeaderIcon>
                )
            }

        </CardHeader>

        <CardLine />
        
        <CardFooter>
            <CardFooterText>
                { question.questions.length } Questões
            </CardFooterText>
            <CardFooterButtons>
                <Button 
                    title="Excluir"
                    onPress={onPressClear}
                    height="24px"
                    marginRight="10px"
                    fontText={fontText}
                    themeCancel
                />
                <Button 
                    title="RESPONDER"
                    onPress={onPressTrue}
                    height="24px"
                    fontText={fontText}
                />
            </CardFooterButtons>
        </CardFooter>
        
      </Card>
    );
}