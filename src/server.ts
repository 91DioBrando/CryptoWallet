import express from 'express';
import { dataSource } from './data-source';
import { directTransfer } from './directTransfer';

const app = express();
app.use(express.json());

// 绑定 API 路由
app.post('/transfer', directTransfer);

// 连接数据库 & 启动服务器
dataSource.initialize().then(() => {
    console.log('Database connected');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}).catch((error) => console.error('Database connection failed:', error));