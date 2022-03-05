import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    currentTime: new Date(),
    isLoggedIn: false,
    sunPosition: { x: 0, y: 1000, z: 10000 },
    cameraPosition: { x: 0, y: 50, z: -200, fLength: 300 },
    sceneOpacity: 0,
    user: {}
};

const store = createStore(reducer,initialState);

export default store;