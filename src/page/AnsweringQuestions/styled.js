import styled from "styled-components/native";
import colors from "../../styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 17px;
  background: ${colors.background};
  justify-content: space-around;
`;

export const ContainerHeader = styled.View`
    width: 100%;
    align-items: center;
    /* padding-top: 80px; */
    padding-bottom: 10px;
`;

export const TextHeader = styled.Text`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    line-height: 23px;
    color: ${colors.text_bold_agro};
`;

export const SubHeader = styled.Text`
    font-size: 16px;
    line-height: 19px;
    text-align: center;
`;

export const ContainerQuestion = styled.View`
    width: 100%;
`;

export const ContainerQuestionAnsered = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    width: 100%;
`;

export const CardQuestion = styled.View.attrs({
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
})`
    width: 100%;
    padding: 23px;
    justify-content: ${({Answered}) => Answered ? "space-evenly" : "space-between" };
    background: ${colors.white};
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: ${({Answered}) => Answered ? "0px" : "20px" };;
    
`;

export const Question = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.text_regular};
`;

export const Answer = styled.TextInput.attrs({
    multiline: true,
    placeholder: "Escreva sua resposta aqui...",
    require: true,
    textAlignVertical: "top",
})`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.text_regular};

    margin-top: 20px;
    min-height: 180px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.color_line};
`;

export const Answered = styled.Text.attrs({
    textAlignVertical: "top",
})`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.text_regular};

    margin-top: 20px;
    border-color: ${colors.text_regular};
    border-width: 1px;
    border-radius: 5px;
    padding: 10px;
`;

export const ContainerButtonQuestion = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const ButtonGoBack = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
`;

// export const Container = styled.View``;
// export const Container = styled.View``;

  