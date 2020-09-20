/**
 *
 * ErrorBound
 *
 */
import React from "react";

interface Props {}

interface State {
  hasError: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ErrorBound extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <span>Error Boundry</span>;
    }

    return this.props.children;
  }
}

export default ErrorBound;
