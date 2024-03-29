import COLORS from "@/constants/public/COLORS";
import { StyleSheet } from "react-native";

const Styles = {
  unconditionalStyles: StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: COLORS.primary,
    },
    smallText: {
      color: COLORS.smTxt,
    },
    centerDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }),
  conditionalStyles: () => StyleSheet.create({}),
};

export default Styles;
