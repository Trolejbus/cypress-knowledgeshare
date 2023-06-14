describe('Login tests', () => {
    it('Login as user and Assert .article-preview visible', () => {
        cy.visit('https://demo.realworld.io');
        cy.get('[ui-sref="app.login"]').click();
        cy.get('input[type=email]').type('micha.duch@gmail.com');
        cy.get('input[type=password]').type('Test1234!');
        cy.get('button[type=submit]').click();
        cy.get('div.article-preview').should('be.visible');
    });
});

// Cypress commands (more on https://docs.cypress.io/api/table-of-contents)
// Commands which starts chain:
// cy.visit(url) - navigate to page
// cy.get(elementSelector) - search for element in page using JQuery selector $(...)

// Chainable commands:
// (...).click() - clicks element
// (...).type('text') - type text into input
// (...).should(assertion) - invoke assertion on given element, eg. '.should('be.visible')'

/*
Exercise: Login to https://demo.realworld.io using your credentials, and assert if div with article preview is visible.

https://demo.realworld.io
[ui-sref="app.login"]
input[type=email]
input[type=password]
button[type=submit]
div.article-preview

*/
