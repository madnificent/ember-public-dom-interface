import EmberObject from '@ember/object';
import PublicDomMixin from 'ember-public-dom-interface/mixins/public-dom';
import { module, test } from 'qunit';

module('Unit | Mixin | public-dom', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let PublicDomObject = EmberObject.extend(PublicDomMixin);
    let subject = PublicDomObject.create();
    assert.ok(subject);
  });
});
