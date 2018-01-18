// @flow
import * as React from 'react';
import { render } from 'react-dom';
import { BaseField, TextField } from 'react-pipestyle';

const App = () => (
  <div>
    <h2 className="pp-title-2">Text Field</h2>
    <div className="pp-simple-box pp-bg-white">
      <section>
        {/* default */}
        <BaseField label="Awesome label">
          <TextField placeholder="Type something" />
        </BaseField>

        {/* with description */}
        <BaseField label="Awesome label" description="Description message to help user">
          <TextField placeholder="Type something" />
        </BaseField>

        {/* with error */}
        <BaseField label="Awesome label" description="Description message to help user" error="A message to inform an error">
          <TextField placeholder="Type something" />
        </BaseField>

        {/* with success */}
        <BaseField label="Awesome label" description="Description message to help user" success="A message to inform an success">
          <TextField placeholder="Type something" />
        </BaseField>

        {/* with warning */}
        <BaseField label="Awesome label" description="Description message to help user" warning="A message to inform an warning">
          <TextField placeholder="Type something" />
        </BaseField>

        {/* with icon */}
        <BaseField label="Awesome label">
          <TextField placeholder="Type something" icon="loading" />
        </BaseField>

        {/* with icon */}
        <BaseField label="Awesome label" description="You also can use `markdown :)`">
          <TextField placeholder="Type something" />
        </BaseField>
      </section>
    </div>
  </div>
);

render(<App />, document.querySelector('#root'));
