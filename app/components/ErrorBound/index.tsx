/**
 *
 * ErrorBound
 *
 */
import React from 'react';

// import styled from 'styles/styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

interface Props {}
interface State {
  hasError: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ErrorBound extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <FormattedMessage {...messages.content} />;
    }

    return this.props.children;
  }
}

export default ErrorBound;
