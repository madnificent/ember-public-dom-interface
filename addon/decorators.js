import { run } from '@ember/runloop';
/**
 * Decorator which publishes the publicInterface to the DOM element on
 * didInsertElement.
 */
export function publicDom(target) {
  return class extends target {
    didInsertElement(){
      super.didInsertElement();
      for( let key in this.publicInterface ) {
        let functor = publicInterface[key];
        let self = this;
        let newMethod = function(){
          let args = arguments;
          return run( () => functor.bind(self)(...args) );
        };
      }
    }
  };
}

/**
 * Decorator which indicates a function or computed property is part
 * of the public interface of the component.
 */
export function publicInterface(target, key, description) {
  target.publicInterface = target.publicInterface || {};
  if( Object.keys(description).includes("get") ) {
    target.publicInterface[key] = function() {
      return this.get(key);
    };
  } else {
    target.publicInterface[key] = description.value;
  }

  return description;
}
