import React,{Fragment} from 'react';

const Resume =()=>{
    return(
        <Fragment>
            <section id="resume">
            <div class="row education">

            <div class="three columns header-col">
                <h1><span>Education</span></h1>
            </div>
            <div class="nine columns main-col">
                <div class="row item">
                    <div class="twelve columns">
                        <h3>Krurkshetra University(RPIIT), Karnal</h3>
                        <p class="info">B.Tech <span>&bull;</span> <em class="date">August 2011 - June 2015</em></p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                    </div>
                </div>
                <div class="row item">
                    <div class="twelve columns">
                        <h3>S.B.S Sr. Sec. School, Karnal</h3>
                        <p class="info">10th <span>&bull;</span> <em class="date">2007-2009</em></p>
                        <p>
                        This is Photoshop's version  of Lorem Ipsum.
                        </p>
                        <p class="info">12th <span>&bull;</span> <em class="date">2009-2011</em></p>
                        <p>
                        This is Photoshop's version  of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div class="row work">
            <div class="three columns header-col">
                <h1><span>Work</span></h1>
            </div>
            <div class="nine columns main-col">
                <div class="row item">
                    <div class="twelve columns">
                        <h3><a href="https://akalinfosys.com/" target="_blank"> Akal Information Systems Ltd.</a></h3>
                        <p class="info">Software Developer <span>&bull;</span> <em class="date">September 2019 - Present</em></p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                    </div>
                </div>
                <div class="row item">
                    <div class="twelve columns">
                        <h3><a href="http://champcash.com/" target="_blant"> Champion Networks Pvt. Ltd.</a></h3>
                        <p class="info">Software Developer <span>&bull;</span> <em class="date">May 2016 - August 2019</em></p>
                        <p>
                        This is Photoshop's version  of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div class="row skill">

            <div class="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div class="nine columns main-col">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
                </p>
            <div class="bars">
                <ul class="skills">
                    <li><span class="bar-expand photoshop"></span><em>ASP.Net(Webforms, MVC, Web API 2.0)</em></li>
                    <li><span class="bar-expand illustrator"></span><em>MySql</em></li>
                    <li><span class="bar-expand wordpress"></span><em>Sql Server</em></li>
                    <li><span class="bar-expand css"></span><em>Node.js</em></li>
                    <li><span class="bar-expand html5"></span><em>HTML5</em></li>
                    <li><span class="bar-expand jquery"></span><em>jQuery</em></li>
                    <li><span class="bar-expand html5"></span><em>CSS</em></li>
                </ul>
            </div>
            </div>
            </div>
            </section>
        </Fragment>
    );
}
export default Resume;