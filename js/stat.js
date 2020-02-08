'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var GAP = 10;
var GAP_INNER = 20;
var CHART_HEIGHT = 150;
var FONT_GAP = 10;
var TEXT_HEIGHT = 15;
var SCORE_HEIGHT = 25;
var BAR_WIDTH = 40;
var BAR_STEP = 50;

var barMaxHeight = CHART_HEIGHT - SCORE_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var rand = function (min, max) {
  return min + Math.random() * (max - min);
};

var getRandomColor = function () {
  var s = rand(0, 100);
  return 'hsl(235,' + s + '%, 50%)';
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X - GAP, CLOUD_Y - GAP, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBase = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_INNER, CLOUD_Y + GAP_INNER + 10);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_INNER, CLOUD_Y + GAP_INNER + 30);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_INNER + (BAR_WIDTH + BAR_STEP) * i, CLOUD_HEIGHT - GAP_INNER);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP_INNER + (BAR_WIDTH + BAR_STEP) * i, CLOUD_HEIGHT - GAP_INNER - TEXT_HEIGHT - FONT_GAP, BAR_WIDTH, -((barMaxHeight * times[i]) / maxTime));
    } else {
      ctx.fillStyle = getRandomColor();
      ctx.fillRect(CLOUD_X + GAP_INNER + (BAR_WIDTH + BAR_STEP) * i, CLOUD_HEIGHT - GAP_INNER - TEXT_HEIGHT - FONT_GAP, BAR_WIDTH, -((barMaxHeight * times[i]) / maxTime));
    }
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_INNER + (BAR_WIDTH + BAR_STEP) * i, CLOUD_HEIGHT - GAP_INNER - TEXT_HEIGHT - FONT_GAP * 2 - ((barMaxHeight * times[i]) / maxTime));
  }
};
