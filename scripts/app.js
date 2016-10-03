(function () {
'use strict';

angular.module('kidsAbc', [])
.controller('WordsController', WordsController)
.service('WordsService', WordsService);


WordsController.$inject = ['WordsService'];
function WordsController(WordsService) {
  var word = this;

  word.items = WordsService.getItems();

  word.say = function (itemIndex) {
    WordsService.say(itemIndex);
  };
}


function WordsService() {
  var service = this;

  // List of words 
  var items = [
  	{name: "cat"},
    {name:"dog"},
    {name: "elephant"},
    {name: "horse"},
    {name: "penguin"},
    {name: "zebra"},
    {name: "duck"},
    {name: "camel"},
    {name: "cow"},
    {name: "snake"},
    {name: "giraffe"},
    {name: "raccoon"},
    {name: "leopard"},
    {name: "rhinoceros"},
    {name: "lion"},
    {name: "fox"},
    {name: "panda"},
    {name: "kangaroo"},
    {name: "dolphin"},
    {name: "iguana"},
    {name: "koala"},
    {name: "tiger"},
    {name: "owl"},
    {name: "bear"},
    {name: "ant"},
    {name: "emu"},
    {name: "spider"},
    {name: "goat"},
    {name: "frog"},
    {name: "penguin"},
    {name: "wolf"},
    {name: "walrus"},
    {name: "chimpanzee"},
    {name: "fennec"},
    {name: "lynx"},
    {name: "orangutan"}
  ];


  service.say = function (itemIndex) {

  	console.log (items.length);
    responsiveVoice.speak(items[itemIndex].name);
  };

  service.getItems = function (){
  	return items;
  };
 
}

})();