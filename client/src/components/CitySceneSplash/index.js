import React, { useState, useEffect } from 'react'
import Building from '../CityScene/Building';
import { useSelector, useDispatch } from 'react-redux';

function CitySceneSplash() {
    const period = 30000;
    const [currentTime,setCurrentTime] = useState(-period/4);
    // const [currentTimeDetails,setCurrentTimeDetails] = useState({ month: currentTime.getMonth(), day: currentTime.getDate(), hour: currentTime.getHours(), minute: currentTime.getMinutes() });
    const [currentOpacity,setCurrentOpacity] = useState(0.85);
    const [sunPosition,setSunPosition] = useState({ x: 2000, y: 0, z: 10000 });
    const timeIncr = 100;
    const finalTime = period;

    //Function determines starting color values, gaps, and building height/width ranges based on month of the year and day of the month
    const getColorSchemesAndBuildingData = () => {
        const startingRed = 11;
        const startingGreen = 30;
        const startingBlue = 57;

        const gapsRed = 29*5;
        const gapsGreen = (29 + 1)*3;
        const gapsBlue = 29 + 20;

        const maxHeight = 800;
        const minHeight = 300;
        const startHeight = (maxHeight + minHeight)/2;
        let nextHeight = startHeight;
        const patterns = [[30,-60],[60,-30],[70,-50],[50,-70]];
        const buildingData = [];
        const pattern = patterns[29%4];
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

    const rx = 2000;
    const ry = 850;
    const positionX = inputTime => {
        return rx*Math.cos(inputTime/period*Math.PI);
    }

    const positionY = inputTime => {
        return ry*Math.sin(inputTime/period*Math.PI);
    }

    const calcOpacity = inputTime => {
        if(inputTime < -period/12 || inputTime > 5*period/6) {
            return 0.85;
        } else if(inputTime > 5*period/16 && inputTime < 11*period/16) {
            return 0;
        } else if(inputTime <= 5*period/16) {
            return 0.85*(1 - (inputTime + period/12)/(7*period/48));
        } else {
            return 0.85*(1 - (5*period/6 - inputTime)/(7*period/48));
        }
    }
            // const newPosition = { x: positionX(action.currentTime.getHours()*60 + action.currentTime.getMinutes()), y: positionY(action.currentTime.getHours()*60 + action.currentTime.getMinutes()), z: state.sunPosition.z };
            // const newOpacity = calcOpacity(action.currentTime.getHours()*60 + action.currentTime.getMinutes());

    useEffect(() => {
        if(currentTime < finalTime) {
            setTimeout(() => {
                const newTime = currentTime + timeIncr;
                setCurrentTime(newTime);
                setSunPosition({ x: positionX(newTime), y: positionY(newTime), z: sunPosition.z});
                setCurrentOpacity(calcOpacity(newTime));
            }, timeIncr/4);
        }
    }, [currentTime,finalTime,sunPosition.z]);

    if(currentTime < finalTime) {
        return (
            <div className='full-height margin-bottom-none padding-none'>
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='-2000 -1300 4000 1500'>
                    <rect x={-5000} y={-1500} width={10000} height={1600} fill={`#6060e8`} />
                    <circle r={100} cx={sunPosition.x} cy={-sunPosition.y} stroke='none' fill='#e2b20f' />
                    <rect x={-5000} y={-200} width={10000} height={1600} fill={`#525252`} />
                    {buildingData.map((building, i) => {
                        return <Building {...building} key={i} />
                    })}
                    <rect x={-5000} y={-1500} width={10000} height={1600} fill={`#000000`} opacity={currentOpacity} />
                </svg>
            </div>
        )
    }
    return(
        <div className='flex-column align-items-center'>
            <h2 className='flex-title'>Welcome!</h2>
            <img src={require("../../assets/images/NoCap1.jpg")} className="avatar-dim main-image centered-item" alt='Avatar' />
            <p className='p-60'>I have grown ever more passionate about learning more things coding related as the years have gone by.  I particularly enjoy trying to come up with creative projects, like the intro that you just saw.  Please have a look around and certainly contact me if you have any questions!</p>
        </div>
    )
}

export default CitySceneSplash