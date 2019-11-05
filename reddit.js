var fs = require('fs')
var rp = require('request-promise')

var options = {
  uri: 'https://www.reddit.com/r/popular.json',
  json: true
}

var articlesArray = []

rp(options)
  .then((article) => {
    for (i = 0; i < 25; i++) {
      var data = article.data.children[i].data;
      // console.log(`title: '${data.title}', author: '${data.author}', url: '${data.url}'`);
      var feed = { title: data.title.toString(), author: data.author.toString(), url: data.url.toString() };
      articlesArray.push(feed);
      // console.log(articlesArray);

      fs.writeFile('popular-articles.json', JSON.stringify(articlesArray), (err) => {
        console.log('write finished', err)
      })

    }   
  })
  .catch((err) => {
      // API call failed...
      console.log('call failed', err);
  })

  

  
