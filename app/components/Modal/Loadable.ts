/**
 *
 * Asynchronously loads the component for ModalWrap
 *
 */

import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: LoadingIndicator,
});
