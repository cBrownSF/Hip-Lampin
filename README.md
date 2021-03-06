# HipLampin

Ruby version--2.7.2

<h3>Heroku Link</h3>  
<p><a href="https://hip-lampin.herokuapp.com/#/">HipLampin Live Link</a></p>



<h3>Database configuration</h3>

Run the following commands 
<ol>
  <li>bundle install</li> 
  <li>bundle exec rails db:setup</li>
</ol>
<h2>About</h2>
<span><a href="https://hip-lampin.herokuapp.com/#/"><img src="./app/assets/images/hip_lampin_main_page.png" alt="main-page"/></a></span>
<br />
<p>There's nothing like being under the stars, surrounded by awe-inspiring nature,embracing the call of the wild...in a nice,cozy bed. On HipLampin users can use a dynamic search bar to discover camping AND glamping spots by location. Hosts can create their own listing with a user friendly,clean,stylish multi-step-form. Soft mattress? Write that negative review. Thankful to have been warned of the soft mattress? Deem the review helpful. HipLampin has it all.</p>

<h2>Features</h2> 
<ul> 
 <li> A multi-step form which allows the host to name their listing, describe their listing, add details, choose preferences, add photos, and set the location dynamically</li>
  <li> An autocomplete search feature which is connected to Google Places and automatically loads coordinates for the Google Maps API</li>
  <li> The search feature can be used to filter listings by city,state,or country or it can be used by hosts to set an exact address</li>
  <li>An image slider which lets users cycle through photos while perusing various listings</li>
  <li>A user-friendly, modern modal which allows users to to sign up and login and logout of the application. When users are logged in they have special privileges</li>
  <li>Logged in users can add a profile picture and a short introduction on their profile page. They can update these as well</li>
  <li>A users profile page displays their future reservations and their listings and is accessible to other users
  <li>Logged in users can create,update,or delete a listing and create or delete a review</li>
  <li>Logged in users can deem other reviews helpful. The number of times a review is deemed helpful is displayed on the review</li>
  <li>Logged in users can also book listings, update their bookings or cancel a booking. Confirmation for the booking is displayed in a clean modal</li>
  <li>Listings have a %recommended which is calculated by the number of reviews which recommend the listing</li>
  <li> A hosts show page has separate edit links for each section of their listing. The links direct the host to the applicable section of the multi step form. Hosts can then choose whether to update multiple sections of the form or update one section of the form</li>
  <li> Users can view all of the listings by clicking on the listings tab in the nav bar</li>
</ul>
<h2>Technologies, Libraries, APIs</h2>
 <p>This project uses the following technologies:</p>
<ul>
  <li>AWS to store user uploaded photos and ensure content security with AWS IAM</li>
  <li>NPM to manage project dependencies</li>
  <li>Google Maps API to find and set listing locations</li>
  <li>Google Maps Places Library to implement the autocomplete search features</li>
  <li>Webpack bundles and transpiles the source JavaScript code</li>
</ul>

<h2>Languages,Frameworks,Database</h2>
 <p>This project uses the following:</p>
<ul>
  <li>React/Redux</li>
  <li>HTML,CSS</li>
  <li>Ruby on Rails</li>
  <li>PostgreSQL</li>
</ul>

<h2>Support</h2>

email calsbrown4@gmail.com for information regarding the project


