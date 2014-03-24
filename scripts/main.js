(function () {
  var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

  function drawBoxes (height, width, cols, rows) {
    var x, y, half_height, half_width;

    canvas.height = height * rows;
    canvas.width = width * cols;

    half_height = height / 2;
    half_width = width / 2;

    for (y = 0; y < rows; y++) {
      for (x = 0; x < cols; x++) {
        // Draw Middle Line
        context.beginPath();
        context.lineWidth = '2';
        context.strokeStyle = '#dddddd';
        context.moveTo(width * x + half_width, height * y);
        context.lineTo(width * x + half_width, height * (y + 1));
        context.stroke();

        context.beginPath();
        context.lineWidth = '2';
        context.strokeStyle = '#dddddd';
        context.moveTo(width * x, height * y + half_height);
        context.lineTo(width * (x + 1), height * y + half_height);
        context.stroke();

        // Draw Box
        context.beginPath();
        context.lineWidth = '2';
        context.strokeStyle = '#000000';
        context.rect(width * x, height * y, width, height);
        context.stroke();
      }
    }
  }

  document.getElementById('download-btn').addEventListener('click', function (event) {
    this.href = canvas.toDataURL('image/png');
    this.download = "spritesheet.png";
  }, false);

  document.getElementById('generate-btn').addEventListener('click', function (event) {
    var height = parseInt(document.getElementById('height-field').value.trim(), 10),
      width    = parseInt(document.getElementById('width-field').value.trim(), 10),
      cols     = parseInt(document.getElementById('columns-field').value.trim(), 10),
      rows     = parseInt(document.getElementById('rows-field').value.trim(), 10);

    if (!height) return alert('Please enter a valid sprite height.');
    if (!width) return alert('Please enter a valid sprite width.');
    if (!cols) return alert('Please enter a valid number of columns.');
    if (!rows) return alert('Please enter a valid number of rows.');

    drawBoxes(height, width, cols, rows);
  }, false);

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    return false;
  });

  drawBoxes(50, 50, 10, 10);
}());
