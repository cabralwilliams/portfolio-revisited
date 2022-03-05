import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CURRENT_TIME } from '../../utils/actions';
import Building from './Building';

function CityScene() {
    const [currentTime,setCurrentTime] = useState(new Date());
    //Store the time information for updating building colors, sun position, building shadowing, etc
    const [currentTimeDetails,setCurrentTimeDetails] = useState({ month: currentTime.getMonth(), day: currentTime.getDate(), hour: currentTime.getHours(), minute: currentTime.getMinutes() });
    
    const state = useSelector(state => {
        return { currentTime: state.currentTime, sunPosition: state.sunPosition, sceneOpacity: state.sceneOpacity };
    });

    const dispatch = useDispatch();

    //Update the current time, thus hopefully cascading to everything else
    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_TIME,
            currentTime
        });
    },[dispatch,currentTime,currentTimeDetails.hour,currentTimeDetails.minute]);

    //Only update the time every half hour
    setTimeout(() => {
        const newTime = new Date();
        setCurrentTime(newTime);
        setCurrentTimeDetails({ month: newTime.getMonth(), day: newTime.getDate(), hour: newTime.getHours(), minute: newTime.getMinutes() })
    },1800000);

    //Function determines starting color values, gaps, and building height/width ranges based on month of the year and day of the month
    const getColorSchemesAndBuildingData = () => {
        const startingRed = (currentTimeDetails.month + 1)*11;
        const startingGreen = (currentTimeDetails.month + 2)*15;
        const startingBlue = (currentTimeDetails.month + 3)*19;

        const gapsRed = currentTimeDetails.day*5;
        const gapsGreen = (currentTimeDetails.day + 1)*3;
        const gapsBlue = currentTimeDetails.day + 20;

        const maxHeight = 800;
        const minHeight = 300;
        const startHeight = (maxHeight + minHeight)/2;
        let nextHeight = startHeight;
        const patterns = [[30,-60],[60,-30],[70,-50],[50,-70]];
        const buildingData = [];
        const pattern = patterns[currentTimeDetails.day%4];
        let currentZ = 0;
        let currentX = -4140;
        let nextArr = [];
        for(let i = 0; i < 300; i++) {
            if(i > 0) {
                nextHeight += pattern[(i - 1)%2];
                if(nextHeight > maxHeight) {
                    nextHeight = minHeight + nextHeight - maxHeight;
                } else if(nextHeight < minHeight) {
                    nextHeight = maxHeight - (minHeight - nextHeight);
                }
                if(i%128 === 0) {
                    currentZ += 400;
                } else if (i%32 === 0) {
                    currentZ += 220;
                }
                if(i%4 === 0) {
                    currentX += 400;
                } else {
                    currentX += 220;
                }
                if(currentX > 4140) {
                    currentX = -4140;
                }
            }
            let colors = {
                red: startingRed + gapsRed*i,
                green: startingGreen + gapsGreen*i,
                blue: startingBlue + gapsBlue*i
            };
            let dimensions = [200,nextHeight,200];
            let position = [currentX,0,currentZ];
            if(i%16 === 0 && nextArr.length > 0) {
                if(i%32 === 0) {
                    nextArr = nextArr.reverse();
                }
                buildingData.push(nextArr);
                nextArr = [];
            }
            nextArr.push({ colors: colors, dimensions: dimensions, position: position});
            //buildingData.push({ colors: colors, dimensions: dimensions, position: position});
        }
        return buildingData;
    }
    const buildingData = getColorSchemesAndBuildingData().reverse().flat();
    return (
        <div className='full-width margin-bottom-none padding-none'>
            <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='-3000 -800 6000 900'>
                <rect x={-5000} y={-1500} width={10000} height={1600} fill={`#6060e8`} />
                <circle r={100} cx={state.sunPosition.x} cy={-state.sunPosition.y} stroke='none' fill='#e2b20f' />
                <rect x={-5000} y={-200} width={10000} height={1600} fill={`#525252`} />
                {buildingData.map((building, i) => {
                    return <Building {...building} key={i} />
                })}
                <rect x={-5000} y={-1500} width={10000} height={1600} fill={`#000000`} opacity={state.sceneOpacity} />
            </svg>
        </div>
    )
}

export default CityScene;