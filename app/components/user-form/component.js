import Component from '@ember/component';

export default Component.extend({
  userName: null,

  isValid(userName) {
    return !!userName;
  },

  actions: {
    onSubmit() {
      if (this.isValid(this.userName)) {
        this.onSubmit(this.userName);
        this.set('userName', '');
      }
    }
  }
});
