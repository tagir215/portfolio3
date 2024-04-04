
import './App.css';
import ToolBar from './header/Toolbar.js'
import TextBlock from './components/TextBlock.js'
import Bottombar from './header/Bottombar';
import PhoneImage from './components/PhoneImage';
import Skills from './header/Skills';
import Videos from './components/Videos.js';
import React, { useState, useEffect } from 'react';

function Page({lang}) {
  const iFolder = process.env.PUBLIC_URL;

  return (
    <>

      <div class="page animation1 ">

            <div className="content">
              <div className="images-container">
                  <img className="app-image" src={iFolder+"/topic9/engine.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topic9/engine2.png"} alt=''></img>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic9Title} text={lang.topic9Text} list={lang.topic9List} link={"https://github.com/tagir215/game_engine"}/>
            </div>

            <div className="content">
              <div className="images-container">
                  <img className="app-image" src={iFolder+"/topic8/lexer.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topic8/lexer2.png"} alt=''></img>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic8Title} text={lang.topic8Text} list={lang.topic8List} link={"https://github.com/tagir215/lexical-analyzer"}/>
            </div>


            <div className="content">
              <div className="images-container">
                  <img className="app-image" src={iFolder+"/topic7/boolen1.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topic7/boolen2.png"} alt=''></img>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic7Title} text={lang.topic7Text} list={lang.topic7List} link={"https://github.com/tagir215/boolean-algebra-visualizer"}  
	  />
            </div>

            <div className="content">
              <div className="images-container">
                  <img className="app-image" src={iFolder+"/topic6/arp2.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topic6/arp.png"} alt=''></img>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic6Title} text={lang.topic6Text} list={lang.topic6List} link={"https://github.com/tagir215/african-rock-python-server"} link2={"https://github.com/tagir215/arp-client"} 
	  //link3={"https://arp-client-c1df0d4c8a26.herokuapp.com"}
	  />
            </div>


            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage video={iFolder + '/topic1/starchat0000.mp4'} position="position1"/>
                <PhoneImage path={iFolder + '/topic1/starchat1.jpg'} position="position2"/>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic1Title} text={lang.topic1Text} list={lang.topic1List} link={"https://github.com/tagir215/Star-Chat"}/>
              
            </div>



            <div className="content">
              <div className="images-container">
                  <img className="app-image" src={iFolder+"/topic5/csamma1.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topic5/csamma2.png"} alt=''></img>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic5Title} text={lang.topic5Text} list={lang.topic5List} link2={"https://github.com/tagir215/CosineSearchAutomaticMindMapApplicationClient"} link={"https://github.com/tagir215/CosineSearchAutomaticMindMapApplicationServer"}/>
            </div>

            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage video={iFolder + '/topic2/rhythm0000.mp4'} position="position1"/>
                <PhoneImage path={iFolder + '/topic2/picmetr5.jpg'} position="position2"/>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic2Title} text={lang.topic2Text} list={lang.topic2List} link={"https://github.com/tagir215/VisualMetronome"}/>
            </div>  
 
            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage path={iFolder + '/topic3/mindmap1.jpg'} position="position1"/>
                <PhoneImage video={iFolder + '/topic3/mindmap0000.mp4'} position="position2"/>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic3Title} text={lang.topic3Text} list={lang.topic3List} link={"https://github.com/tagir215/YourMindMap"}/>
              
            </div>



            <div className="content">
            <div className="phone-image-container ">
                <PhoneImage path={iFolder + '/topic4/newgolf2.png'} position="position1"/>
                <PhoneImage video={iFolder + '/topic4/golf0000.mp4'} position="position2"/>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic4Title} text={lang.topic4Text} list={lang.topic4List} link={"https://github.com/tagir215/GPSGolf"}/>
            </div>


            <div className="content">
              <div className="images-container">
                  <img className="app-image" src={iFolder+"/topicGames/car.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topicGames/dung.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topicGames/comments0.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topicGames/comments4.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topicGames/comments2.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topicGames/comments3.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topicGames/comments1.png"} alt=''></img>
              </div>
	  <div>
              <TextBlock lang={lang} theme="topic" theme2="max-width" title={lang.topicGamesTitle} text={lang.topicGamesText} list={lang.topicGamesList} />
	</div>	
            </div>


            <Bottombar lang={lang}/> 
    </div>
    </> 
  )
}

export default Page;
