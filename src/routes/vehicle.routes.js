/*
@author : Dhanusha Perera
@date : 13/06/2021
*/

const Router = require('@koa/router');
const router = new Router({prefix: '/api/v1/vehicles'});
const VehicleAPI = require('../api/vehicle.api');
// const ObjectID = require('mongodb').ObjectID;

/* get all vehicles. */
router.get('/', async ctx => {
    try {
        ctx.response.type = 'application/json';
        ctx.response.body = await VehicleAPI.getAllVehicles();
    } catch (error) {
        ctx.response.status = 500;
    }
});

/* get vehicle by ID. */
router.get('/:id', async ctx => {
    const id = ctx.request.params.id;

    /* TODO: validate ID. */

    try {
        const result = await VehicleAPI.getVehicleByID(id);
        if (result) {
            ctx.response.type = 'application/json';
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
    const vehicleData = ctx.request.body;
    console.log(vehicleData);
    /* TODO: validate data. */

    try {
        const generatedResult = await VehicleAPI.addVehicle(vehicleData);
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
