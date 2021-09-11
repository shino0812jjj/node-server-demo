var express = require('express');
var router = express.Router();

// http://localhost:3001

// GET: /todos
// - DBに保存されているtodoの一覧を返す

// POST: /todo
// - DBにtodoを1個保存する

// GET: /usesr/1
// - user_idが1のユーザ情報を返す

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', (req, res) => {
  // DBからidがreq.query.idの値をSELECTする

  res.json({
    id: req.query.id,
    name: 'kmtym1998',
    now: new Date(),
  });
});

router.post('/sample', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;

  res.json({
    id,
    name,
    now: new Date(),
  });
});

router.get('/chars', (req, res) => {
  const name = req.query.name;

  if (!name) {
    res.status(400).json({
      message: 'nameを入力してください',
    });
  }

  const allChars = ['H', '知', '熱', '金', '木', '水'];
  const allCharsLength = allChars.length;
  let characters = [];

  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * allCharsLength);
    const selectedChar = allChars[random];
    characters.push(selectedChar);
  }

  const count = Math.floor(Math.random() * 1000);

  res.json({
    characters,
    name,
    count,
  });
});

module.exports = router;
