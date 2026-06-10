const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');

const videos = [
  {
    titulo: 'Dança Viral',
    criador: 'Maria',
    descricao: 'Trend do momento',
    visualizacoes: 5000,
    curtidas: 1200,
    hashtag: '#viral',
    urlVideo: 'https://www.netflix.com/title/70305922',
    thumbnail: 'https://picsum.photos/300/200'
  }
];

app.get('/', (req, res) => {
  res.render('home2');
});

app.get('/videos', (req, res) => {
  res.render('videos', {
    videos
  });
});

app.get('/videos/cadastrar', (req, res) => {
  res.render('cadastrarVideo');
});

app.post('/videos', (req, res) => {

  const {
    titulo,
    criador,
    descricao,
    visualizacoes,
    curtidas,
    hashtag,
    urlVideo,
    thumbnail
  } = req.body;

  videos.push({
    titulo,
    criador,
    descricao,
    visualizacoes,
    curtidas,
    hashtag,
    urlVideo,
    thumbnail
  });

  res.redirect('/videos');
});

app.listen(3000, () => {
  console.log('Servidor em execução');
});