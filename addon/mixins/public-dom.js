import { run } from '@ember/runloop';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  didInsertElement(){
    this._super(...arguments);

    // scope the methods to this, and bind them to element
    const publicInterface = this.publicInterface || {};
    for( let key in publicInterface ){
      let functor = publicInterface[key];
      let self = this;
      let newMethod = function(){
        let args = arguments;
        return run( () => functor.bind(self)(...args) );
      };
      this.element[key] = newMethod;
    }
  }
});
