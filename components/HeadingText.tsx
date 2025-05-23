import React from "react";
import { Text, TextStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface HeadingTextProps {
  selectedValue: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ selectedValue }) => {
  switch (selectedValue) {
    case "Select":
      return (
        <Text
          style={{
            alignSelf: "center",
            fontSize: RFValue(24),
            fontWeight: "600",
          } as TextStyle}
        >
          Method
        </Text>
      );
    default:
      return (
        <Text
          style={{
            alignSelf: "center",
            fontSize: RFValue(24),
            fontWeight: "600",
          } as TextStyle}
        >
          Method
        </Text>
      );
  }
};

export default HeadingText;
