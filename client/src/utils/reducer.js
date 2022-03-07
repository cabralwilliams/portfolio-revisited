//Import your actions here
import { UPDATE_CURRENT_TIME, SET_USER, END_SESSION } from './actions';

const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_CURRENT_TIME:
            const rx = 2000;
            const ry = 850;
            const positionX = inputTime => {
                return rx*Math.cos((inputTime - 360)*Math.PI/720);
            }
        
            const positionY = inputTime => {
                return ry*Math.sin((inputTime - 360)*Math.PI/720);
            }
        
            const calcOpacity = inputTime => {
                if(inputTime < 240 || inputTime > 1200) {
                    return 0.85;
                } else if(inputTime > 450 && inputTime < 990) {
                    return 0;
                } else if(inputTime <= 450) {
                    return 0.85*(1 - (inputTime - 240)/210);
                } else {
                    return 0.85*(1 - (1200 - inputTime)/210);
                }
            }
            const newPosition = { x: positionX(action.currentTime.getHours()*60 + action.currentTime.getMinutes()), y: positionY(action.currentTime.getHours()*60 + action.currentTime.getMinutes()), z: state.sunPosition.z };
            const newOpacity = calcOpacity(action.currentTime.getHours()*60 + action.currentTime.getMinutes());
            return { ...state, currentTime: action.currentTime, sunPosition: newPosition, sceneOpacity: newOpacity };
        case SET_USER:
            // console.log(action);
            return { ...state, user: action.user, isLoggedIn: action.isLoggedIn };
        case END_SESSION:
            return { ...state, user: {}, isLoggedIn: action.isLoggedIn };
        default:
            return { ...state };
    }
};

export default reducer;