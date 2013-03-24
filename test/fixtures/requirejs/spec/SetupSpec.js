define(function(require) {
    describe('Setup', function() {
        it('should not invoke the require call in main.js (which will invoke "app.start()")', function() {
            expect(require('app').isStarted()).toBe(false);
        });

        it('should configure a description for math', function() {
            expect(require('math').getDescription()).toEqual('Math module');
        });

        it('should configure an overidden description for sum', function() {
            expect(require('sum').getDescription()).toEqual('Sum module (overridden)');
        });
    });
});