describe('Add Article tests', () => {
    it('Add article and Assert on list', () => {
        login();
        const title = 'Test Case ' + crypto.randomUUID().substring(0, 6);
        // Type here
    });

    function login() {
        cy.visit('https://demo.realworld.io');
        cy.get('[ui-sref="app.login"]').click();
        cy.get('input[type=email]').type('micha.duch@gmail.com');
        cy.get('input[type=password]').type('Test1234!');
        cy.get('button[type=submit]').click();
        cy.get('div.article-preview').should('be.visible');
    }
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
Exercise: Login to https://demo.realworld.io using your credentials. Add article, and assert if after adding article user is redirected to preview.

[ui-sref="app.editor"]
[ng-model="$ctrl.article.title"]
[ng-model="$ctrl.article.description"]
[ng-model="$ctrl.article.body"]
[ng-model="$ctrl.tagField"]
button[type=button]
.article-page

*/
