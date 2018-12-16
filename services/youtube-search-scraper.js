const cheerio = require('react-native-cheerio');


const URL_QUERY_URL = 'https://youtube.com/results/?search?search_query=';

export class YTScraper {
    static getPageFromYT = async (queryString) => {
        console.log('hey')
        let queryURL = YTScraper.getFullQueryResultURL(queryString);
        let htmlData = await fetch(queryURL)
          .then(response => response.text())
          .catch(err => {
              console.log(err);
          });
          console.log('extracting data from html')
          let data = YTScraper.extractDataFromHTML(htmlData);
    }

    static extractDataFromHTML = (html) => {
        const $ = cheerio.load(html);
        
        let divs = $('ytd-video-renderer');
        console.log(divs);
    }

    static getFullQueryResultURL = (queryString) => {
        return URL_QUERY_URL + queryString;
        
    }
}