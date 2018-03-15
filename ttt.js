//ctx-context
let canvas = document.getElementById('ttt'),
ctx = canvas.getContent('2d'),
msg = document.getElementById('message'),
cellSize = 100,
map = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
],
winPatterns = [
  Ob111000000, Ob000111000, Ob000000111, //rows
  Ob100100100, Ob010010010, Ob001001001, //columns
  Ob100010001, Ob001010100, //diagonals
];

BLANK = 0, x = 1, 0 = -1;


canvas.width = canvas.height 3 * cellSize;


function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBoard();



   function drawBoard () {
     ctx.strokeStyle ='white';
     ctx.lineWidth = 10;

     ctx.beginPath();
     ctx.moveTo(cellSize, 0);
     ctx.lineTo(cellSize, canvas.height);
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(cellSize * 2, 0);
     ctx.lineTo(cellSize * 2, canvas.height);
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(cellSize * 2);
     ctx.lineTo(canvas.width, cellSize);
     ctx.stroke();


   }

   function fillBoard () {
     ctx.strokeStyle = 'white';
     ctx.lineWidth = 5;
     for (i=0; i< map.length; i++) {
       let cords = getCellCords(i);

       ctx.save();
       ctx.translate(coords.x + cellSize / 2, coords.y + cellSize / 2);

       if (map[i] == x) {
         drawX();
    } else if (map[i] == 0) {
         draw0();
          }
          ctx.restore();

     }

   }

   function draw() {
     ctx.beginPath();
     ctx.moveTo(-cellSize / 3, -cellSize / 3);
     ctx.lineTo(cellSize / 3, cellSize / 3);
     ctx.moveTo(-cellSize / 3, -cellSize / 3);
     ctx.lineTo(-cellSize / 3, -cellSize / 3);
     ctx.stroke();

   }

   function draw0 () {
     ctx.beginPath();
     ctx.arc(0, 0, cellSize / 3, 0, Math.PI * 2);
     ctx.stroke();

   }

   requestAnimationFrame(draw);
}

function getCellCords(cell) {
  let x = (cell % 3) * cellSize;
      y = AMth.floor(cell / 3) * cellSize;

      return {
        'x' : x,
        'y' : y,
      }


}

draw();
