suite('should have all neccesary static elements', () => {
  test('should have .container', () => {
    const container = document.getElementsByClassName('container');
    expect(container).to.have.length(1);
  });
  test('should have two nav btns', () => {
    const navButtons = document.getElementsByClassName('nav-item');
    expect(navButtons).to.have.length(2);
  });
});
