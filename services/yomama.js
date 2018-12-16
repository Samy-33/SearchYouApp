export class YoMamaService {
    static getRandomYoMamaJoke = async () => {
        let yomamaJson = await fetch('https://api.yomomma.info', {
            method: 'GET'
        })
          .then(response => response.json())
          .catch(err => {
              console.log(err);
          });
        
          return yomamaJson.joke;
    }
}