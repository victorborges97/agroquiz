import React, { useState } from "react";
import { Dimensions, Switch } from "react-native"
import { Feather } from '@expo/vector-icons';
import { RectButton } from "react-native-gesture-handler"

import styled from "styled-components";
import colors from "../styles/colors";

const Card = styled.View`
    width: 100%;
    min-height: 96px;
    justify-content: space-evenly;
    background-color: ${colors.white};
    margin-top: 15px;
    border-radius: 10px;
`
const CardHeader = styled.View`
    justify-content: center;
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

const CardLine = styled.View`
    border-bottom-color: ${colors.color_line};
    border-bottom-width: 0.5px;
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
const CardFooterIcon = styled(RectButton)`
    margin-left: 5px;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
`

export default function SeeQuestion({ 
    question,
    onPressClear,
    onPressEdit,
    OnChange,
}) { 

    return(
      <Card>

        <CardHeader>
        
            <CardHeaderText>
                {question ? question.question : ""}
            </CardHeaderText>

        </CardHeader>

        <CardLine />
        
        <CardFooter>

            <CardFooterIcon onPress={onPressEdit}>
                <Feather name="edit" size={20} color={colors.text_regular} />
            </CardFooterIcon>

            <CardFooterIcon onPress={onPressClear}>
                <Feather name="trash-2" size={20} color={colors.text_regular} />
            </CardFooterIcon>

        </CardFooter>
        
      </Card>
    );
}