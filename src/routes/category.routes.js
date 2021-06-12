/*
@author : Dhanusha Perera
@date : 12/06/2021
*/

const Router = require('@koa/router');
const router = new Router({prefix: '/api/v1/categories'});
const CategoryAPI = require('../api/category.api');

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
    try {
        const result = await CategoryAPI.getCategoryByID(id);
        if (result) {
            ctx.response.status = 200;
            ctx.response.body = result;
            console.log(result);
        } else {
            /* no matching user found. */
            ctx.response.status = 404;
        }
    } catch (error) {
        ctx.response.status = 500;
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
