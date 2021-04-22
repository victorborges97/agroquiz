import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserProvider from "../context";

import StackRoutes from "./stack.routes";

const Routes = () => (
    <NavigationContainer>
        <UserProvider>
            <StackRoutes />
        </UserProvider>
    </NavigationContainer>
)

export default Routes;