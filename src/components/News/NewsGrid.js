import React from 'react'
import {Grid,Card} from '@material-ui/core'
import News from './News'
const NewsGrid = ({news}) => {
  console.log(news)
    return (
      news ? (
        <Grid container spacing={3} justify="center"> 
        {
          news.map((item,id) => 
            <Grid item component={Card}xs={12} sm={3}  >
              <News headlines={item.title} 
              image={item.urlToImage}
              source={item.source.name}
              content={item.content}
              description={item.description}
              publishedAt={item.publishedAt}
              url={item.url}
              key={id}
              />
            </Grid>
          )
        }
          </Grid>
      ):<h1>Loading</h1>
  
    )
}

export default NewsGrid
