import Component from '@ember/component';

export default Component.extend({
  userName: null,

  actions: {
    onSubmit() {
      this.onSubmit(this.userName);
    }
  }
});
