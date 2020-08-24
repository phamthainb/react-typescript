/**
 *
 * Asynchronously loads the component for CkEditer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
