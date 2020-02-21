describe('Thermostat', function() {

    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat(); 
    });

    it('shows an initial temperature of 20 degrees', function(){
        expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('allows the user to increase the temperature with #up', function(){
        thermostat.up();
        expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it('allows the user to decrease the temperature with #decrease', function(){
        thermostat.down();
        expect(thermostat.getCurrentTemp()).toEqual(19);
    });

    it('has a minimum of 10 degrees', function() {
        for (var i = 0; i < 11; i++) {
          thermostat.down();
        }
        expect(thermostat.getCurrentTemp()).toEqual(10);
      });

    it('if saving mode is on, the max temp is 25 desgrees', function() {
        for (var i = 0; i < 6; i++) {
            thermostat.up();
        }
        expect(thermostat.getCurrentTemp()).toEqual(25)
    });

    it('if saving mode is off, the max temp is 32 desgrees', function() {
        thermostat.turnOffSaveMode();
        this.SaveMode = false;
        for (var i = 0; i < 14; i++) {  
            thermostat.up();
        }    
        expect(thermostat.getCurrentTemp()).toEqual(32)
    });
    
    it('has a power save mode on by default', function() {
        expect(thermostat.isSaveModeOn()).toBe(true);
    });
    
    it('can switch off the power save mode', function() {
        thermostat.turnOffSaveMode();
        expect(thermostat.isSaveModeOn()).toBe(false);
    });

    it('can switch on the power save mode', function(){
        thermostat.turnOffSaveMode();
        thermostat.turnOnSaveMode();
        expect(thermostat.SaveMode).toBe(true);
    });
});