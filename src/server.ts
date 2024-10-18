import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// JSONのパースを行うためのミドルウェア
app.use(express.json());

// GETメソッド
app.get('/api/hello', (req: express.Request, res: express.Response) => {
    res.send('Hello, world!');
});

// POSTメソッド
app.post('/api/postTest', (req: express.Request, res: express.Response) => {
    interface UserData {
        name: string;
        age: number;
    }
    const { name, age }: UserData = req.body;
    console.log(req.query)
    console.log(req.body)
    res.status(200).json({ message: `Hello, ${name}. You are ${age} years old.` });
});

// サーバーの起動
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});