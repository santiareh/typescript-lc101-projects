"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumMass = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var mass = items_1[_i];
            sumMass += mass.massKg;
        }
        return sumMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var sumAstronauts = this.sumMass(this.astronauts);
        var sumCargo = this.sumMass(this.cargoItems);
        return sumAstronauts + sumCargo;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
