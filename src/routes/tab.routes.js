import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomePage from "../page/Home/index";
import AddQuestions from "../page/AddingQuestions";
import AnsweringQuestions from "../page/AnsweringQuestions";

const tabsRoutes = createBottomTabNavigator();

const AppRoutes = () => (
    <tabsRoutes.Navigator>
        <tabsRoutes.Screen 
            name="Questionarios"
            component={HomePage}
            options={{
                title: "Questionários"
            }}
        />

        <tabsRoutes.Screen 
            name="Add"
            component={AddQuestions}
            options={{
                title: "AddQuestions"
            }}
        />

        <tabsRoutes.Screen 
            name="Respondidos"
            component={AnsweringQuestions}
            options={{
                title: "Respondidos"
            }}
        />

    </tabsRoutes.Navigator>
)

export default AppRoutes