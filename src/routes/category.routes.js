/*
@author : Dhanusha Perera
@date : 12/06/2021
*/

const Router = require('@koa/router');
const router = new Router({prefix: '/api/v1/categories'});

/* get all categories. */
router.get('/', ctx => {
    ctx.response.body = 'get all works!';
});

/* get category by ID. */
router.get('/:id', ctx => {
    ctx.response.body = 'get by id works!';
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
