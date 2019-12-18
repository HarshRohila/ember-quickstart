import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onUserFormSubmit(userName) {
      this.store.createRecord('user', {
        name: userName
      }).save();
    }
  }
});
