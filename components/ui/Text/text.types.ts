export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'label';
export type TextWeight = 'normal' | 'bold' | 'semibold';

export interface CustomTextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: string;
  children?: React.ReactNode;
  style?: any;
  numberOfLines?: number;
}
