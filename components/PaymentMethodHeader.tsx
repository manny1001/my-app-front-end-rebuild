import React from "react";
// import { HeadingText, MethodPicker } from  "../constants/index.js";
// import { View } from "../constants/index";

interface PaymentMethodHeaderProps {
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
}

const PaymentMethodHeader: React.FC<PaymentMethodHeaderProps> = ({
  selectedValue,
  onValueChange,
}) => {
  return (
    <></>
    // <View
    //   style={{
    //     flexDirection: "row",
    //   }}
    // >
    //   {/* <HeadingText selectedValue={selectedValue} /> */}
    //   {/* {selectedValue !== "Select" && (
    //     <MethodPicker
    //       selectedValue={selectedValue}
    //       onValueChange={(itemValue: string) => onValueChange(itemValue)}
    //     />
    //   )} */}
    // </View>
  );
};

export default PaymentMethodHeader;
