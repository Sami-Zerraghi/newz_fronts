import React from 'react'
import Header from './Header'
import Article from './Article'
import TopArticle from './TopArticle';

function Home() {
const articles = [];
for(let i = 0 ; i<8 ; i++){
  articles.push(<Article/>);
}

  return (
    <>
    {articles}
    
    </>
  )
}

export default Home