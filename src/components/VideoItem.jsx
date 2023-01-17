import { Container, HStack } from '@chakra-ui/react';
import React from 'react';
import './video.css'

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <HStack>

            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
            </HStack>
        </div>
    )
};
export default VideoItem;