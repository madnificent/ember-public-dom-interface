import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | public-dom-with-decorators-and-object', function(hooks) {
  setupRenderingTest(hooks);

  test('it exposes methods on the dom', async function(assert){
    await render(hbs`{{public-dom-with-decorators-and-object}}`);

    // get our element in the DOM
    let element = this.element.firstChild;

    assert.ok( element.getValue );
    assert.ok( element.increaseValue );
    assert.ok( element.getValueString );
  });

  test('it can retrieve values', async function(assert){
    await render(hbs`{{public-dom-with-decorators-and-object}}`);

    // get our element in the DOM
    let element = this.element.firstChild;

    assert.equal( element.getValue(), 41, "default value is 41" );
    assert.equal( element.getValueString(), "Value is 41", "Default computed property value" );

    await settled();
  });

  test('it can update computed properties', async function(assert){
    await render(hbs`{{public-dom-with-decorators-and-object}}`);

    // get our element in the dom
    let element = this.element.firstChild;

    assert.equal( element.getValue(), 41, "default value is 41" );
    assert.equal( element.getValueString(), "Value is 41", "Default computed property value" );

    element.increaseValue();

    assert.equal( element.getValue(), 42, "New value is 42" );
    assert.equal( element.getValueString(), "Value is 42", "New computed property value" );
    await settled();
  });

  test('it can set properties', async function(assert){
    await render(hbs`{{public-dom-with-decorators-and-object}}`);

    // get our element in the dom
    let element = this.element.firstChild;

    assert.equal( element.getValue(), 41, "default value is 41" );
    assert.equal( element.getValueString(), "Value is 41", "Default computed property value" );

    element.setValue(777);

    assert.equal( element.getValue(), 777, "New value is 777" );
    assert.equal( element.getValueString(), "Value is 777", "New computed property value" );

    await settled();
  });

});
