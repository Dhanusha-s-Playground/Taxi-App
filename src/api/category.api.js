/*
@author : Dhanusha Perera
@date : 12/06/2021
*/

const CategoryDAO = require('../dal/category.dao');

/* get all categories. */
const getAllCategories = () => {
    return CategoryDAO.getAllCategories();
};

/* get category by ID. */
const getCategoryByID = (id) => {
    return CategoryDAO.getCategoryByID(id);
};

/* create a new category. */
const addCategory = (categoryObject) => {
    return CategoryDAO.addCategory(categoryObject);
};

/* update a existing category. */
// const updateCategory = () => {
//
// };

/* delete a category by ID. */
// const deleteCategoryByID = () => {
//
// };

/* exposing methods. */
module.exports = {
    getAllCategories,
    getCategoryByID,
    addCategory
};
