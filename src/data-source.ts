import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'your_user_name',
    password: 'password',
    database: 'web3wallet',
    entities: [__dirname + '/entity/dto/*.ts'],
    synchronize: true,
});