function Thermostat(){
    this.temperature = 20;
    this.MinimumTemp = 10;
    this.SaveMode = true;

Thermostat.prototype.getCurrentTemp = function() {
    return this.temperature
    };

Thermostat.prototype.isSaveModeOn = function() {
        return this.SaveMode
    };

Thermostat.prototype.turnOffSaveMode = function() {
        this.SaveMode = false;
    };

Thermostat.prototype.up = function() {
    if ((this.SaveMode = true) && (this.getCurrentTemp() === 25)) {
        return;
    }
    this.temperature += 1

};

Thermostat.prototype.isMinimumTemp = function() {
    return this.temperature === this.MinimumTemp
};

Thermostat.prototype.down = function(){
    if (this.isMinimumTemp()){
        return;
    }
    this.temperature -= 1
};

Thermostat.prototype.turnOnSaveMode = function() {
    this.SaveMode = true;
};
};