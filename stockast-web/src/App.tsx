import { Provider } from 'react-redux';
import { store, persistor } from './store';
import MainRoutes from './components/routes/MainRoutes';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App;
