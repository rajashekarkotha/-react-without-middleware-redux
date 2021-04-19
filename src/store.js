import { createStore } from 'redux';
import reducer from './reducer';

const initialState ={
    byId:{
        isLoading:true,
        isComplelted:null,
        error:null,
        data:null
    },
    byBulk:{
        isLoading:true,
        isComplelted:null,
        error:null,
        data:null
    }
}

const store = createStore(reducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;