define([
    'intern!bdd',
    'intern/chai!expect',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    './support/masthead'
], function (bdd, expect, pollUntil, Masthead) {

    with (bdd) {

        describe('homepage', function () {
            var subject, page;

            beforeEach(function () {
                page = this.remote.get('http://vitals.com')
            });

            describe('searching by doctor', function (){

                beforeEach(function () {
                  subject = new Masthead(page).searchFor('abraham', {near: 11215})
                });

                it('has abraham in the searchsentence', function () {
                  return subject.findByCssSelector('.searchsentence .q')
                      .getVisibleText()
                      .then(function (text) {
                          expect(text).to.equal('abraham')
                      })
                      .end()
                });
            });

        })

    }
});