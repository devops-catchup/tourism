import React, {Fragment} from "react";

function Index(){

    return(
<Fragment>
<header class="container-fluid">
       <div class="header-top">
            <div class="container">
              <div class="row">
                <div class="col-sm-4 d-none d-sm-block contacthd">
                  <p><a href="">India</a> &nbsp;&nbsp; <span>/</span> &nbsp;&nbsp; <a href="">Maharashtra</a><span>/</span> <a href="">Ramtek</a></p>
                </div>
                <div class="col-sm-8">

                  <ul class="social-login">
                    <li>
                      <i class="fab fa-facebook-square"></i>
                    </li>
                    <li>
                      <i class="fab fa-twitter-square"></i>
                    </li>
                    <li>
                      <i class="fab fa-instagram"></i>
                    </li>
                    <li>
                      <i class="fab fa-linkedin"></i>
                    </li>
                  </ul>

                  <ul class="email">
                    <li><i class="fa fa-envelope"></i>atul.koypare@gamil.com</li>
                  </ul>
                </div>
              </div>
            </div>

       </div>
       <div id="menu-jk" class="header-bottom">
            <div class="container">
                <div class="row">
                    <div class="logo col-md-3">
                        <img src="assets/images/logo.png" alt=""/>
                        <a data-toggle="collapse" data-target="#menu" href="#menu"><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
                    </div>
                    <div id="menu" class="navs d-none d-md-block col-md-9">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about_us.html">About Us</a></li>
                            <li><a href="packages.html">Packages</a></li>
                            <li><a href="destination.html">Destinations</a></li>
                            <li><a href="Blog.js">Blog</a></li>
                            <li><a href="contact_us.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  </header>
   
   

    <div class="slider-detail">

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item ">
                    <img class="d-block w-100" src="assets/images/slider/slid_1.jpg" alt="First slide"/>
                    <div class="carousel-caption fvgb d-none d-md-block">
                        <h5 class="animated bounceInDown">Create an Awesome Website Today </h5>
                        <p class="animated fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br/>
                            aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br/>
                            sed sagittis at, sagittis quis neque. Praesent.</p>

                        <div class="row vbh">

                            <div class="btn btn-primary animated bounceInUp"> Apply Online </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item active">
                    <img class="d-block w-100" src="assets/images/slider/slid_2.jpg" alt="Third slide"/>
                    <div class="carousel-caption vdg-cur d-none d-md-block">
                        <h5 class="animated bounceInDown">Let's Explore the World!!!!</h5>
                        <p class="animated bounceInLeft">Every year Shobhayatra is organized.Peopels all over from villages and local participate in Yatra.<br/>
                        They tell the soscial messeges and brings awareness amongs the people.Folk dance,Rawan Dahan,Droupadi Chirharan,Farmer suisides ets. <br/>
                        are the major attraction in Yatra.
                        All these Zakies later gathers in Ramtalai ground where the best performance Zaki is awarded by celebrities.<br/>Till now Mukesh Khanna,Shakti Kapur,Jonny liver,Raja Murad and many more came here.</p>

                        <div class="row vbh">

                            <div class="btn btn-primary animated bounceInUp"> Book your package </div>
                        </div>
                    </div>
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                <span class="sr-only">Next</span>
            </a>
        </div>


    </div>
    

    
    <div class="search-container contaienr-fluid">
       <div class="container">
           <div class="row search-box">
               <div class="col-md-3">
                   <select name="" id="" class="form-control">
                       <option value="">Select Activity</option>
                       <option value="">City Tours</option>
                       <option value="">Relaxation Tours</option>
                       <option value="">Cultral Tours</option>
                   </select>
               </div>
                <div class="col-md-3">
                   <select name="" id="" class="form-control">
                       <option value="">Select Activity</option>
                       <option value="">City Tours</option>
                       <option value="">Relaxation Tours</option>
                       <option value="">Cultral Tours</option>
                   </select>
               </div>
                <div class="col-md-3">
                   <input placeholder="Select Date" type="text" class="form-control"/>
               </div>
                <div class="col-md-3">
                   <button class="btn w-100 btn-primary">Search Package</button>
               </div>
           </div>
       </div> 
    </div>
    
   
    
    <section class="top-packages container-fluid">
        <div class="container">
            <div class="session-title row">
                <h2>Top Packages</h2>
                <p>There are many variations of passages of Lorem Ipsum available form</p>
            </div>
            <div class="pack-row row">
                <div class="col-md-4">
                    <div class="pac-col">
                        <img src="assets/images/packages/pack1.jpg" alt=""/>
                        <div class="packdetail">
                            <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                            <div class="daydet">
                                <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                <b>$1450</b>
                            </div>
                            <div class="eview-row row no-margin">
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pac-col">
                        <img src="assets/images/packages/pack2.jpg" alt=""/>
                        <div class="packdetail">
                            <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                            <div class="daydet">
                                <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                <b>$1450</b>
                            </div>
                            <div class="eview-row row no-margin">
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pac-col">
                        <img src="assets/images/packages/pack3.jpg" alt=""/>
                        <div class="packdetail">
                            <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                            <div class="daydet">
                                <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                <b>$1450</b>
                            </div>
                            <div class="eview-row row no-margin">
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pac-col">
                        <img src="assets/images/packages/pack4.jpg" alt=""/>
                        <div class="packdetail">
                            <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                            <div class="daydet">
                                <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                <b>$1450</b>
                            </div>
                            <div class="eview-row row no-margin">
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pac-col">
                        <img src="assets/images/packages/pack5.jpg" alt=""/>
                        <div class="packdetail">
                            <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                            <div class="daydet">
                                <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                <b>$1450</b>
                            </div>
                            <div class="eview-row row no-margin">
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pac-col">
                        <img src="assets/images/packages/pack6.jpg" alt=""/>
                        <div class="packdetail">
                            <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                            <div class="daydet">
                                <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                <b>$1450</b>
                            </div>
                            <div class="eview-row row no-margin">
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <div class="lloking-for container-fluid">
        <div class="inn-lay">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 natur-col mx-auto">
                        <h2>Up to 40% Discount on Selected Packages</h2>
                        <h4 class="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</h4>
                        <button class="btn btn-light">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    
    
   
    <div class="blog">

        <div class="container">
            <div class="row session-title">
                <h2>Our Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="row blog-row">
                <div class="col-md-6 col-sm-12">
                    <div class="blog-singe no-margin row">
                        <div class="col-sm-5 blog-img-tab">
                            <img src="assets/images/blog/blog1.jpg" alt=""/>
                        </div>
                        <div class="col-sm-7 blog-content-tab">
                            <h2>Curabit finibus dui sem.</h2>
                            <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                            <p class="blog-desic">Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the </p>
                            <a href="blog_single.html">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="blog-singe no-margin row">
                        <div class="col-sm-5 blog-img-tab">
                            <img src="assets/images/blog/blog2.jpg" alt=""/>
                        </div>
                        <div class="col-sm-7 blog-content-tab">
                            <h2>Excepteur sint occaecat</h2>
                            <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                            <p class="blog-desic">Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the </p>
                            <a href="blog_single.html">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="blog-singe no-margin row">
                        <div class="col-sm-5 blog-img-tab">
                            <img src="assets/images/blog/blog3.jpg" alt=""/>
                        </div>
                        <div class="col-sm-7 blog-content-tab">
                            <h2>Treatmnkl sint occaecat</h2>
                            <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                            <p class="blog-desic">Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the </p>
                            <a href="blog_single.html">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="blog-singe no-margin row">
                        <div class="col-sm-5 blog-img-tab">
                            <img src="assets/images/blog/blog4.jpg" alt=""/>
                        </div>
                        <div class="col-sm-7 blog-content-tab">
                            <h2>Orcidinodal sint occaecat</h2>
                            <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                            <p class="blog-desic">Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the </p>
                            <a href="blog_single.html">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    
    
    <div class="travel-destination container-fluid">
        <div class="container">
            <div class="session-title">
                <h2>Popular Destination</h2>
                <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
            </div>
            <div class="destination-row row">
                <div class="col-md-3 descol">
                   <div class="destcol">
                       <img src="assets/images/destination/d1.jpg" alt=""/>
                       <div class="layycover">
                           <h4>Brazil <span class="badge badge-info">5 Places</span></h4>
                       </div>
                   </div>
                </div>
                <div class="col-md-3 descol">
                   <div class="destcol">
                       <img src="assets/images/destination/d2.jpg" alt=""/>
                       <div class="layycover">
                           <h4>Malaysia <span class="badge badge-info">5 Places</span></h4>
                       </div>
                   </div>
                </div>
                
                <div class="col-md-3 descol">
                   <div class="destcol">
                       <img src="assets/images/destination/d3.jpg" alt=""/>
                       <div class="layycover">
                           <h4>Sri Lanka <span class="badge badge-info">5 Places</span></h4>
                       </div>
                   </div>
                </div>
                
                <div class="col-md-3 descol">
                   <div class="destcol">
                       <img src="assets/images/destination/d4.jpg" alt=""/>
                       <div class="layycover">
                           <h4>Canada <span class="badge badge-info">5 Places</span></h4>
                       </div>
                   </div>
                </div>
                
                <div class="col-md-3 descol">
                   <div class="destcol">
                       <img src="assets/images/destination/d3.jpg" alt=""/>
                       <div class="layycover">
                           <h4>Vietnam <span class="badge badge-info">5 Places</span></h4>
                       </div>
                   </div>
                </div>
                <div class="col-md-3 descol">
                   <div class="destcol">
                       <img src="assets/images/destination/d1.jpg" alt=""/>
                       <div class="layycover">
                           <h4>Thailand <span class="badge badge-info">5 Places</span></h4>
                       </div>
                   </div>
                </div>
                <div class="col-md-3 descol">
                   <div class="destcol">
                       <img src="assets/images/destination/d3.jpg" alt=""/>
                       <div class="layycover">
                           <h4>Thailand <span class="badge badge-info">5 Places</span></h4>
                       </div>
                   </div>
                </div>
                <div class="col-md-3 descol">
                   <div class="destcol">
                       <img src="assets/images/destination/d4.jpg" alt=""/>
                       <div class="layycover">
                           <h4>Thailand <span class="badge badge-info">5 Places</span></h4>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
    
    
        <footer class="container-fluid footer-cont">
        <div class="container">
            <div class="footer-top row">
                <div class="col-md-4 foot-logo">
                    <h2>Travel Packages</h2>
                </div>
                <div class="col-md-8 foot-addr">
                    <p>Donec venenatis metus at diam condimentum pretiuteger aliquet a turpis quis pel len tesque ueta turpis quis venenatissolelementum</p>
                    <ul>
                        <li class="pl-0"><i class="fas fa-map-marker-alt"></i> Antonya Street, 23/H-2, Building, TA, AUS </li>
                        <li><i class="fas fa-mobile-alt"></i> +177 (089) 987665  </li>
                        <li><i class="far fa-envelope"></i> support@smarteyeapps.com </li>
                    </ul>
                </div>
            </div>
            <div class="foot-botom row">
                <div class="col-md-3">
                    <div class="fotter-coo">
                        <h5>IMPORTANT LINKS</h5>
                        <ul>
                            <li><i class="fas fa-caret-right"></i> ABOUT US</li>
                            <li><i class="fas fa-caret-right"></i> COMPANY PROFILE</li>
                            <li><i class="fas fa-caret-right"></i> OUR SERVICES</li>
                            <li><i class="fas fa-caret-right"></i> CONTACT US</li>
                            <li><i class="fas fa-caret-right"></i> READ BLOG</li>
                        </ul>
                    </div>
                    
                </div>
                 <div class="col-md-4">
                    <div class="fotter-coo">
                        <h5>GLOBAL UPDATE NEWS</h5>
                        <ul>
                            <li><i class="fas fa-caret-right"></i> 100 CHILDREN RESCUE FROM WAR ZONE</li>
                            <li><i class="fas fa-caret-right"></i> THR FRESH HOUSE CHILD</li>
                            <li><i class="fas fa-caret-right"></i> CREATE AWARENESS IN EDUCATON</li>
                            <li><i class="fas fa-caret-right"></i> WHAT HAPPEN WHEN WE LIVE!</li>
                            <li><i class="fas fa-caret-right"></i> READ BLOG</li>
                        </ul>
                    </div>
                    
                </div>
                <div class="col-md-5">
                    <div class="fotter-coo">
                        <h5>PHOTO GALLERY</h5>
                        <div class="gallery-row row">
                            <div class="col-md-4 col-6 gall-col">
                                <img src="assets/images/blog/blog1.jpg" alt=""/>
                            </div>
                            <div class="col-md-4 col-6 gall-col">
                                <img src="assets/images/blog/blog2.jpg" alt=""/>
                            </div>
                            <div class="col-md-4 col-6 gall-col">
                                <img src="assets/images/blog/blog3.jpg" alt=""/>
                            </div>
                            <div class="col-md-4 col-6 gall-col">
                                <img src="assets/images/blog/blog4.jpg" alt=""/>
                            </div>
                            <div class="col-md-4 col-6 gall-col">
                                <img src="assets/images/blog/blog5.jpg" alt=""/>
                            </div>
                            <div class="col-md-4 col-6 gall-col">
                                <img src="assets/images/blog/blog6.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>

     <div class="copy">
        <div class="container">
            <a href="https://www.smarteyeapps.com/">2015 &copy; All Rights Reserved | Designed and Developed by Smarteyeapps</a>

            <span>
                <a><i class="fab fa-github"></i></a>
                <a><i class="fab fa-google-plus-g"></i></a>
                <a><i class="fab fa-pinterest-p"></i></a>
                <a><i class="fab fa-twitter"></i></a>
                <a><i class="fab fa-facebook-f"></i></a>
        </span>
        </div>

    </div>


</Fragment>

    )
}

export default Index;