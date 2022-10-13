import logo from './logo.svg';
import './App.css';
import UseStateHook from './Hooks/UseStateHook';
import FetchData from './Hooks/FetchData';
import Display from './Hooks/pages/Display';
import GlobalContextProvider from './Hooks/GlobalContext';
import { GlobalContext } from './Hooks/GlobalContext';
import ItemReducer from './Reducer/ItemReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GCProvider from "./Hooks/TempGlobalContext"
import TempItemReducer from './Hooks/TempitemReducer';
import MyRoutes from "./MyRoutes"
import CartReducer from './Reducer/CartReducer';
import RootReducer from './Reducer/RootReducer';
import FinalRootReducer from './Reducer/FinalRootReducer';

// for the storage of the data in the local storage
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';

// const store = createStore(ItemReducer)
// const store = createStore(RootReducer)

const store = createStore(FinalRootReducer)


// const jamma = createStore(TempItemReducer)
function App() {

  const our_persistConfig = {
    key: 'root',
    storage,
  }

  // but the question is what is the need for this localStorage?
  // one very basic and simple answer to that is that the data is saved inside the local storage that doesnt just vanish when the page is refereshed and i think this is the best way to save the data until backend coding isnt perfected. 

  const our_persistedReducer = persistReducer(our_persistConfig, FinalRootReducer)

  const our_store = createStore(our_persistedReducer)
  const our_persistor = persistStore(our_store)
  return (
    <Provider store = {our_store}>
      <PersistGate persistor={our_persistor}>

     {/* // <GlobalContextProvider>  
    // // <GCProvider> */}
    {/* // <Provider store={store}> */}
      <div >
      {/* <UseStateHook/> */}
      {/* <FetchData/> */}
      {/* <Display/> */}
          <MyRoutes/>
      
    </div>
    </PersistGate>
    
    {/* // </GlobalContextProvider>
    // {/* // </GCProvider> */}

    </Provider>

  );
}

export default App;
