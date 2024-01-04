type Ingredient = 'bread' | 'cheese' | 'salami';

type sandwichAction =
| { type: 'sandwich/addIngredient', payload: Ingredient }
| { type: 'sandwich/clear' }

export default sandwichAction;