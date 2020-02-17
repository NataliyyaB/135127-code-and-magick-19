'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');


var getRandomArrayItem = function (predefinedArray) {
  var randomItem = Math.floor(Math.random() * predefinedArray.length);
  return predefinedArray[randomItem];
};

var showSetupWindow = function () {
  userDialog.classList.remove('hidden');
};

var getWizards = function () {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: getRandomArrayItem(NAMES) + ' ' + getRandomArrayItem(SURNAMES),
      coatColor: getRandomArrayItem(COATS),
      eyesColor: getRandomArrayItem(EYES)
    };

    wizards.push(wizard);
  }

  return wizards;
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var addElementsToDom = function (elements) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(renderWizard(elements[i]));
  }
  similarListElement.appendChild(fragment);
};

var showSetupSimilar = function () {
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};


showSetupWindow();

var wizards = getWizards();

addElementsToDom(wizards);

showSetupSimilar();
