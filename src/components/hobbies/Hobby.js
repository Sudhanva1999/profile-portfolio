import React, { useState, useEffect } from 'react';

import Carousel from '../projectslides/Carousel';

import cameraicon from '../../resources/hobby/cameraicon.gif'
import animationicon from '../../resources/hobby/animationicon.gif'
import paintingicon from '../../resources/hobby/paintingicon.gif'

import photo1 from '../../resources/hobby/wildlife/1.JPG'
import photo2 from '../../resources/hobby/wildlife/2.JPG'
import photo3 from '../../resources/hobby/wildlife/3.JPG'
import photo4 from '../../resources/hobby/wildlife/4.JPG'
import photo5 from '../../resources/hobby/wildlife/5.JPG'
import photo6 from '../../resources/hobby/wildlife/6.JPG'
import photo7 from '../../resources/hobby/wildlife/7.JPG'
import photo9 from '../../resources/hobby/wildlife/9.JPG'
import photo10 from '../../resources/hobby/wildlife/10.JPG'
import photo11 from '../../resources/hobby/wildlife/11.JPG'
import photo12 from '../../resources/hobby/wildlife/12.JPG'
import photo13 from '../../resources/hobby/wildlife/13.JPG'
import photo14 from '../../resources/hobby/wildlife/14.JPG'
import photo15 from '../../resources/hobby/wildlife/15.JPG'
import photo16 from '../../resources/hobby/wildlife/16.JPG'
import photo17 from '../../resources/hobby/wildlife/17.JPG'

import paint1 from '../../resources/hobby/painting/1.png'
import paint2 from '../../resources/hobby/painting/2.png'
import paint3 from '../../resources/hobby/painting/3.png'
import paint4 from '../../resources/hobby/painting/4.png'
import paint5 from '../../resources/hobby/painting/5.png'
import paint6 from '../../resources/hobby/painting/6.png'
import paint7 from '../../resources/hobby/painting/7.png'
import paint8 from '../../resources/hobby/painting/8.png'


import handimg1 from '../../resources/projectimages/3_hand/hand_1.png'
import handimg2 from '../../resources/projectimages/3_hand/hand_2.png'
import handimg3 from '../../resources/projectimages/3_hand/hand_3.png'
import handimg4 from '../../resources/projectimages/3_hand/hand_4.png'
import handimg5 from '../../resources/projectimages/3_hand/hand_5.png'

import portalimg1 from '../../resources/projectimages/4_portal/portal_1.png'
import portalimg2 from '../../resources/projectimages/4_portal/portal_2.png'
import portalimg3 from '../../resources/projectimages/4_portal/portal_3.png'


import fakeNewsImg1 from '../../resources/projectimages/5_fakeNews/fakenews_1.png'
import fakeNewsImg2 from '../../resources/projectimages/5_fakeNews/fakenews_2.png'
import fakeNewsImg3 from '../../resources/projectimages/5_fakeNews/fakenews_3.png'

import expense1 from '../../resources/projectimages/expense/expense_1.png'
import expense2 from '../../resources/projectimages/expense/expense_2.png'
import expense3 from '../../resources/projectimages/expense/expense_3.png'
import expense4 from '../../resources/projectimages/expense/expense_4.png'

import './Hobby.css';

const photoSlides = [
    <img className='hob-slides' key={2} src={photo2} alt="Slide 2" />,
    <img className='hob-slides' key={1} src={photo1} alt="Slide 1" />,
    <img className='hob-slides' key={3} src={photo3} alt="Slide 3" />,
    <img className='hob-slides' key={4} src={photo4} alt="Slide 4" />,
    <img className='hob-slides' key={5} src={photo5} alt="Slide 5" />,
    <img className='hob-slides' key={6} src={photo6} alt="Slide 6" />,
    <img className='hob-slides' key={7} src={photo7} alt="Slide 7" />,
    <img className='hob-slides' key={17} src={photo17} alt="Slide 17" />,
    <img className='hob-slides' key={9} src={photo9} alt="Slide 9" />,
    <img className='hob-slides' key={10} src={photo10} alt="Slide 10" />,
    <img className='hob-slides' key={11} src={photo11} alt="Slide 11" />,
    <img className='hob-slides' key={12} src={photo12} alt="Slide 12" />,
    <img className='hob-slides' key={13} src={photo13} alt="Slide 13" />,
    <img className='hob-slides' key={14} src={photo14} alt="Slide 14" />,
    <img className='hob-slides' key={15} src={photo15} alt="Slide 15" />,
    <img className='hob-slides' key={16} src={photo16} alt="Slide 16" />,
];

const paintSlides = [
    <img className='paint-slides' key={1} src={paint1} alt="Slide 1" />,
    <img className='paint-slides' key={2} src={paint2} alt="Slide 2" />,
    <img className='paint-slides' key={3} src={paint3} alt="Slide 3" />,
    <img className='paint-slides' key={4} src={paint4} alt="Slide 4" />,
    <img className='paint-slides' key={5} src={paint5} alt="Slide 5" />,
    <img className='paint-slides' key={6} src={paint6} alt="Slide 6" />,
    <img className='paint-slides' key={7} src={paint7} alt="Slide 7" />,
    <img className='paint-slides' key={8} src={paint8} alt="Slide 8" />,
];


const animationSlides = [
    <iframe className='anime-slides' width="560" height="315" src="https://www.youtube.com/embed/n7Vtl7SVC9s?si=AWIyBM97DHwas-IQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe className='anime-slides' width="560" height="315" src="https://www.youtube.com/embed/QNLCzkhY6sw?si=uiecJMVA24g7joQv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe className='anime-slides' width="560" height="315" src="https://www.youtube.com/embed/MU80wJgEbD0?si=mdqILvlyExfbT7J2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe className='anime-slides' width="560" height="315" src="https://www.youtube.com/embed/O0iQPv13BXE?si=h0BD9OBMO78T_pss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
];


const Hobby = () => {

    const scrollToProject = (projectId) => {
        const element = document.getElementById(projectId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="hobbies" className='bodyContainerHob'>
            <div className="hob-container">
                <h1>Hobbies !</h1>
                <div className='hob-list'>
                    <div className="hob-name fromLeft" onClick={() => scrollToProject('photo')}>
                        Wildlife Photography
                        <div>

                            <img className="actual-icon" src={cameraicon} />
                        </div>
                    </div>
                    <div className="hob-name" onClick={() => scrollToProject('painting')}>
                        Painting
                        <div>

                            <img className="actual-icon" src={paintingicon} />
                        </div>
                    </div>
                    <div className="hob-name fromRight" onClick={() => scrollToProject('animation')}>
                        3d Animation
                        <div>
                            <img className="actual-icon" src={animationicon} />
                        </div>
                    </div>

                </div>


                <div id="photo" className="hob-section fromLeft">
                    <h2>Wildlife Photography
                        <button className="back-to-top" onClick={scrollToTop}>
                            Back to Top
                        </button>
                    </h2>
                    <div>
                        <Carousel slides={photoSlides} />
                        <div>
                            <br />
                            <p>
                                Wildlife photography is my profound connection to the beauty of the natural world.
                                Local photowalks in Ambazari Biodiversity Park,in Nagpur India focused on capturing birds,
                                used to serve as a therapeutic escape, offering stress relief amid the serene surroundings.
                                Each click of the camera freezes moments in time, immortalizing the elegance and
                                majesty of the diverse creatures inhabiting our planet. Through this art form,
                                I find solace and a renewed appreciation for the delicate balance of nature.
                            </p>
                            <br />
                            <h4>Find all of my photos on my Instagram Page  <button className='hereButton'> <a target = "_blank" href="https://www.instagram.com/hobby_clicks_/" >Here.</a> </button></h4>
                        </div>
                    </div>
                </div>

                <div id="painting" className="hob-section">
                    <h2>
                        Painting
                        <button className="back-to-top" onClick={scrollToTop}>
                            Back to Top
                        </button>
                    </h2>
                    <div>
                        <div >

                            <div className='sliderContainer'>
                                <Carousel slides={paintSlides} />

                            </div>

                            <br />
                            <p>
                                Painting is like my personal playground of colors and creativity, and I absolutely
                                love how it doubles as the ultimate stress-buster. When I grab a canvas and let
                                loose with a paintbrush, it's like giving my imagination free rein. There's
                                something magical about watching random strokes turn into a meaningful picture right
                                before my eyes.
                            </p>
                            <br />
                            <h4>Find all of my paintings on my Instagram Page <button className='hereButton'> <a href="https://www.instagram.com/hobby__arts/" target='_blank' >Here.</a> </button></h4>
                        </div>
                    </div>
                </div>

                <div id="animation" className="hob-section">
                    <h2>
                        Animation
                        <button className="back-to-top" onClick={scrollToTop}>
                            Back to Top
                        </button>
                    </h2>
                    <Carousel slides={animationSlides} />
                    <div>
                        <div>
                            <br />
                            <p>
                                It's mind-blowing to think about the incredible world of Blender animation,
                                especially when you consider that one can learn everything about it through
                                YouTube tutorials. The fact that one can go from knowing nothing to creating
                                dynamic, eye-catching animations and have the power to convert their imagination
                                to tangible video product simply by watching online videos is nothing short
                                of amazing.
                            </p>
                            <br />
                            <h4>Find all of my animations on my Instagram Page <a href="https://www.instagram.com/hobby__arts/" >Here.</a><br />
                                And also on my Youtube channel <button className='hereButton'> <a target="_blank" href="https://www.youtube.com/playlist?list=PLy6_wu5if88X_IHKrSjSDZdiWR73xAQD6" >Here.</a></button></h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hobby;
