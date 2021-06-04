// describe('dashboard', () => {
//   beforeEach(() => {
//     cy.visit('/dashboard');
//   });

//   it(`page has title 'Tour of Heroes'`, () => {
//     // cy is the cypress global object
//     // cy.visit("localhost:4200/dashboard");

//     // cypress gets any element that contains this text
//     // also asserting that an element does contain this text
//     cy.contains('Tour of Heroes');

//     // get - a method for retreiving a particular DOM node
//     // get does not differentiate between one or several objects
//     cy.get('h1').should('contain', 'Tour of Heroes');

//     // this is looking at the <title> element
//     cy.title().should('eq', 'Tour of Heroes');
//   });

//   it(`navigation buttons have correct text`, () => {
//     cy.get('a').contains('Dashboard').should('contain', 'Dashboard');
//     // or, cy.contains("Dahsboard")
//     cy.get('a').contains('Heroes').should('contain', 'Heroes');
//     // or, cy.get('nav a').eq(1).should("contain", "Heroes");
//   });

//   it(`Should have correct secondary title`, () => {
//     cy.get('h3').should('contain', 'Top Heroes');
//   });

//   it(`search header exists`, () => {
//     cy.contains('Hero Search');
//   });

//   //   it(`tests promises`, () => {
//   // cy.get returns a promise, so if you need to do something on the raw dom node, chain with .then()
//   //   cy.get('h1').then(h1 => {
//   //     // something
//   //   })
//   //   });
// });

// describe(`better Dashboard test`, () => {
//   beforeEach(() => {
//     cy.visit('/dashboard');
//   });

//   it(`contains basic informaiton after page load`, () => {
//     cy.contains('Tour of Heroes');
//     cy.title().should('eq', 'Tour of Heroes');
//     cy.contains('Dashboard');
//     cy.get('nav a').eq(1).should('contain', 'Heroes');
//     cy.contains('Top Heroes');
//     cy.contains('Hero Search');
//     cy.get('app-hero-search h4').should('contain', 'Hero Search');
//   });
// });

// describe(`cypress can also alias things`, () => {
//   beforeEach(() => {
//     cy.visit('/dashboard');
//   });

//   it(`doesn't require repeating yourself`, () => {
//     // alias a dom node/collection of dom nodes
//     cy.get('nav a').as('DashboardLinks');

//     cy.get('@DashboardLinks').eq(0).should('contain', 'Dashboard');
//     cy.get('@DashboardLinks').eq(1).should('contain', 'Heroes');
//   });
// });

// describe(`an alternative way to move around the dom`, () => {
//   beforeEach(() => {
//     cy.visit('/dashboard');
//   });

//   it(`looks like this`, () => {
//     // cy.get("nav a").first().contains("Dashboard");
//     // cy.get("nav a").last().contains("Heroes");

//     // drill up and down the dom to get elements
//     // cy.get is global
//     // .get() looks for the children of an element
//     cy.get('nav a')
//       .first()
//       .contains('Dashboard')
//       .parent()
//       .get('a')
//       .last()
//       .contains('Heroes');
//   });
// });

// describe(`search functionality test`, () => {
//   beforeEach(() => {
//     cy.visit('/dashboard');
//   });

//   it(`allows me to enter and find a search term`, () => {
//     cy.get('#search-box').type('na');
//     cy.get('.search-result li').should('have.length', 3).first();

//     cy.get('#search-box').type('{backspace}{backspace}n');
//     cy.get('.search-result li')
//       .should('have.length', 6)
//       .first()
//       .contains('Narco');

//     cy.get('.search-result li').contains('Mr. Nice').as('mrnice');
//     cy.get('@mrnice').click();
//     cy.url().should('contain', '/detail');
//   });
// });

describe.only(`When there is only one hero saved in the server`, () => {
  it(`Then only one hero div link should appear on the home page`, () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/heroes',
      response: [{ id: 11, name: 'New Name' }],
    });

    cy.visit('/dashboard');

    // class is 'module hero'
    cy.get('.module.hero').should('have.length', 1);
  });
});
