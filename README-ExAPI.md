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

<img width="559" alt="Screen Shot 2023-09-05 at 7 31 11 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/90fbe73c-87ba-444a-b25f-1e053fa6d588">

<p>For our Full Stack Apps, we have been using Firebase Environmental Variables by setting up an env file in the Front End with all the required info.  In this case, I set up an env file in the back end to store my Metron login AND keep it anonymous when people look at the code in my server-side repo.</p>

<img width="547" alt="Screen Shot 2023-09-05 at 7 55 13 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/5488c767-9365-40aa-86b9-10e9a91f66db">

<p>For this code, I built the API URL with the calculated dates (again, more on that later) then created a response populated with my Metron environmental variables.  Now no one has to have a Metron account except for me.  Every comic book store owner will use my info to pull up all the weekly titles.  I included a timeout to prevent hanging requests, avoid resource wastage, etc.</p>

Click <a href="https://djangocentral.com/environment-variables-in-django/">HERE</a> to see the article that helped me use Environmental Variables to keep my Metron login private

<h2><a id="connecttofrontend">Connect Back End to Front End</a></h2>

<p>My goal was to make this process lean on the Back End as much as possible. 
 Even though our Bootcamp started with learning the Front End, I've learned that I'd rather let Django methods to the work instead of relying on Merged Data in React.</p>

<p>Let's go through this step by step:</p>

<img width="240" alt="Screen Shot 2023-09-05 at 8 03 34 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/3ddd98df-12bc-4677-88f4-bd991960a64e">

<p>First, I made sure that the "django-environ" library was stored in my Python environment.</p>

<img width="315" alt="Screen Shot 2023-09-05 at 8 05 12 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/499867b1-95c6-4681-8389-91566a5150fc">

<p>Then, in my views/book.py file, I imported the environ package and initialized environment variables using said package</p>

<h3>List Method (Get All Books)</h3>

<img width="573" alt="Screen Shot 2023-09-05 at 8 09 15 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/3c8f07b7-2ec7-41c4-b987-2786091698bc">

<img width="522" alt="Screen Shot 2023-09-05 at 8 12 40 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/c710d5be-7c8c-4888-8089-a460830c75e7">

<li>Defined api_url for fetching data from the Metron API</li>
<li>Made HTTP GET request to the Metron API with authentication and a timeout of 60 seconds</li>

<img width="173" alt="Screen Shot 2023-09-05 at 8 13 02 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/92585238-9260-4058-811a-58732ece4b95">

<li>Parsed the JSON response from the API</li>
<li>Initialize an empty list to store Book objects</li>

<p>The for loop below is going through all of the data and changing the fields of the External API to match the fields of the model I created for my Book Django ORM</p>

<img width="282" alt="Screen Shot 2023-09-05 at 8 16 17 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/dbafe249-fd42-4ef7-a080-bbb118e6bf72">

<li>Iterates through the 'results' in the JSON response</li>
<li>Creates a Book object using data from the API response</li>
<li>Saves the Book object to SQL Table</li>
<li>Appends the Book object to the 'books' list</li>

<img width="478" alt="Screen Shot 2023-09-05 at 8 17 02 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/28e592ca-5c8c-41ac-bca5-1d07f68d3569">

<p>The rest of the code is the same old same old, serializing the data to return to the Front End API call.</p>

<p>Again, since my Back End did all the lifting for fetching the External API data and conforming it to the fields in my Book Model, I was able to keep my Front End Promise for getting all books the same as they were for MVP.</p>

<p>If we go back to the for loop for a minute, I can explain the process a little better. To the left is the JSON for my original data.  To the right is the JSON for Metron's External API:</p>

<table>
  <tr>
    <td>
      <img width="486" alt="Screen Shot 2023-09-05 at 8 45 39 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/82153c3c-e75e-42b0-b45c-6b595e94d5aa">
    </td>
    <td>
      <img width="570" alt="Screen Shot 2023-09-05 at 8 44 40 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/f60fce11-d374-42e4-8752-cbb348e3b0eb">
    </td>
  </tr>
</table>

<li>"pk" aka "id" on the left is the unique numerical book id to the right</li>
<li>"image_url" on the left is the "image" to the right</li>
<li>there is no "publisher" equivalent to the left so I put empty quotes</li>
<li>"title" on the left is the "issue" to the right</li>
<li>there is no "price" equivalent to the left so I put a 0</li>
<li>there is no "description" equivalent to the left so I put empty quotes</li>

<p>Here's how my BookCard looks after I convert the fields to my model:</p>


<img width="221" alt="Screen Shot 2023-09-05 at 8 55 39 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/e61b5844-52a4-432c-a8b6-9c4e20545499">

<h3>Retrieve Method (Get Single Book)</h3>

<table>
  <tr>
    <td>
      <img width="487" alt="Screen Shot 2023-09-05 at 9 24 14 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/7a0e9524-5893-4a87-8682-0aaec5afb316">
    </td>
    <td>
      <img width="450" alt="Screen Shot 2023-09-05 at 9 25 15 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/091cb336-bed5-40f0-adad-33f5f999eac4">
    </td>
  </tr>
</table>

<p>I defined the api_url and response variables just like the list method, the main difference being I used a different API for getting the single book.  Also, I had to deserialize the JSON data and extract relevant fields from it. 
 I needed different data for the Get Single Book call.</p>

<p>I only needed the pk (called book_id in this setup), image_url, and title of the comic for the BookCard. For the individual book view, I needed all of those plus the price, publisher, and description of the comic.</p>

<img width="508" alt="Screen Shot 2023-09-06 at 12 38 02 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/32d7bdfe-6010-4ec7-9139-f390dd317c5d">

<p>The "id", "image", "price", and "description" values are easy enough to get because they are not nested, hence the easy json_data.get() calls.  The name of the publisher was nested inside of the publisher object, which is why we had to get the object and then get the name inside of the object and set it as its own variable.  I had to do the same thing for the name inside of the series, then attach the non-nested "number" value to it to get the name of the series and the number together in one string.</p>

<img width="523" alt="Screen Shot 2023-09-06 at 12 40 14 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/1ebbc98a-8521-45d6-ac19-ec0449489c55">

<p>We also didn't need a looped script this time since we were just converting one book to the model I had already set for it, but the concept is still the same.  Then we serialized the book object and returned the serialized data to the getSingleBook promise on the Front End.  Here's what the single book page looks like:</p>

<img width="853" alt="Screen Shot 2023-09-06 at 12 51 33 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/53c77629-49d6-4e80-8399-feac08a02854">

<h2><a id="datetime">Datetime on List Method</a></h2>
<p>Getting the External API on my page was the main battle; once I got over that hill I was BEYOND HAPPY.  Now I could focus on making the page easier to handle.  Here is the API URL for getting all of the books:</p>

<img width="856" alt="Screen Shot 2023-09-06 at 8 47 45 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/e4fea914-87d5-4cbe-b87c-68002dc99331">

<p>The problem with this API call is that it only works for two particular days in the span of a lifetime.  To make this site work, I would have to change the dates manually every week.  This is not practical, especially since it's a school project that will probably get lost in the shuffle once I get on the job hunt and enter the world of tech (though I'm having so much fun working with this I doubt I'll give it up too long).</p>

<p>It's still a pain to manually adjust my code when I can just learn how to make datetime work for my Python files.  Datetime is a new concept to me and can be rather frustrating so I chose to save it for last.  Also, I can run this site without datetime (impractical but possible), but I can't run this site without the External API (unless I manually enter all the 40+ titles as fixtures every week and that's worse than datetime).</p>

<p>Here's the datetime code used in the list method for my BookView:</p>

<img width="555" alt="Screen Shot 2023-09-06 at 9 06 08 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/44017e69-ffc6-411c-ac16-1d97cbeee052">

<p>Let's go through this code bit by bit:</p>

<img width="126" alt="Screen Shot 2023-09-06 at 8 55 34 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/84e10ad8-ddd1-40ed-a32b-10ff4238ad90">

<p>You have to import the datetime module; it provides classes for manipulating dates and times.</p>

<img width="486" alt="Screen Shot 2023-09-06 at 9 16 08 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/df55ba00-3ac3-4a08-adc1-05f2c13b3677">

<p>This line retrieves the current date and assigns it to the variable today. It uses the datetime.date.today() function to get the current date.</p>

<img width="481" alt="Screen Shot 2023-09-06 at 9 16 56 PM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/4ec6318d-93ce-4007-91df-348fe3ded9cd">

<ol>
  <li>"today" is "2023-09-06", which is a Wednesday.</li>
  <li>today.weekday() returns 2 because Wednesday corresponds to the third day of the week (0-based indexing, where Monday is 0).</li>
  <li>datetime.timedelta(days=2) creates a timedelta object representing a duration of 2 days.</li>
  <li>When you subtract this timedelta object from "today," you are effectively subtracting 2 days from Wednesday, which brings you back to the start of the current week (Monday). So, "start_of_week" would be "2023-09-04", which is a Monday.</li>
</ol>

<h2><a id="issueticket">Issue Ticket</a></h2>

<p>Briefly talk about your issue ticket and why you were confused, etc.</p>

Click <a href="https://github.com/orgs/nss-evening-web-development/discussions/987">HERE</a> to see the ticket I wrote to get the issue fixed.

<h2><a id="shoutouts">Shout Outs!</a></h2>

<a href="https://github.com/Justin-Ferwerda">Justin Ferwerda</a> - We ALWAYS have the best rubber duck sessions, and the one for how to get this project started was no exception.

<a href="https://github.com/semsi-dogruer">Semsi Dogruer</a>, <a href="https://www.linkedin.com/in/dale-karp/">Dale Karp</a>, and <a href="https://www.linkedin.com/in/0916dhkim/">Danny Kim</a> - for two hours we all sat on a Zoom call and hashed out how to get the External API on my App.

<a href="https://github.com/markh126">Mark Hamilton</a> - We had an excellent coding session on Zoom where he helped me rubber duck through some useEffect issues I was having and somehow I helped him fix some issues he was having with his Spotify API calls.

And last but certainly not least, <a href="https://github.com/drteresavasquez">Dr. T</a> for answering my tickets all year, not just this time!


