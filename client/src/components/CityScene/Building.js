import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Convert an integer value to a hex value
const hexafy = inputInt => {
    let converted = inputInt%256;
    const hexVals = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    return `${hexVals[Math.floor(converted/16)]}${hexVals[converted - Math.floor(converted/16)*16]}`;
}

function getPoints(position,dimensions) {
    const front = [];
    const left = [];
    const right = [];
    front.push([position[0],0,position[1]]);
    front.push([position[0] + dimensions[0],0,position[1]]);
    front.push([position[0] + dimensions[0], dimensions[1], position[1]]);
    front.push([position[0], dimensions[1], position[1]]);
    left.push([position[0],0,position[1]]);
    left.push([position[0],dimensions[1],position[1]]);
    left.push([position[0],dimensions[1],position[1] + dimensions[2]]);
    left.push([position[0], 0, position[1] + dimensions[2]]);
    right.push([position[0] + dimensions[0],0,position[1]]);
    right.push([position[0] + dimensions[0],dimensions[1],position[1]]);
    right.push([position[0] + dimensions[0],dimensions[1],position[1] + dimensions[2]]);
    right.push([position[0] + dimensions[0], 0, position[1] + dimensions[2]]);
    return { front, left, right };
}

function transformPoint(point, cameraPosition) {
    let dX = cameraPosition.x - point[0];
    let dY = cameraPosition.y - point[1];
    let dZ = cameraPosition.z - point[2];
    let angX = Math.atan2(Math.abs(dX),Math.abs(dZ));
    let angY = Math.atan2(Math.abs(dY),Math.abs(dZ));
    let trueXRad = Math.sqrt(dX*dX + dZ*dZ);
    let trueYRad = Math.sqrt(dY*dY + dZ*dZ);
    let magnify = Math.abs(cameraPosition.fLength/(dZ - Math.abs(cameraPosition.fLength)));
    // let newX = dX === 0 ? point[0] : cameraPosition.x - cameraPosition.z*dX/dZ;
    // let newY = dY === 0 ? point[1] : cameraPosition.y - cameraPosition.z*dY/dZ;
    let newX = dX === 0 ? point[0] : cameraPosition.x - magnify*dX;
    let newY = dY === 0 ? point[1] : cameraPosition.y - magnify*dY;
    return [newX,newY,0];
}

function getPathString(points) {
    let output = `M${points[0][0]} ${-points[0][1]} L ${points[1][0]} ${-points[1][1]} L ${points[2][0]} ${-points[2][1]} L ${points[3][0]} ${-points[3][1]} Z`;
    return output;
}

function Building({ colors, position, dimensions }) {
    // position = lower left corner [x,y,z]
    // dimensions = [deltaX, deltaY, deltaZ]
    const state = useSelector(state => {
        return { currentTime: state.currentTime, sunPosition: state.sunPosition, cameraPosition: state.cameraPosition };
    });

    let absPoints = getPoints(position,dimensions);
    const transformedPoints = { front: absPoints.front, left: absPoints.left, right: absPoints.right };
    transformedPoints.front = transformedPoints.front.map(point => transformPoint(point, state.cameraPosition));
    transformedPoints.left = transformedPoints.left.map(point => transformPoint(point, state.cameraPosition));
    transformedPoints.right = transformedPoints.right.map(point => transformPoint(point, state.cameraPosition));

    const lineWidth = 2;

    let frontFacade = <path d={getPathString(transformedPoints.front)} stroke="black" strokeWidth={lineWidth} fill={`#${hexafy(colors.red)}${hexafy(colors.green)}${hexafy(colors.blue)}`} />
    let leftFacade = <path d={getPathString(transformedPoints.left)} stroke="black" strokeWidth={lineWidth} fill={`#${hexafy(colors.red)}${hexafy(colors.green)}${hexafy(colors.blue)}`} />
    let rightFacade = <path d={getPathString(transformedPoints.right)} stroke="black" strokeWidth={lineWidth} fill={`#${hexafy(colors.red)}${hexafy(colors.green)}${hexafy(colors.blue)}`} />
    let outputElement;
    if(state.cameraPosition.x > (2*position[0] + dimensions[0])/2) {
        outputElement = <g>{leftFacade}{rightFacade}{frontFacade}</g>
    } else {
        outputElement = <g>{rightFacade}{leftFacade}{frontFacade}</g>
    }
    return (
        outputElement
    )
}

export default Building