import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, View} from 'react-native';
import { Dimensions, Switch } from "react-native"
import { Feather } from '@expo/vector-icons';
import { RectButton } from "react-native-gesture-handler"

import styled from "styled-components/native";
import Button from "./Button";
import colors from "../styles/colors";
import { useUser } from '../context';

export const CardList = styled.View`
  width: 100%;
  align-items: center;
`;
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
const CardHeaderText = styled.TextInput`
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
const CardFooterIcon = styled(RectButton)`
    margin-left: 5px;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
`

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

export const CardLineAdd = styled.View`
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
export const ButtonGoBack = styled.View`
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;
    padding-left: 100px;
    padding-right: 100px;
`;

const FormkArray = ({ totalQuestionApi  }) => {
    const { User } = useUser();

    const createQuestion = (id) => ({
        id: `${id.length+1}`,
        question: "",
        answer: "",
        data_register: new Date(),
        isRequired: false,
        localization: {
            lat: "",
            log: ""
        }
    });

    const INITIAL_INFO = {
        "id": totalQuestionApi+1,
        "title": "", 
        "user": User.id,
        "data_register": new Date(), 
        "questions": []
    }

  return (
    <Formik
      initialValues={INITIAL_INFO}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, handleReset }) => (
        <CardList>
            <InputTitulo>
                <InputTituloText>Título</InputTituloText>
                <InputTituloTextInput
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                />
            </InputTitulo>

            <CardLineAdd>
                <ButtonAdd >
                    <RectButton 
                    onPress={() => setFieldValue('questions', [...values.questions, createQuestion(values.questions)])}
                    >
                        <Feather name="plus" size={18} color={colors.color_line} />
                    </RectButton>
                </ButtonAdd>
            </CardLineAdd>

            {values.questions.map(({ text }, index) => (
                <Card key={index} >
    
                    <CardHeader>
                    
                        <CardHeaderText
                            placeholder="Escreva sua pergunta aqui ..."
                            value={values.questions[index].question}
                            onBlur={handleBlur(`questions[${index}].question`)}
                            onChangeText={handleChange(`questions[${index}].question`)}
                        />

                    </CardHeader>

                    <CardLine />
                    
                    <CardFooter>

                        <CardFooterSwitch>
                            <Switch
                                trackColor={{ false: colors.bg_switch, true: colors.bg_switch }}
                                thumbColor={colors.bg_switch_false}
                                ios_backgroundColor={colors.bg_switch}
                                onValueChange={handleChange(`questions[${index}].isRequired`)}
                                value={values.questions[index].isRequired}
                            />
                            <CardFooterText>
                                Obrigatória
                            </CardFooterText>
                        </CardFooterSwitch>

                        <CardFooterIcon onPress={() => setFieldValue(`questions[${index}]`, '')}>
                            <Feather name="trash-2" size={20} color={colors.text_regular} />
                        </CardFooterIcon>

                    </CardFooter>
                
                </Card>
            ))}

          <ButtonGoBack>
            <Button
                title="Voltar"
                onPress={handleReset}
                height="34px"
                themeCancel
            />

            <Button 
                title="Salvar"
                onPress={handleSubmit}
                height="34px"
                
            />
            </ButtonGoBack>
        </CardList>
      )}
    </Formik>
  )
};

export default FormkArray;

/**
 * <TextInput
              key={index}
              onChangeText={handleChange(`questions[${index}].text`)}
              onBlur={handleBlur(`questions[${index}].text`)}
              value={values.questions[index].text}
            />
 */