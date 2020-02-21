function Thermostat(){
    this.DefaultTemp = 20;
    this.temperature = this.DefaultTemp;
    this.MinimumTemp = 10;
    this.SaveMode = true;
    this.MaxTempSaveModeOn = 25;
    this.MaxTempSaveModeOff = 32;
    this.DefaultTemp = 20


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
    if ((this.SaveMode == true) && (this.getCurrentTemp() == this.MaxTempSaveModeOn)) {
        return;
    }
    if ((this.SaveMode == false) && (this.getCurrentTemp() == this.MaxTempSaveModeOff)) {
        return;
    }
    this.temperature += 1
};

Thermostat.prototype.isMinimumTemp = function() {
    return this.temperature === this.MinimumTemp
};

Thermostat.prototype.down = function() {
    if (this.isMinimumTemp()) {
        return;
    }
    this.temperature -= 1
};

Thermostat.prototype.turnOnSaveMode = function() {
    this.SaveMode = true;
};

Thermostat.prototype.reset = function(){
    this.temperature = this.DefaultTemp
};

Thermostat.prototype.energyUsage = function(){
    if (this.getCurrentTemp() <= 18) {
        return 'low-usage';
    }
    else if (this.getCurrentTemp() >= this.MaxTempSaveModeOn
    ) {
        return 'high-usage';
    }
    return 'medium-usage';
};
};