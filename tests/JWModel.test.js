const JWModel = require('../src/lib/JWModel');

describe('Lib Testing', () => {

    test('Is an instance of JWModel', () => {
        expect(new JWModel()).toBeInstanceOf(JWModel);
    });

});