const foodList = require('../data/foodList.json');

class Food {
  static getFoodList() {
    return foodList;
  }

  static getFoodById(foodId) {
    return foodList.filter(food => food.id.toString() === foodId.toString());
  }

  static getListFoodById(listFood) {
    return foodList.filter(food => listFood.includes(food.id));
  }

  static getFoodByCategoryId(categoryId) {
    const response = foodList.filter(
      food => food.category_id.toString() === categoryId.toString()
    );

    return response;
  }

  static getListFoodByCategoryId(listCategoryId) {
    const response = foodList.filter(
      food => listCategoryId.includes(food.category_id)
    );

    return response;
  }
}

module.exports = Food;
