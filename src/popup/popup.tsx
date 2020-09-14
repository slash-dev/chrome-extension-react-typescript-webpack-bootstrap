import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import Button from 'antd/lib/button';
import Layout from 'antd/lib/layout';

import "antd/dist/antd.less";

const { Content } = Layout;

interface AppProps { };

interface AppState { };

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length !== 1) {
        alert(" more that one active current window tab?");
        return;
      }
      // TODO something
    });
  }



  render() {
    return (
      <div style={{ width: '750px' }}>
        <Layout style={{ padding: '20px', minHeight: '100%' }}>
          <Content>
            <div><Button onClick={() => chrome.runtime.sendMessage({ action: { id: "some_action_id" } })}
              type="primary">Run something</Button></div>
          </Content>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
