import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealsItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Bhuna",
    description: "Finest chicken and smoked in coal",
    price: 250,
  },
  {
    id: "m2",
    name: "Chicken Biryani",
    description: "A Mughal specialty!",
    price: 180,
  },
  {
    id: "m3",
    name: "Behrouj Biryani",
    description: "Rajasthani, spicy and much more",
    price: 220,
  },
  {
    id: "m4",
    name: "Dall Tadka",
    description: "No spec",
    price: 150,
  },
  {
    id: "m5",
    name: "Matka Chicken",
    description: "Made in classic vessel",
    price: 190,
  },
  {
    id: "m6",
    name: "Tandoori Chicken",
    description: "Hot , spicy and finger licking",
    price: 175,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
