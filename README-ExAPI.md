<table>
  <tr>
    <td><img src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/d6cf4868-59fb-42f5-aeca-36cca87b8351" /></td>
    <td><img src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/61872ffc-9572-4798-b4af-1a54f9c058fa" /></td>
  </tr>
</table>

<h4>Click <a href="https://github.com/SeaForeEx/HoldMyComics-Server">HERE</a> to go to the HOLD MY COMICS! Server Side Repo!</h4>

<h2>Steps</h2>
<li><a href="#overview">What API Did I Use?</a></li>
<li><a href="#basicauth">Basic Auth on Postman</a></li>
<li><a href="#externalapi">External API Postman Calls</a></li>
<li><a href="#envserver">env File on Server Side</a></li>
<li><a href="#connecttofrontend">Connect Back End to Front End</a></li>
<li><a href="#datetime">Datetime on List Method</a></li>
<li><a href="#issueticket">Issue Ticket</a></li>
<li><a href="#shoutouts">Shout Outs!</a></li>

<h2><a id="overview">What API Did I Use?</a></h2>

<img width="166" alt="Screen Shot 2023-09-04 at 8 51 26 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/1d51a3b1-3deb-4ae4-a98a-aff97602210b">

<p>Before I started coding my Full Stack Capstone, I researched potential External APIs and Metron was the best option.  Metron is a Comic Book Database that provides a Rest API for users to access their data.  Unlike corporate-owned databases like Comic Vine, Metron is a vibrant community where users can link up on GitHub and edit/discuss the public database.</p>

<p>Metron also has a Python wrapper called <a href="https://github.com/Metron-Project/mokkari">Mokkari</a> that can be used to access the API, although I didn't use it for my project.</p>

Click <a href="https://metron.cloud/">HERE</a> to go to the main Metron site
<br>
Click <a href="https://github.com/bpepple/metron">HERE</a> to visit Metron's GitHub site

<img width="510" alt="Screen Shot 2023-09-04 at 8 57 19 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/fde4ceb1-76f3-483e-80c1-02aed4d448da">

<h2><a id="basicauth">Basic Auth on Postman</a></h2>

<p>Aside from designing ERDs, testing API calls on Postman has become one of my favorite parts of the planning process!  I was so proud of myself when I figured out how to write the endpoints for Metron's External API (more on that later), but my pride was soon met (as it often is) by a roadblock known as an "unfamiliar error":</p>

<img width="539" alt="Screen Shot 2023-09-04 at 9 08 30 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/a34ddf3c-3149-4d7c-8167-d6c2a8dd5947">

<h4><strong>Authentication credentials were not provided?!?!</strong></h4>

<p>Well, it's usually at this point that I would write a ticket on the NSS GitHub site but how are they going to be able to help me with something they've never seen before?  And isn't the point of your graduation project to help you get ready for the real world?  I decided to <a href="https://github.com/bpepple/metron/discussions/176">write a ticket</a> on the Metron GitHub website and I am glad that I did because the site host promptly responded and showed me what I needed to do on Postman.</p>

<p>Users cannot play with the External API without creating an account on Metron.  So I learned how to apply my Metron account username and password to Postman so I could access the data.</p>

<img width="525" alt="Screen Shot 2023-09-04 at 9 16 31 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/88fd18a7-ee7f-42d9-8cd8-57d56723fd4b">

<p>I clicked on the <strong>Authorization</strong> Tab, selected <strong>Basic Auth</strong> in the drop-down menu, then put in my Metron Username/Password on the right.</p>

<img width="519" alt="Screen Shot 2023-09-04 at 9 18 09 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/4740b4b9-de4f-4a61-a0ab-b7411a7fcef0">

SUCCESS!

Click <a href="https://metron.cloud/accounts/signup/">HERE</a> to create an account on Metron
<br>
Click <a href="https://www.baeldung.com/java-postman-authentication">HERE</a> to see the site that helped me with Basic Auth on Postman

<h2><a id="externalapi">External API Postman Calls</a></h2>

<p>Talk about how I set up the API calls based on the docs page</p>

As I previously stated, Metron was a GREAT choice as an External API, and their documentation page is why.

<img width="485" alt="Screen Shot 2023-09-04 at 9 26 20 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/f30933e5-ae8d-40cd-b87d-886bb94cea5b">

<p>Not only are their API calls well organized, but you can even test them out on the site and they give you the necessary request to get what you want from the data.</p>

<p>For example, I needed a request that gets all of the comics that will be released on Tuesday, September 5, 2023, and Wednesday, September 6, 2023.  This will show me all the new DC Comics releases (each Tuesday) and Marvel/other publishers' releases (each Wednesday).</p>

<p>I was going to use the "store_date" query to write two different promises on the Front End to handle this issue, but I spotted two queries on the docs page called "store_date_range_after" and "store_date_range_before".  I put in the two dates I needed in these props and BAM, one Request URL for all of the new releases that I want to display on the DOM!</p>

<table>
  <tr>
    <td>
      <img width="486" alt="Screen Shot 2023-09-04 at 9 38 59 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/c6fbfce2-554f-467f-9cab-65c2abf03005">
    </td>
    <td>
<img width="495" alt="Screen Shot 2023-09-04 at 9 34 00 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/853ba40f-94c1-4df3-a6f8-73d8442acd35">
    </td>
  </tr>
</table>


Click <a href="https://metron.cloud/docs/">HERE</a> to see the docs for Metron API calls
<br>
Click <a href="https://metron.cloud/docs/#/api/api_issue_list">HERE</a> to see the exact API I used for this call

<h2><a id="envserver">env File on Server Side</a></h2>

<p>So my Postman calls were working great and now it's time for the hard part: connecting this data to the Front End.  The Basic Auth aspect of the data really threw me for a loop for a minute.  My first idea was to have each user sign up with Metron before they were able to register for my page, and then they would enter their Metron information when signing up for HOLD MY COMICS!</p>

<h3><em>TERRIBLE</em> IDEA, RIGHT?!</h3>

<p>Making my site depend on users to be able to use another site before they even begin to use my site is a huge design flaw, not to mention another level of complexity that would make HOLD MY COMICS! convenient for NO ONE.  And what if they entered in the wrong info via typo or poor memory?  It was a dumb dumb dumb idea, but I was desperate as I was in new territory.</p>

<p>Thankfully, Danny Kim was there to save the day.  He suggested that I use environmental variables in my server-side repo and sent me a link to help me figure all of this out.</p>





ENV SCREENSHOTS (Change Password to protect privacy)

<h2><a id="connecttofrontend">Connect Back End to Front End</a></h2>

<p>Show the list/retrieve methods and the book data API calls</p>
<p>Talk about api_url, writing scripts, etc.</p>

CODE SCREENSHOTS

APP SCREENSHOTS

<h2><a id="datetime">Datetime on List Method</a></h2>
<p>Talk about why you needed datetime and how you set it up</p>

CODE SCREENSHOTS

<h2><a id="issueticket">Issue Ticket</a></h2>

<p>Briefly talk about your issue ticket and why you were confused, etc.</p>

Click <a href="">HERE</a> to see the ticket I wrote to get the issue fixed.

<h2><a id="shoutouts">Shout Outs!</a></h2>

<a href="GitHub">Justin Ferwerda</a> - excellent Saturday rubber ducking session

<a href="GitHub">Semsi Dogruer</a>, <a href="linkedin">Dale Karp</a>, and <a href="linkedin">Danny Kim</a> - excellent Saturday coding session blah blah blah

<a href="GitHub">Mark Hamilton</a> - excellent Sunday coding session

And last but certainly not least, <a href="GitHub">Dr. T</a> for answering my ticket!


