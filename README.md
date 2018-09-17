ember-public-dom-interface
==============================================================================

We found no specific Ember support for communicating between the
outside world and an Ember app.  This experimental addon provides one
way of supporting this.  It should be stable as it only uses public
Ember APIs.

The addon introduces a new block, publicInterface, which allows you to
specify methods that can be called on the DOM element of the
component.

This experiment was suggested by @gossi.


Installation
------------------------------------------------------------------------------

```
ember install ember-public-dom-interface
```


Usage
------------------------------------------------------------------------------

Import the mixin into your component and define the dom interface in
the `publicInterface` property.

An example is likely sufficient for describing this PoC addon.

### Example

An example consists of creating a component which has a public DOM
interface.  This interface can then be called directly on the DOM
element

Create a component with a public dom interface.  We named ours
`dom-hello-world`:

    import Component from '@ember/component';
    import PublicDomMixin from 'ember-public-dom-interface/mixins/public-dom';

    export default Component.extend( PublicDomMixin, {
      classNames: ["has-public-dom"],
      value: 42,

      publicInterface: {
        sayValue() {
          console.log(this.value);
        },
        increaseValue() {
          this.set("value", this.value + 1);
        }
      }

    });

Render the component somewhere in your application:

    {{dom-hello-world}}

Access the element elsewhere and call actions on it:

    let domElt = document.getElementsByClassName("has-public-dom")[0];
    domElt.sayValue(); // -> console logs 42
    domElt.increaseValue(); // internal value is now 43
    domElt.sayValue(); // -> console logs 43


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-public-dom-interface`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
