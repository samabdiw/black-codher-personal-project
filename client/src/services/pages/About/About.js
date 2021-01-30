import React from 'react'
import { homeObjOne } from './Data';
import { InfoSection } from '../../../components';

const About = () => {
    return (
        <>
         <InfoSection {...homeObjOne} />   
        </>
    )
}

export default About;
