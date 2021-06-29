import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize, validate } from 'vee-validate';
import * as originalRules from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';

// const customRule = {
//   params: ['string'],
//   message: '{_field_}が{string}と一致しません。',
//   validate(value, {string}) {
//     return value === string;
//   }
// };
// extend('custom_rule', customRule);


let rule;
for (rule in originalRules) {
  extend(rule, {
    ...originalRules[rule],
  });
}

localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);