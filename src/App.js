import React, { Suspense } from 'react';
import Routes from "./routes";
import './App.css';
// import logo from './logo.svg';

function App() {
  return (
    <>
      <React.Fragment>
        <Suspense fallback={null}>
          <Routes />
        </Suspense>
      </React.Fragment>
    </>
  );
}

export default App;
