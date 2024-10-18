import axios from 'axios';

// GETリクエストの関数
async function getData() {

  interface Resdata {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  try {
      const { data } = (await axios.get<Resdata>('https://jsonplaceholder.typicode.com/posts/1'));
      console.log('GETリクエストの結果:', data);
  } catch (error) {
      console.error('GETリクエストのエラー:', error);
  }
}

async function postData() {
  const postData = {
    title: 'foo',
    body: 'bar',
    userId: 2
  };

  try {
      const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
      console.log('POSTリクエストの結果:', data);
  } catch (error) {
      console.error('POSTリクエストのエラー:', error);
  }
}

// getData();
postData();