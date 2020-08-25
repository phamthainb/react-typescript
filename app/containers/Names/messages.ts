/*
 * Names Messages
 *
 * This contains all the text for the Names container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Names';

export const routes = defineMessages({
  index: {
    id: `${scope}.routes.index`,
    defaultMessage: 'trang chu',
  },
  about: {
    id: `${scope}.routes.about`,
    defaultMessage: 'chi tiet',
  },
  support: {
    id: `${scope}.routes.support`,
    defaultMessage: 'ho tro',
  },
});
