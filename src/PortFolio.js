import React,{Fragment} from 'react';

const Portfolio =()=>{
    return(
        <Fragment>
            <section id="portfolio">
                <div class="row">
                <div class="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                            <a href="#modal-01" title="" rel="noopener noreferrer">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/images/hrms.jpg"}/>
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                    <h5>HRMS</h5>
                                    <p>Human Resource Management System Punjab( Akal Information Solution Ltd.)</p>
                                </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                            </div>
                        </div>
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                            <a href="#modal-02" title="" rel="noopener noreferrer">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/images/portfolio/champcash.png"}/>
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                    <h5>Champcash</h5>
                                    <p>Champion Networks Pvt. Ltd.</p>
                                </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                            </div>
                        </div>
                        
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                            <a href="#modal-04" title="">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/images/portfolio/Statusbook.jpg"}/>
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                    <h5>Status Book</h5>
                                    <p></p>
                                </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                            </div>
                        </div>
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                            <a href="#modal-03" title="">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/images/portfolio/themannu.jpg"}/>
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                    <h5>The Mannu</h5>
                                    <p>Champion Networks Pvt. Ltd.</p>
                                </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                            </div>
                        </div>
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                            <a href="#modal-05" title="">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/images/portfolio/shopycash.jpg"}/>
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                    <h5>Shopy Cash</h5>
                                    <p>Branding</p>
                                </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                            </div>
                        </div>
                        
                        {/* <div class="columns portfolio-item">
                            <div class="item-wrap">
                            <a href="#modal-08" title="">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/images/portfolio/retrocam.jpg"}/>
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                    <h5>Retrocam</h5>
                                        <p>Web Development</p>
                                </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div id="modal-01" class="popup-modal mfp-hide">
                    <img class="scale-with-grid" src={process.env.PUBLIC_URL + "/assets/images/portfolio/hrms.jpg"} alt="" />
                    <div class="description-box">
                    <h4>HRMS - Human Resource Management System, Punjab</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span class="categories"><i class="fa fa-tag"></i>Branding, Webdesign</span>
                    </div>
                    <div class="link-box">
                        <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer">Details</a>
                    <button class="popup-modal-dismiss" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <div id="modal-02" class="popup-modal mfp-hide">
                    <img class="scale-with-grid" src={process.env.PUBLIC_URL + "/assets/images/portfolio/champcash.jpg"} alt="" />
                    <div class="description-box">
                    <h4>CHAMPCASH</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span class="categories"><i class="fa fa-tag"></i>Branding, Web Development</span>
                    </div>
                    <div class="link-box">
                        <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer">Details</a>
                        <button class="popup-modal-dismiss" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <div id="modal-03" class="popup-modal mfp-hide">
                    <img class="scale-with-grid" src={process.env.PUBLIC_URL + "/assets/images/portfolio/modals/m-judah.jpg"} alt="" />
                    <div class="description-box">
                    <h4>THE  MANNU</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span class="categories"><i class="fa fa-tag"></i>Branding</span>
                    </div>
                    <div class="link-box">
                        <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer">Details</a>
                        <button class="popup-modal-dismiss" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <div id="modal-04" class="popup-modal mfp-hide">
                    <img class="scale-with-grid" src={process.env.PUBLIC_URL + "/assets/images/portfolio/modals/m-intothelight.jpg"} alt="" />
                    <div class="description-box">
                    <h4>STATUS BOOK</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span class="categories"><i class="fa fa-tag"></i>Photography</span>
                    </div>
                    <div class="link-box">
                        <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer">Details</a>
                        <button class="popup-modal-dismiss" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <div id="modal-05" class="popup-modal mfp-hide">
                    <img class="scale-with-grid" src={process.env.PUBLIC_URL + "/assets/images/portfolio/modals/m-farmerboy.jpg"} alt="" />
                    <div class="description-box">
                    <h4>SHOPYCASH</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span class="categories"><i class="fa fa-tag"></i>Branding, Webdesign</span>
                    </div>
                    <div class="link-box">
                        <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer">Details</a>
                        <button class="popup-modal-dismiss" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <div id="modal-06" class="popup-modal mfp-hide">
                    <img class="scale-with-grid" src={process.env.PUBLIC_URL + "/assets/images/portfolio/modals/m-girl.jpg"} alt="" />
                    <div class="description-box">
                    <h4>Girl</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span class="categories"><i class="fa fa-tag"></i>Photography</span>
                    </div>
                    <div class="link-box">
                        <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer">Details</a>
                        <button class="popup-modal-dismiss" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <div id="modal-07" class="popup-modal mfp-hide">
                    <img class="scale-with-grid" src={process.env.PUBLIC_URL + "/assets/images/portfolio/modals/m-origami.jpg"} alt="" />
                    <div class="description-box">
                    <h4>Origami</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span class="categories"><i class="fa fa-tag"></i>Branding, Illustration</span>
                    </div>
                    <div class="link-box">
                        <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer">Details</a>
                        <button class="popup-modal-dismiss" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <div id="modal-08" class="popup-modal mfp-hide">
                    <img class="scale-with-grid" src={process.env.PUBLIC_URL + "/assets/images/portfolio/modals/m-retrocam.jpg"} alt="" />
                    <div class="description-box">
                    <h4>Retrocam</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span class="categories"><i class="fa fa-tag"></i>Webdesign, Photography</span>
                    </div>
                    <div class="link-box">
                        <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer">Details</a>
                        <button class="popup-modal-dismiss" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
                </section>
        </Fragment>
    );
}
export default Portfolio;