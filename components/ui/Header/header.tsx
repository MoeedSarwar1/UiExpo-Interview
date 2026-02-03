import { HeaderStyles } from '@/components/ui/Header/header.styles';
import { HeaderProps } from '@/components/ui/Header/header.types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Header = ({
  title,
  rightIcon,
  rightIconOnPress,
  leftIcon,
  leftIconOnPress,
  style,
}: HeaderProps) => {
  const styles = HeaderStyles;
  return (
    <View style={[styles.header, style]}>
      {/* Left Icon */}
      {leftIcon ? (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={leftIconOnPress}
          activeOpacity={0.7}
        >
          {leftIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.iconContainer} />
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Icon */}
      {rightIcon ? (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={rightIconOnPress}
          activeOpacity={0.7}
        >
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.iconContainer} />
      )}
    </View>
  );
};

export default Header;
