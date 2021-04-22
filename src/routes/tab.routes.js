import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import HomePage from "../page/Home/index";
import AddQuestions from "../page/AddingQuestions";
import AnsweringQuestions from "../page/AnsweringQuestions";
import colors from "../styles/colors";

const tabsRoutes = createBottomTabNavigator();

const AppRoutes = () => (
    <tabsRoutes.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: "absolute",
                bottom: 10,
                left: 10,
                right: 10,
                elevation: 1,
                backgroundColor: colors.bg_botton_bar,
                borderRadius: 10,
                height: 50
            }
        }}
    >
        <tabsRoutes.Screen 
            name="Questionarios"
            component={HomePage}
            options={{
                title: "",
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon title="Questionários" icon="list" focused={focused} />
                )
            }}
        />

        <tabsRoutes.Screen 
            name="Add"
            component={AddQuestions}
            options={{
                title: "",
                tabBarIcon:({ focused })=>(  
                    <CustomTabBarAdd icon="plus" focused={focused} />  
                )
            }}
        />

        <tabsRoutes.Screen 
            name="Respondidos"
            component={AnsweringQuestions}
            options={{
                title: "",
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon title="Respondidos" icon="file-text" focused={focused} />
                )
            }}
        />

    </tabsRoutes.Navigator>
)

export default AppRoutes;

const CustomTabBarIcon = ({ title, icon, focused }) => (
    <View style={{ justifyContent: "center", alignItems: "center"}}>
        <Feather name={icon} size={25} color={focused ? "#FFFFFF" : "#FFFFFF60"}  />
        <Text
            style={{
                fontSize: 12,
                color: focused ? "#FFFFFF" : "#FFFFFF60",
            }}
        >
            {title}
        </Text>
    </View>
)

const CustomTabBarAdd = ({ icon, focused  }) => (
    <View
        style={{
            top: -10,
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <RectButton
        style={{
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            height: 70,
            width: 70,
            borderRadius: 35,
            backgroundColor: "#FFFFFF",
            borderColor: colors.bg_botton_bar,
        }}>
            <Feather name={icon} color={focused ? "#704282" : `#70428270`} size={32}/>
        </RectButton>
    </View>
)