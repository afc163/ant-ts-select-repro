import * as React from 'react';
import { Select } from 'antd';

import '../style/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="main-content">
        The select modal works once <pre>defaultValue</pre> is removed.
        <div className="center">
          <Select defaultValue="a">
            <Select.Option value="a">Value "A"</Select.Option>
          </Select>
        </div>
      </div>
    );
  }
}

export default App;
