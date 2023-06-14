describe('Test Article View', () => {
    it('Test Article View', () => {
        login();
        const title = 'Test Case ' + crypto.randomUUID().substring(0, 6);
        addArticle(title).then(response => {
            const uniqueId = response.body.article.slug;
            cy.visit(`https://demo.realworld.io/#/article/${uniqueId}`);
            cy.get('[ng-bind="::$ctrl.article.title"]').should('have.text', title);
        })
    });

    function login() {
        cy.visit('https://demo.realworld.io');
        cy.get('[ui-sref="app.login"]').click();
        cy.get('input[type=email]').type('micha.duch@gmail.com');
        cy.get('input[type=password]').type('Test1234!');
        cy.get('button[type=submit]').click();
        cy.get('div.article-preview').should('be.visible');
    }

    function addArticle(title) {
        // localStorage.getItem('jwtToken') in theory is working, but since it is not runned as cypress command, it will be invoked to early
        return cy.wrap(localStorage).invoke('getItem', 'jwtToken').then(jwt => {
            return cy.request({
                method: 'POST',
                url: 'https://conduit.productionready.io/api/articles',
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                },
                body: {
                    article: {
                        title,
                        description: 'Test Description',
                        body: 'Test Body',
                        tagList: [],
                    }
                },
            });
        });
    }
});

// Cypress commands (more on https://docs.cypress.io/api/table-of-contents)
// Commands which starts chain:
// cy.wrap(obj) - creates Cypress chain from given object
// cy.request(...) - invoke request to API, using page context

// Chainable commands:
// (...).invoke(...) - invokes function on object in Cypress chain

/*
Exercise: Login to https://demo.realworld.io using your credentials. Add article using cy.request (not ui), and assert if article view is correctly displaying data.

`https://demo.realworld.io/#/article/${uniqueId}`
[ng-bind="::$ctrl.article.title"]
.should('have.text', title);

*/