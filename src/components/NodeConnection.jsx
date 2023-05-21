import React from "react";

function NodeConnection({ startId, endId, isFirst, isSecond, isThird, isFourth }) {
  // Calculate the positions of the start and end points based on the node index
  const startX = 165;
  const startY = 160 + startId * 170;
  const endX = 235;
  const endY = 160 + endId * 170;

  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);



  return (
    <div
      className="node-connection"
      style={{
        width: isFirst ? '34.84800000000001px' : (isSecond ? '116.84800000000001px' : (isThird ? '165.84800000000001px' : (isFourth ? '149.84800000000001px' : '0.84800000000001px'))),
        transformOrigin: 'left top',
        transform: isFirst
        ? 'translate(250px, 240px) rotate(360deg)'
        : (isSecond
            ? 'translate(267px, 357px) rotate(270deg)'
            : (isThird
            ? 'translate(405px, 410px) rotate(360deg)'
            : (isFourth
            ? 'translate(850px, 410px) rotate(360deg)'
            : 'translate(155, 347) rotate(0deg)'))),
        top: '125px',
        left: '123px',
      }}
    />
  );
}

export default NodeConnection;
