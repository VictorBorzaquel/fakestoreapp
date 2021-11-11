import I18n from 'i18n-js';
import { currency } from '../global/language/currency';

function toCurrency(amount: number) {
  return I18n.toCurrency(amount, currency);
}

export { toCurrency }