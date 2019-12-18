import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';

export default JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api/v1',

  headers: computed(function() {
    return {
      'Content-Type': 'application/json'
    };
  })
});
