import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));
  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
