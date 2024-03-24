import React, { useState } from 'react';
export default function Video({presentVideoId}){
  return (
    <>
    <div >
          <iframe width={900} height={600}   src={`https://www.youtube.com/embed/${presentVideoId}`}  allowFullScreen></iframe>
    </div>
    </>
  );
}


