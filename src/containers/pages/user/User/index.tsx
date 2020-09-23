/*
*
* User
*
*/

import React, { memo } from 'react';
import ErrorBound from '@components/ErrorBound';


interface Props {}

function User({}: Props) {

return (
<ErrorBound>
  User
</ErrorBound>
);
}
export default memo(User);