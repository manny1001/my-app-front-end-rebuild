import React from "react";
import TopHeader from "../../components/Header";
import { AuthStackNavigator, PhoneAuth } from "../constants/index";
import AcceptTandCs from "../screens/TermsAndConditions";
interface AuthenticationStackProps {
  context: any;
}


const AuthenticationStack: React.FC<AuthenticationStackProps> = ({
  context,
}) => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="AcceptTandCs"
        component={(props: any) => (
          <AcceptTandCs {...props} context={context} />
        )}
        options={{ header: () => <TopHeader /> }}
      />
      <AuthStackNavigator.Screen
        name="PhoneAuth"
        component={(props: any) => <PhoneAuth {...props} context={context} />}
        options={{ header: () => <TopHeader /> }}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthenticationStack;
