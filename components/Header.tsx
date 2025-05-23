import styles from "@/app/styles";
import React, { ReactNode } from "react";
import { Text, View } from "react-native";

interface TopHeaderProps {
  Opacityvalue?: number;
  backColor?: string;
  LeftComponent?: ReactNode;
  CenterComponent?: ReactNode;
  RightComponent?: ReactNode;
}

const TopHeader: React.FC<TopHeaderProps> = ({
  Opacityvalue,
  backColor,
  LeftComponent,
  CenterComponent,
  RightComponent,
}) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>YoChauffeur</Text>
      <Text style={styles.HeaderSubText}>self-driven , customer service</Text>
    </View>
  );
};

export default TopHeader;
