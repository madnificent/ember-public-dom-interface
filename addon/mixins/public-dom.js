import Mixin from '@ember/object/mixin';

export default Mixin.create({
  didInsertElement(){
    this._super(...arguments);

    // scope the methods to this, and bind them to element
    const publicInterface = this.publicInterface || {};
    for( let key in publicInterface ){
      publicInterface[key] = publicInterface[key].bind(this);
      this.element[key] = publicInterface[key];
    }
  }
});
