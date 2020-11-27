import React, {Component} from 'react';
import * as Mui from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import ShopIcon from '@material-ui/icons/Shop';

class Home extends Component{
 render() { 
    return (
     <div style={{ backgroundSize:"cover" , backgroundImage:"url(https://lh3.googleusercontent.com/proxy/1XRLcw2QHO-DHNjzquhPDtCRpgioXVlvL02INotIhm_f58ty2g5hwPRrvmw_BJ4vAS1ldDTVD4KCg3iUOvKoqqes4JPuDg5OpCXwrX-Qud3jn139hoYNwtiNglCnAMcuj2WMNKMy3GjQLFqh7lLAda7eIjR4bZAK_BkWWPPmFw)" }}>
     <div class="navbar-fixed" style={{ marginBottom:-20 }}>
     <nav class="#424242 grey darken-3" position="inherit">
     <div class="nav-wrapper ">
      <ul class="hide-on-med-and-down" >
        <li><a href="/"><AppleIcon style={{ fontSize:25 }}/></a></li>          
        <li><a href="#" >Mac</a></li>
        <li><a href="#" >iPad</a></li>
        <li><a href="#" >iPhone</a></li>
        <li><a href="#" >Watch</a></li>
        <li><a href="#" >TV</a></li>
        <li><a href="#" >Music</a></li>
        <li><a href="#" >Support</a></li>
        <li><a href="/"><SearchIcon style={{  fontSize:25 }}/></a></li>     
        <li><a href="/"><ShopIcon style={{ fontSize:25 }}/></a></li>          
      </ul>
     </div>
     </nav>
     </div>
     <div>
     <div class="card-panel #263238 blue-grey darken-4 center white-text">
         Get ready for the Apple Four-Day Shopping Event starting this Friday. <a href='#'>Learn more</a>
     </div>
           <img class="materialboxed" width="1350" src="https://www.portalgaming.id/wp-content/uploads/2020/10/Screenshot-2020-10-16-153712.png"/>
     </div>
     <div>
     <Mui.Grid container spacing={3}>
        <Mui.Grid item xs={2}>
          <Mui.Paper ></Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={8}>
          <Mui.Paper >xs=6</Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={2}>
          <Mui.Paper >xs=6</Mui.Paper>
        </Mui.Grid>
    </Mui.Grid>    
     </div>
    <footer class="page-footer #eceff1 blue-grey lighten-5">
          <div class="container">
            <div class="row">
              <div class="col l12 s12 grey-text" style={{ fontSize:'small' }}>
                  <p>1. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon for purchases in an Apple Store. Taxes and shipping not included. Additional Apple Card Monthly Installments and iPhone Payments terms apply.</p>
                  <p>2. Price includes a $30 AT&T, T-Mobile, Sprint, or Verizon discount. Requires activation with carrier. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon for purchases in an Apple Store. Taxes and shipping not included. Additional Apple Card Monthly Installments and iPhone Payments terms apply.</p>
                  <p>3. Apple Fitness+ is coming late 2020.</p>
                  <p>4. The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.</p>
                  <p>5. New subscribers only. $9.99/month after free trial. No commitment. Plan automatically renews after trial until cancelled.</p>
                  <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with iOS 12.4 or later or iPadOS. To manage Apple Card Monthly Installments, you need an iPhone with iOS 13.2 or later or an iPad with iPadOS 13.2 or later. Update to the latest version of iOS or iPadOS by going to Settings &gt; General &gt; Software Update. Tap Download and Install.</p>
                  <p>Available for qualifying applicants in the United States.</p>
                  <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
                  <p>Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="#" style={{ textDecoration:'none' }}>terms</a> apply.</p>
              </div> 
              
              <div class="col l12 s12" style={{ fontSize:'small' }}><hr/>
              <div class="col l2 s12" style={{ fontSize:'small' }}>
                <p class="black-text">Shop and Learn</p>
                <ul>
                  <li><a class="grey-text" href="#">Mac</a></li>
                  <li><a class="grey-text" href="#">iPad</a></li>
                  <li><a class="grey-text" href="#">iPhone</a></li>
                  <li><a class="grey-text" href="#">Watch</a></li>
                  <li><a class="grey-text" href="#">TV</a></li>
                  <li><a class="grey-text" href="#">Music</a></li>
                  <li><a class="grey-text" href="#">AirPods </a></li>
                  <li><a class="grey-text" href="#">HomePod</a></li>
                  <li><a class="grey-text" href="#">iPod Touch</a></li>
                  <li><a class="grey-text" href="#">Accesories</a></li>
                  <li><a class="grey-text" href="#">Gift Cards</a></li>
                </ul>
               </div> 

               <div class="col l3 s12" style={{ fontSize:'small' }}>
               <p class="black-text">Services</p>
                <ul>
                  <li><a class="grey-text" href="#">Apple Music</a></li>
                  <li><a class="grey-text" href="#">Apple TV+</a></li>
                  <li><a class="grey-text" href="#">Apple Fitness+</a></li>
                  <li><a class="grey-text" href="#">Apple News+</a></li>
                  <li><a class="grey-text" href="#">Apple Arcade</a></li>
                  <li><a class="grey-text" href="#">iCloud</a></li>
                  <li><a class="grey-text" href="#">Apple One </a></li>
                  <li><a class="grey-text" href="#">Apple Card</a></li>
                  <li><a class="grey-text" href="#">Apple Books</a></li>
                  <li><a class="grey-text" href="#">App Store</a></li>
                </ul>
               <p class="black-text">Account</p>
               <ul>
                  <li><a class="grey-text" href="#">Manage Your Apple ID</a></li>
                  <li><a class="grey-text" href="#">Apple Store Account</a></li>
                  <li><a class="grey-text" href="#">iCloud.com</a></li>
                </ul>
               </div> 

               <div class="col l2 s12" style={{ fontSize:'small' }}>
               <p class="black-text">Apple Store</p>
                <ul>
                  <li><a class="grey-text" href="#">Find a Store</a></li>
                  <li><a class="grey-text" href="#">Shop Online</a></li>
                  <li><a class="grey-text" href="#">Genius Bar</a></li>
                  <li><a class="grey-text" href="#">Today at Apple</a></li>
                  <li><a class="grey-text" href="#">Apple Camp</a></li>
                  <li><a class="grey-text" href="#">Apple Store App</a></li>
                  <li><a class="grey-text" href="#">Refurbished and Clearance</a></li>
                  <li><a class="grey-text" href="#">Financing</a></li>
                  <li><a class="grey-text" href="#">Apple Trade In</a></li>
                  <li><a class="grey-text" href="#">Order Status</a></li>
                  <li><a class="grey-text" href="#">Shopping Help</a></li>
                </ul>
                </div> 

               <div class="col l3 s12" style={{ fontSize:'small' }}>
               <p class="black-text">For Business</p>
                <ul>
                  <li><a class="grey-text" href="#">Apple and Business</a></li>
                  <li><a class="grey-text" href="#">Shop for Business</a></li>
                </ul>
               <p class="black-text">For Education</p>
               <ul>
                  <li><a class="grey-text" href="#">Apple and Education</a></li>
                  <li><a class="grey-text" href="#">Shop for K-12</a></li>
                  <li><a class="grey-text" href="#">Shop for College</a></li>
                </ul>
                <p class="black-text">For Healthcare</p>
               <ul>
                  <li><a class="grey-text" href="#">Apple in Healthcare</a></li>
                  <li><a class="grey-text" href="#">Health on Apple Watch</a></li>
                  <li><a class="grey-text" href="#">Health Records on iPhone</a></li>
                </ul>
                <p class="black-text">For Government</p>
               <ul>
                  <li><a class="grey-text" href="#">Shop for Government</a></li>
                  <li><a class="grey-text" href="#">Shop for Veterans and Military</a></li>
                </ul>
               </div> 

               <div class="col l2 s12" style={{ fontSize:'small' }}>
               <p class="black-text">Apple Values</p>
                <ul>
                  <li><a class="grey-text" href="#">Accessibility</a></li>
                  <li><a class="grey-text" href="#">Education</a></li>
                  <li><a class="grey-text" href="#">Environment</a></li>
                  <li><a class="grey-text" href="#">Inclusion and Diversity</a></li>
                  <li><a class="grey-text" href="#">Privacy</a></li>
                  <li><a class="grey-text" href="#">Supplier Responsibility</a></li>
                </ul>
               <p class="black-text">About Apple</p>
               <ul>
                  <li><a class="grey-text" href="#">Newsroom</a></li>
                  <li><a class="grey-text" href="#">Apple Leadership</a></li>
                  <li><a class="grey-text" href="#">Job Opportunities</a></li>
                  <li><a class="grey-text" href="#">Investors</a></li>
                  <li><a class="grey-text" href="#">Events</a></li>
                  <li><a class="grey-text" href="#">Contact Apple</a></li>
                </ul>
               </div>
              </div>
              <div class="col l12 s12 grey-text" style={{ fontSize:'small' }}>
                  <p>More ways to shop: <a href='#'>Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.</p><hr/>                 
              </div>
              <div class="col l12 s12 grey-text" style={{ fontSize:'small' }}>
                  <p>Copyright © 2020 Apple Inc. All rights reserved. &nbsp;&nbsp; <a href="#">Privacy Policy</a>&nbsp;&nbsp; |&nbsp;&nbsp; <a href="#">Terms Of Use</a>&nbsp;&nbsp;| &nbsp;&nbsp;<a href="#">Sales And Refuns</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#">Legal</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Site Map&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">United States</a></a></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;