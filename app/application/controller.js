import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onUserFormSubmit(userName) {
      this.store.createRecord('user', {
        name: userName
      }).save();
    },

    onDelete(userId) {
      this.store.findRecord('user', userId, { backgroundReload: false }).then((user) => {
        user.destroyRecord();
      });
    }
  }
});
