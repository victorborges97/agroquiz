import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../styles/colors";

import Tabs from "./tab.routes";
import SeeQuestionsAnswered from "../page/SeeQuestionsAnswered";
import AnsweringQuestions from "../page/AnsweringQuestions";
import EditingQuestion from "../page/EditingQuestion";
import Login from "../page/Login";

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
        initialRouteName="Login"
    >
        <stackRoutes.Screen 
            name="Home"
            component={Tabs}
        />

        <stackRoutes.Screen 
            name="AnsweringQuestions"
            component={AnsweringQuestions}
        />

        <stackRoutes.Screen 
            name="SeeQuestionsAnswered"
            component={SeeQuestionsAnswered}
        />

        <stackRoutes.Screen 
            name="EditingQuestion"
            component={EditingQuestion}
        />

        <stackRoutes.Screen 
            name="Login"
            component={Login}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes