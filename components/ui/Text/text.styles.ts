import { TextVariant, TextWeight } from './text.types';

export const variantStyles: Record<
  TextVariant,
  { fontSize: number; lineHeight: number }
> = {
  h1: { fontSize: 32, lineHeight: 40 },
  h2: { fontSize: 24, lineHeight: 32 },
  h3: { fontSize: 20, lineHeight: 28 },
  subtitle: { fontSize: 18, lineHeight: 24 },
  body: { fontSize: 14, lineHeight: 21 },
  caption: { fontSize: 12, lineHeight: 18 },
  label: { fontSize: 13, lineHeight: 19 },
};

export const weightStyles: Record<
  TextWeight,
  { fontWeight: '400' | '600' | '700' }
> = {
  normal: { fontWeight: '400' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
};
