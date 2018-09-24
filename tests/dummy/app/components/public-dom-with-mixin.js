import { computed } from '@ember/object';
import Component from '@ember/component';
import PublicDomMixin from 'ember-public-dom-interface/mixins/public-dom';

export default Component.extend( PublicDomMixin, {
  value: 41,

  valueString: computed('value', function(){
    return `Value is ${this.value}`;
  }),

  // eslint-disable-next-line
  publicInterface: {
    getValue(){
      return this.value;
    },
    increaseValue(){
      this.set('value', this.value + 1);
    },
    getValueString(){
      return this.get('valueString');
    },
    setValue(value){
      this.set('value', value);
    }
  }
} );
