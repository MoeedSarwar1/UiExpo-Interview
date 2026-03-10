import { variantStyles, weightStyles } from './text.styles';
import { TextVariant, TextWeight } from './text.types';

/**
 * Get computed style for a specific variant
 * @param variant - Text variant style
 * @returns Variant style object
 */
export const getVariantStyle = (variant: TextVariant) => {
  return variantStyles[variant];
};

/**
 * Get computed style for a specific font weight
 * @param weight - Font weight type
 * @returns Weight style object
 */
export const getWeightStyle = (weight: TextWeight) => {
  return weightStyles[weight];
};

/**
 * Merge text styles with custom style
 * @param variant - Text variant
 * @param weight - Font weight
 * @param color - Text color
 * @param customStyle - Custom style override
 * @returns Merged style object
 */
export const mergeTextStyles = (
  variant: TextVariant,
  weight: TextWeight,
  color: string,
  customStyle?: any
) => {
  const variantStyle = getVariantStyle(variant);
  const fontWeightStyle = getWeightStyle(weight);

  return [
    {
      fontSize: variantStyle.fontSize,
      lineHeight: variantStyle.lineHeight,
      color,
      fontWeight: fontWeightStyle.fontWeight,
    },
    customStyle,
  ];
};
