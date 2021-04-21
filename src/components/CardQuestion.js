import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import Button from "./Button";

const Card = styled.View`
  width: 100%;
  min-height: 96px;
  height: 96px;
  justify-content: space-evenly;
  background-color: ${colors.white};
`

const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: #2323;
    padding: 10px;

    padding-left: 23px;
    padding-right: 23px;
`
const CardHeaderText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.text_bold_agro};
`
const CardHeaderIcon = styled.View`

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

export default function CardQuestion({ question, onPressClear, onPressTrue, iconHeader }) { 
    return(
      <Card>

        <CardHeader>
        
            <CardHeaderText>
                { question.title }
            </CardHeaderText>

            {
                iconHeader &&
                (
                    <CardHeaderIcon>
                        <CardHeaderText>
                            Icon
                        </CardHeaderText>
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
                />
                <Button 
                    title="RESPONDER"
                    onPress={onPressTrue}
                    height="24px"
                />
            </CardFooterButtons>
        </CardFooter>
        
      </Card>
    );
}