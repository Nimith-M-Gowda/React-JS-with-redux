import React from "react";
import ReactDom from "react-dom";
import A from "./App";
import { Provider } from "react-redux";
import Example from "./example";
import { store } from "./redux/store";
import Header from "./header";
class Employee extends React.Component {
  render() {
    return (
      <>
        <A />
        <Header />
      </>
      // <Provider store={store}>
      //   <A />
      // </Provider>
      // // <Example/>
    );
  }
}

ReactDom.render(<Employee />, document.getElementById("root"));
