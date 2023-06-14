describe('Test Article View', () => {
    it('Test Article View', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://api.realworld.io/api/articles?limit=10&offset=0',
        }, {
            statusCode: 200,
            body: { 
                articles: [],
                articlesCount: 0,
            },
        });
        login();
        // Add your code here
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
// cy.intercept() - allows to intercept call, and stub it

// Chainable commands:
// (...).contains(htmlSelector, text) - Search for element with given text

/*
Exercise: Login to https://demo.realworld.io using your credentials. Validate if page is displaying correct data, when there is not articles.

ul.nav
.contains('a.nav-link', ' Global Feed ')
article-list
.contains('div.article-preview', ' No articles are here... yet. ')

*/