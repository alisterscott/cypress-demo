describe( 'Cypress Demo', function() {
	it( 'can wait for an element to appear', function() {
        cy.visit('http://webdriverjsdemo.github.io'); 
        cy.get('#elementappearschild').should('be.visible');
	} );

    it( 'can wait (10 seconds) for element to change text value', function() {
        cy.visit('http://webdriverjsdemo.github.io');
        cy.get('#elementchangestext', { timeout: 10000 }).should('be.visible').and('contain', 'new');
    } );

    // it( 'ignores alerts when leaving the page', function() {
    //     cy.visit('http://webdriverjsdemo.github.io/leave'); 
    //     cy.get('#homelink').click();
    //     cy.contains('WebDriverJs Demo Page').should('be.visible');
    // } );
} );
