import styled from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.background};
`;