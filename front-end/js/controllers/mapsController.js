angular
  .module('logging')
  .controller('MapsController', MapsController);

function MapsController() {
  var self = this;

  self.countries = {
    IN:'#33ccff',
    DK:'#33ccff',
    KP:'#33ccff',
    IR:'#33ccff',
    IQ:'#33ccff',
    PK:'#33ccff',
    UZ:'#33ccff',
    TM:'#33ccff',
    EG:'#33ccff',
    AZ:'#33ccff',
    TJ:'#33ccff',
    KG:'#33ccff',
    SY:'#33ccff',
    JO:'#33ccff',
    KZ:'#33ccff',
    LK:'#33ccff',
    US:'#33ccff'
  }

  self.map = 
  $('#world-map').vectorMap({
    map: 'world_mill_en',
   series: {
     regions: [{
       values: self.countries
     }]
   }
   });
}

