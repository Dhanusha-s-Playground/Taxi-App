const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaCors = require('@koa/cors');

const dotenv = require('dotenv').config({path: 'resources/.env'});
require('./util/database.util'); // load database.util

if (dotenv.error) {
    throw dotenv.error;
}

const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;
const CategoryRoutes = require('./routes/category.routes');
const VehicleRoutes = require('./routes/vehicle.routes');

if (cluster.isMaster) {
    console.log(`Number of CPUs is ${totalCPUs}`);
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log('Let\'s fork another worker!');
        cluster.fork();
    });

} else {
    const app = new Koa();
    /* enable CORS. */
    app.use(KoaCors());
    /* enable koa-body. */
    app.use(KoaBody({}));
    console.log(`Worker ${process.pid} started`);

    app.use(CategoryRoutes.routes()).use(CategoryRoutes.allowedMethods());
    app.use(VehicleRoutes.routes()).use(VehicleRoutes.allowedMethods());

    /* testing purposes. */
    app.use(ctx => {
        console.log('koa works!');
        ctx.response.body = 'Hello Koa!';
    });

    app.listen(process.env.PORT_NO, (err) => {
        if (err) {
            console.error(`Something went wrong when starting the server.`, err);
        } else {
            console.log(`Server started successfully at port no: ${process.env.PORT_NO}`);
        }
    });
}

