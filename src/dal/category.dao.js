/*
@author : Dhanusha Perera
@date : 12/06/2021
*/

const DatabaseService = require('../service/database.service');
const databaseService = new DatabaseService('category');

/* get all categories. */
const getAllCategories = () => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await databaseService.findAll());
        } catch (error) {
            reject(error);
        }
    });
};

/* get category by ID. */
const getCategoryByID = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await databaseService.findById(id));
        } catch (error) {
            reject(error);
        }
    });
};

/* add new category. */
const addCategoryD = (categoryObject) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await databaseService.save(categoryObject));
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllCategories,
    getCategoryByID,
    addCategoryD
};

