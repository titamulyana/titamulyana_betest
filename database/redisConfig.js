// import { createClient } from 'redis';
const { createClient } = require('redis')

const redisClient = createClient({
    password: '5497Tp39ar1yrjJCEAMjmLNDH3lhV7OM',
    database: 0,
    socket: {
        host: 'redis-15373.c252.ap-southeast-1-1.ec2.cloud.redislabs.com',
        port: 15373,
    }
})

redisClient.on('connect', () => {
  console.log('connex to redis');
});

async function main() {
  await redisClient.connect();
}

main()

module.exports = redisClient