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
export const CardQuestion = styled.View`
    width: 100%;
    padding: 23px;
    justify-content: space-between;
    background: ${colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
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

export const ButtonGoBack = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
`;

// export const Container = styled.View``;
// export const Container = styled.View``;

  