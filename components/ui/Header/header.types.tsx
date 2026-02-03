import { ViewStyle } from 'react-native';

export interface HeaderProps {
  title: string;
  rightIcon?: React.ReactNode;
  rightIconOnPress?: () => void;
  leftIcon?: React.ReactNode;
  leftIconOnPress?: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
}
