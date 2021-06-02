describe("dashboard", () => {
  beforeEach(() => {
    cy.visit("localhost:4200/dashboard");
  });

  it(`page has title 'Tour of Heroes'`, () => {
    // cy is the cypress global object
    // cy.visit("localhost:4200/dashboard");

    // cypress gets any element that contains this text
    // also asserting that an element does contain this text
    cy.contains("Tour of Heroes");

    // get - a method for retreiving a particular DOM node
    // get does not differentiate between one or several objects
    cy.get("h1").should("contain", "Tour of Heroes");

    // this is looking at the <title> element
    cy.title().should("eq", "Tour of Heroes");
  });

  it(`navigation buttons have correct text`, () => {
    cy.get("a").contains("Dashboard").should("contain", "Dashboard");
    // or, cy.contains("Dahsboard")
    cy.get("a").contains("Heroes").should("contain", "Heroes");
    // or, cy.get('nav a').eq(1).should("contain", "Heroes");
  });

  it(`Should have correct secondary title`, () => {
    cy.get("h3").should("contain", "Top Heroes");
  });

  it(`search header exists`, () => {
    cy.contains("Hero Search");
  });

  //   it(`tests promises`, () => {
  // cy.get returns a promise, so if you need to do something on the raw dom node, chain with .then()
  //   cy.get('h1').then(h1 => {
  //     // something
  //   })
  //   });
});
