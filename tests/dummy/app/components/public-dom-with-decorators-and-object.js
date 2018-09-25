import Component from '@ember/component';
import { publicInterface, publicDom } from 'ember-public-dom-interface/decorators';
import { computed } from '@ember-decorators/object';

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "publicInterface" }]*/

@publicDom
export default class DomApiHelloWorld extends Component {
  value = 41

  @computed('value')
  get valueString(){
    return `Value is ${this.value}`;
  }

  publicInterface = {
    getValue() {
      return this.value;
    },

    increaseValue(){
      this.set('value', this.value + 1 );
    },

    getValueString(){
      return this.valueString;
    },

    setValue(value){
      this.set('value', value);
    }
  }
}
