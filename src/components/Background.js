import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import colors from "../styles/colors";

export default function Background({ children, stack, ...rest }) { 

    const Container = styled(SafeAreaView)`
      flex: 1;
      background-color: ${colors.background};
      margin-bottom: ${stack ? "0px" : "70px"};
    `

    return(
      <Container {...rest} >
        {children}
      </Container>
    );
}