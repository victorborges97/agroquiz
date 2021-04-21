import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import colors from "../styles/colors";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.background};
`

export default function Background({ children, ...rest }) { 
    return(
      <Container {...rest} >
        {children}
      </Container>
    );
}