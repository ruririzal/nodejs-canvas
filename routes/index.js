var express = require('express');
var router = express.Router();


router.get('/canvas', function(req, res, next){
  let assd='asdg';
  res.send(assd);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  const { createCanvas, loadImage } = require('canvas')
  const canvas = createCanvas(200, 200)
  const ctx = canvas.getContext('2d')

  // Write "Awesome!"
  ctx.font = '30px Impact'
  ctx.rotate(0.1)
  ctx.fillText('Awesome!', 50, 100)

  // Draw line under text
  var text = ctx.measureText('Awesome!')
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath()
  ctx.lineTo(50, 102)
  ctx.lineTo(50 + text.width, 102)
  ctx.stroke()

  // Draw cat with lime helmet
  loadImage('public/images/a.jpg').then((image) => {
    ctx.drawImage(image, 50, 0, 70, 70)

    // console.log('<img src="' + canvas.toDataURL() + '" />')
    res.render('index', { title: 'Express', img : canvas.toDataURL() });
  })
});
module.exports = router;
