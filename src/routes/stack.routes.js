import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../styles/colors";

import Tabs from "./tab.routes";
import SeeQuestionsAnswered from "../page/SeeQuestionsAnswered";
import AnsweringQuestions from "../page/AnsweringQuestions";

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}

    >
        <stackRoutes.Screen 
            name="Home"
            component={Tabs}
        />

        <stackRoutes.Screen 
            name="ResponderQuestionario"
            component={AnsweringQuestions}
        />

        <stackRoutes.Screen 
            name="VisualizarQuestionario"
            component={SeeQuestionsAnswered}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes