import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailitem, textStyle]}>{duration} m</Text>
      <Text style={[styles.detailitem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailitem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailitem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
