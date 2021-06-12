/*
@author : Dhanusha Perera
@date : 12/06/2021
*/

const Router = require('@koa/router');
const router = new Router({prefix: '/api/v1/categories'});
const CategoryAPI = require('../api/category.api');
const ObjectID = require('mongodb').ObjectID;

/* get all categories. */
router.get('/', async ctx => {
    try {
        ctx.response.body = await CategoryAPI.getAllCategories();
    } catch (error) {
        ctx.response.status = 500;
    }
});

/* get category by ID. */
router.get('/:id', async ctx => {
    const id = ctx.request.params.id;
    let categoryID;
    try {
        categoryID = ObjectID(id);
    } catch (error) {
        ctx.response.status = 400;
        ctx.response.body = 'Invalid ID detected.';
        return;
    }

    try {
        const result = await CategoryAPI.getCategoryByID(categoryID);
        if (result) {
            ctx.response.status = 200;
            ctx.response.body = result;
            console.log(result);
        } else {
            /* no matching record found. */
            ctx.response.status = 404;
        }
    } catch (error) {
        ctx.response.status = 500;
    }
});

router.post('/', async ctx => {
    const categoryData = ctx.request.body;
    console.log(categoryData);
    try {
        const generatedResult = await CategoryAPI.addCategory(categoryData);
        ctx.response.type = 'application/json';
        ctx.response.status = 201; // created
        ctx.response.body = {
            'generatedId': generatedResult.insertedId
        };
    } catch (error) {
    }
});

/* update category. */
router.put('/:id', ctx => {
    ctx.response.status = 501;
});

/* delete category by ID. */
router.del('/:id', ctx => {
    ctx.response.status = 501;
});

module.exports = router;
