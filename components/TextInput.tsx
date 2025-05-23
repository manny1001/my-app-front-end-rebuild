import React from "react";
import { TextInput as TEXTINPUT, TextInputProps } from "react-native-paper";

export interface InputProps extends TextInputProps {}

export const Input: React.FC<InputProps> = ({
  style,
  onChangeText,
  ...rest
}) => (
  <TEXTINPUT
    mode="outlined"
    style={style}
    onChangeText={onChangeText}
    selectionColor="blue"
    {...rest}
  />
);

export default TEXTINPUT;
