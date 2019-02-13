/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import 'mocha/mocha.css';

mocha.setup('tdd');
global.expect = expect;

suite('mocha should be set up', () => {
  test('document should have #mocha', () => {
    const mochaDiv = document.getElementById('mocha');
    expect(mochaDiv).to.be.instanceOf(HTMLElement);
  });
});

mocha.checkLeaks();
mocha.globals(['jQuery']);
mocha.run();
