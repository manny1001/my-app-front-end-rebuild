import React from "react";
import {
  AcceptTermsButton,
  AcceptTermsImage,
  BigButton,
  styles,
  Text,
  TouchableOpacity,
  View,
} from "../constants/index.js";

interface AcceptTandCsProps {
  navigation: {
    navigate: (screen: string) => void;
  };
  context: {
    dispatch: (action: { type: string }) => void;
  };
}

interface AcceptTandCsState {
  CellNumber: string;
  isAccepted: boolean;
}

class AcceptTandCs extends React.Component<
  AcceptTandCsProps,
  AcceptTandCsState
> {
  constructor(props: AcceptTandCsProps) {
    super(props);
    this.state = { CellNumber: "", isAccepted: false };
  }

  render() {
    return (
      <View style={styles.container}>
        <AcceptTermsImage />
        <View style={styles.AcceptTandCs}>
          <AcceptTermsButton
            isAccepted={this.state.isAccepted}
            onPress={() => {
              this.setState({ isAccepted: !this.state.isAccepted });
            }}
          />
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <Text style={styles.heading5}>Accept Terms and Conditions</Text>
          </TouchableOpacity>
        </View>

        <BigButton
          disabled={!this.state.isAccepted}
          activeOpacity={!this.state.isAccepted ? 2 : 0.3}
          onPress={() => {
            this.props.navigation.navigate("PhoneAuth");
            this.props.context.dispatch({
              type: "AcceptedTCs",
            });
          }}
          title={"Continue"}
        />
      </View>
    );
  }
}

export default AcceptTandCs;
