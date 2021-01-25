(function () {
    'use strict';

    angular.module('app', [])
        .controller('buycontroller', buycontroller)
        .controller('boughtcontroller', boughtcontroller)
        .service('itemsservice', itemsservice);

    buycontroller.$inject = ['itemsservice'];
    function buycontroller(service) {
        var controller = this;
        controller.tobuyitems = service.gettobuyitems();

        controller.addtobought = function (itemIndex) { 
            service.addboughtitem(itemIndex);
        }
    };

    boughtcontroller.$inject = ['itemsservice'];
    function boughtcontroller(service) {
        var controller = this;
        controller.boughtItems = service.getboughtitems();
    };

    function itemsservice() {
        var service = this;

        var boughtitems = [];

        var tobuyitems = [
            new item("Конструктор", 1),
            new item("Пазли", 6),
            new item("Іграшковий пістолет", 4),
            new item("Пожежна машина", 1),
            new item("Ведмедик", 3)          
        ];
        


        service.gettobuyitems = function () {
            return tobuyitems;
        };

        service.getboughtitems = function () {
            return boughtitems;
        };
    };


    class item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

})();