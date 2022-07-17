export default class Meal {
  constructor(
    public id: string,
    public categories: string[],
    public title: string,
    public affordability: "affordable" | "pricey" | "luxurious",
    public complexity: "simple" | "challenging" | "hard" | "",
    public imageUrl: string,
    public duration: number,
    public ingredients: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean
  ) {}
}
