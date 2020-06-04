import React from "react";
import { HashRouter, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

function App(props) {
  return (
    <div className="ui container">
      <HashRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
