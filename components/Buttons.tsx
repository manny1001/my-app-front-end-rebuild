import { Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
interface BigButtonProps {
  background?: string;
  titleStyle?: object;
  activeOpacity?: number;
  onPress?: () => void;
  containerStyle?: object;
  title: string;
  buttonStyle?: object;
  disabled?: boolean;
}

const BigButton = ({
  background,
  titleStyle,
  activeOpacity,
  onPress,
  containerStyle,
  title,
  buttonStyle,
  disabled,
}: BigButtonProps) => (
  <View
    style={{
      alignSelf: "stretch",
      flexDirection: "row",
      justifyContent: "center",
    }}
  >
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={[
        containerStyle,
        {
          shadowColor: "rgba(0,0,0, .4)", 
          shadowOffset: { height: 3, width: 3 }, 
          shadowOpacity: 0.25, 
          shadowRadius: 1, 
          backgroundColor: "#4c09b7",
          height: hp(7),
          justifyContent: "center",
          borderRadius: wp(20),
          flexDirection: "row",
          alignSelf: "stretch",
          width: "50%",
          // display: "hidden", // Removed invalid value
        },
      ]}
    >
      <Text
        style={{
          fontWeight: "bold",
          alignSelf: "center",
          color: "white",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

export default BigButton;
