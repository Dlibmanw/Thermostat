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
});