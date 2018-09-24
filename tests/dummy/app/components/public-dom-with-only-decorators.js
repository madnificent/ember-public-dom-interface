import Component from '@ember/component';
import { publicInterface, publicDom } from 'ember-public-dom-interface/decorators';
import { computed } from '@ember-decorators/object';

@publicDom
export default class DomApiHelloWorld extends Component {
  value = 41

  @computed('value')
  get valueString(){
    return `Value is ${this.value}`;
  }

  @publicInterface
  getValue() {
    return this.value;
  }

  @publicInterface
  increaseValue(){
    this.set('value', this.value + 1 );
  }

  @publicInterface
  getValueString(){
    return this.valueString;
  }

  @publicInterface
  setValue(value){
    this.set('value', value);
  }

}
