// import { React, View, Text, wp, hp } from "../api/constants";

import { Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const PhoneAuthImage = () => {
  return (
    <View
      style={{
        width: wp(90),
        height: hp(60),
        alignSelf: "center",
        borderWidth: wp(0.5),
        justifyContent: "center",
      }}
    >
      <Text style={{ alignSelf: "center" }}>Image</Text>
    </View>
  );
};

export default PhoneAuthImage;
