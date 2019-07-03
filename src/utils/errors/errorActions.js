import { ERROR_HANDLER } from './constants';

export default function parsedErrors(errors) {
  return {
    type: ERROR_HANDLER,
    errors,
  };
}
