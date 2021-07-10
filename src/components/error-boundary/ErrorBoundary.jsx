import React from 'react';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <div className={styles.ErrorBoundaryWrapper}>
          <h1>Something went wrong 💥</h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
