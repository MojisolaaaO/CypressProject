import 'cypress-iframe';
describe('Iframe Test', () => {
    it('should interact with an element inside an iframe', () => {
        cy.visit('https://jqueryui.com/datepicker/');

        // Load the iframe
        cy.frameLoaded('.demo-frame');

        // Now we can interact with elements inside the iframe
        cy.iframe().find('#datepicker').type("07/02/2024");
    });


});