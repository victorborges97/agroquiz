import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../styles/colors";

import HomePage from "../page/Home/index";
import Pagina2 from "../page/Pagina2";

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
            name="HomePage"
            component={HomePage}
        />

        <stackRoutes.Screen 
            name="Pagina2"
            component={Pagina2}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes