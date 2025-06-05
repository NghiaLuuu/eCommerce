require('dotenv').config();
const cluster = require('cluster');
const os = require('os');
const app = require('./src/app');

const PORT = process.env.PORT || 3055;

//1 cluster
app.listen( PORT, () => {
    console.log(`WSV ecommerce start at http://localhost:${PORT}`)
});


//16 cluster
// if (cluster.isMaster) {
//   const numCPUs = os.cpus().length;
//   console.log(`Master ${process.pid} is running`);
//   console.log(`Starting server on port http://localhost:${PORT}`);
//   console.log(`Forking ${numCPUs} workers...`);

//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died. Forking a new one...`);
//     cluster.fork();
//   });

// } else {
//   app.listen(PORT, () => {
//     // console.log(`Worker ${process.pid} started`);
//   });
// }
