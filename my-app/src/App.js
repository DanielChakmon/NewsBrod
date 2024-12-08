import {useEffect, useState} from 'react';
import './App.css';
import NewsExpense from './components/NewsExpense';

const token = "" //for Effi: enter the token from the txt file here

function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const fetchArticles = async() => {
      try{
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}`)
        const data = await response.json()
        const formatArticles = data.articles.map(article => ({
          title: article.title,
          urlToImage: article.urlToImage,
          url: article.url,
          publishedAt: article.publishedAt
        }))
        setArticles(formatArticles)
      } catch(error){
        console.log(error)
      }
    }
    fetchArticles()
  },[])

  return (
    <div className="App">
      <NewsExpense item= {articles}/>
    </div>
  );
}

export default App;
