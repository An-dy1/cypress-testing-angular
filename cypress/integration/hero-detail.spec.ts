describe(`Test hero detail page`, () => {
  beforeEach(() => {
    cy.visit('/detail/11');
  });

  it(`search input works as expected`, () => {
    let newText = 'new name';

    // start the cypress server and be able to intercept calls
    cy.server();
    cy.route({
      method: 'PUT',
      url: '/api/heroes/11',
      response: "{id: 11, name: 'New Name'}",
    });

    cy.get('h2').contains('MR. NICE Details');
    cy.get('input').parent().contains('name');

    cy.get('input').clear().type(newText);
    cy.get('h2').contains(newText.toUpperCase());
    cy.contains('save').click();

    // let newText = 'new name';
    // let oldText = 'Mr. Nice';
    // cy.get('h2').contains('MR. NICE Details');
    // cy.get('input').parent().contains('name');
    // cy.get('input').clear().type(newText);
    // cy.get('h2').contains(newText.toUpperCase());
    // cy.contains('save').click();
    // cy.visit('/detail/11');
    // cy.get('input').clear().type(oldText);
    // cy.contains('save').click();
  });
});
