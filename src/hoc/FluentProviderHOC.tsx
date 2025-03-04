import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

// Define the Higher-Order Component with proper type constraints
function withFluentProvider<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return function FluentProviderHOC(props: T) {
    return (
      <FluentProvider theme={webLightTheme}>
        <WrappedComponent {...props} />
      </FluentProvider>
    );
  };
}

export default withFluentProvider;
