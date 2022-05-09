function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomScroll() {
  cy.scrollTo(0, randomRange(500, 5000), {
    duration: 200,
  });
  cy.wait(randomRange(500, 1000));
  // cy.scrollTo(0, 0);
}

function chaos() {
  [1, 2, 3, 4, 5].forEach(() => {
    randomScroll();
  });
}

describe("Some tests fail", function () {
  it("Passing Test A", function () {
    cy.visit("/");

    [
      "Aardvark",
      "Albatross",
      "Alligator",
      "Alpaca",
      "Anteater",
      "Antelope",
      "Ape",
      "Armadillo",
      "Donkey",
      "Baboon",
      "Badger",
      "Barracuda",
      "Bat",
      "Bear",
      "Beaver",
      "Bee",
      "Bison",
      "Boar",
      "Buffalo",
      "Butterfly",
    ].forEach((a) => {
      cy.get("#simpleSearch").type(a);
      cy.wait(1000);
      cy.get(".suggestions-result").first().click();
      chaos();
    });
  });

  it.skip("Failing Test B", function () {
    cy.visit("/");
    cy.get("#simpleSearch").type("Africa");
    cy.get(".suggestions-result").first().click();
    cy.scrollTo(0, 1200);
    cy.contains("asdsadsadsada");
  });
});
