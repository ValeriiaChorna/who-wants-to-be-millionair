import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App';
import Spinner from './components/Spinner';

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={<Spinner />} persistor={persistor}> */}
//       <PersistGate loading={''} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
