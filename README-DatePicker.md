<table>
  <tr>
    <td><img src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/d6cf4868-59fb-42f5-aeca-36cca87b8351" /></td>
    <td>
<img src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/75bfb3c3-3b40-4496-8ed5-c87043597b30" />
    </td>
  </tr>
</table>

<h4>Click <a href="https://github.com/SeaForeEx/HoldMyComics-Server">HERE</a> to go to the HOLD MY COMICS! Server Side Repo!</h4>

<h2>Date Picker Steps</h2>
<li><a href="#installation">Install/Import</a></li>
<li><a href="#selecteddate">selectedDate</a></li>
<li><a href="#hdc">handleDateChange</a></li>
<li><a href="#useeffect">useEffect</a></li>
<li><a href="#navbar">NavBar</a></li>
<li><a href="#gmd">getMondayDate</a></li>
<li><a href="#useeffect2">useEffect Part 2</a></li>
<li><a href="#getallbooks">getAllBooks</a></li>
<li><a href="#listmethod">Updated List Method</a></li>
<li><a href="#shoutouts">Shout Outs!</a></li>

<h2><a id="installation">Install/Import</a></h2>

<img width="318" alt="Screen Shot 2023-09-10 at 8 08 07 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/11b1c486-a8f9-49d0-8e0c-c4e17ffc9c2c">

<p>I use Node Package Manager for all my Front End projects, so I installed React DatePicker using an npm command.</p>

<img width="512" alt="Screen Shot 2023-09-10 at 8 11 01 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/d5fca504-3abe-454a-a8df-f30fca1d08d5">

<ul>
  <li>import DatePicker from 'react-datepicker' - imports DatePicker from package I just installed</li>
  <li>import 'react-datepicker/dist/react-datepicker.css' - included the CSS file to ensure that the DatePicker is styled correctly</li>
</ul>

<h2><a id="selecteddate">selectedDate</a></h2>

<img width="537" alt="Screen Shot 2023-09-10 at 8 16 24 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/0844ef7d-2792-4987-be4d-017995fe6338">

<ul>
  <li>useState(null) initializes a state variable called selectedDate with an initial value of null.</li>
  <li>selectedDate is used to store and manage the selected date in your React component.</li>
  <li>setSelectedDate is a function used to update the selectedDate state variable.</li>
  <li>When you call setSelectedDate(newValue), it updates selectedDate with the new value and triggers a component re-render.</li>
  <li>This pattern is commonly used for managing and displaying dynamic data in React components, such as the selected date in my DatePicker.</li>
</ul>

<h2><a id="hdc">handleDateChange</a></h2>

<img width="516" alt="Screen Shot 2023-09-10 at 8 24 50 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/09716284-48c3-48a2-91bc-215c9efa2253">

<ul>
  <li>handleDateChange is a function that takes a date parameter, representing a selected date.</li>
  <li>Inside the function, it first updates the selectedDate state variable using setSelectedDate(date) with the selected date passed as an argument.</li>
  <li>It then checks if the date is truthy (not null or undefined). This is typically used to determine if a date has been selected.</li>
  <li>If a date has been selected:</li>
  <ul>
    <li>It formats the selected date into a string in ISO 8601 date format using date.toISOString().</li>
    <li>date.toISOString() format = "2023-09-10T14:30:00.000Z"</li>
    <li>It splits the resulting ISO string at the 'T' character and extracts the date portion using split('T')[0], effectively removing the time portion. This creates a formattedDate string in the format 'YYYY-MM-DD'.</li>
  </ul>
  <li>It uses the router.push function to navigate to a new URL path and update query parameters based on whether a date was selected or cleared:</li>
  <ul>
    <li>If a date was selected:</li>
    <ul>
      <li>It sets the pathname to '/books', indicating that the user is navigating to the '/books' route.</li>
      <li>It sets the query parameter with an object containing a single key-value pair: { formattedDate }. This updates the query parameter 'formattedDate' in the URL with the formatted date string.</li>
    </ul>
    <li>If no date was selected (i.e., the date is falsy):</li>
    <ul>
      <li>It navigates to '/books' without any query parameters, effectively clearing any previously set query parameters.</li>
    </ul>
  </ul>
  <li>This code handles date selection and navigation. It updates the URL and query parameters based on the selected date, allowing for dynamic filtering of content based on the selected date.</li>
</ul>

<h2><a id="useeffect">useEffect</a></h2>

<img width="383" alt="Screen Shot 2023-09-10 at 8 40 02 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/82f1c5b6-7864-4c05-87c3-b2b90606e349">

<ul>
  <li>useEffect is a React Hook that allows you to perform side effects in your functional components. It runs after the component has rendered.</li>
  <li>This useEffect resets the selectedDate state variable by calling setSelectedDate(null). This effectively clears the selected date.</li>
  <li>The useEffect also takes a dependency array [router.asPath] as its second argument. This means the effect will only run when the value of router.asPath changes.</li>
  <li>The purpose of this code is to reset the selected date whenever the route changes. It listens for changes in the router.asPath, which typically represents the current URL path in the routing system.</li>
  <li>When the route changes, the useEffect triggers, setting the selectedDate to null, effectively clearing any previously selected date.</li>
  <li>Essentially, it helps maintain consistency in the user interface by ensuring that the date picker starts with no selected date whenever the user navigates to a new route within the application.</li>
  </ul>

<h2><a id="navbar">NavBar</a></h2>

<img width="370" alt="Screen Shot 2023-09-10 at 8 48 08 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/491145f3-73b6-4ac5-bea9-734a6ce55eaf">

<ul>
  <li>DatePicker: This is a component from the react-datepicker library, used to display and interact with the DatePicker in the NavBar.</li>
  <li>selected={selectedDate}: This prop is passed to the DatePicker component, and it specifies the currently selected date. It links the date picker to the selectedDate state variable.</li>
  <li>onChange={handleDateChange}: This prop specifies the handleDateChange callback function that is executed when a date is selected or changed within the date picker. It updates the selectedDate state when a user selects a new date.</li>
  <li>placeholderText="Select a date": This prop sets a placeholder text that is displayed in the date picker input field when there is no date selected. It provides a hint to the user to indicate that they should select a date.</li>
</ul>

<h2><a id="gmd">getMondayDate</a></h2>

<p>We are now finally past the NavBar, ready to show the titles based on the formattedDate.  Let's move to the books/index.js file, inside my BookList function to be specific:</p>

<img width="541" alt="Screen Shot 2023-09-10 at 9 01 47 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/c2cd08c2-0f9d-4aac-acd9-a80aedb5a36c">

<ul>
  <li>getMondayDate is a JavaScript function that takes a dateString as an argument.</li>
  <li>Inside the function, it creates a selectedDate object by parsing the input dateString as a date using new Date(dateString).</li>
  <li>dateString is the selected date from the Date Picker turned into a string, used to calculate the Monday of the week.</li>
  <li>Overall, this code snippet takes a date string, calculates the date of the next Monday, and formats it in a human-readable "Month Day, Year" format. It's what shows the Monday for the selected date on the screen above all the releases.</li>
</ul>

<p>Let's walk through how this code plays with the dateString to get the Monday for the week of the selected date:</p>

<h4>Input Date: September 20, 2023 (a Wednesday)</h4>
<ol>
  <li>getMondayDate("2023-09-20") is called with the input date.</li>
  <li>It creates a selectedDate object by parsing the input date string:</li>
    <ul>
      <li>selectedDate is now equal to Wed Sep 20 2023 00:00:00 GMT+0000 (Coordinated Universal Time).</li>
    </ul>
  <li>It calculates the dayOfWeek by calling selectedDate.getDay(), which returns 3 (Wednesday).</li>
  <li>It calculates daysUntilMonday based on the dayOfWeek value:</li>
  <ul>
    <li>Since dayOfWeek is 3 (Wednesday), daysUntilMonday is set to -2 (2 days until the next Monday).</li>
  </ul>
  <li>It creates a new mondayDate object as a copy of selectedDate:</li>
  <ul>
    <li>mondayDate is initially equal to Wed Sep 20 2023 00:00:00 GMT+0000 (Coordinated Universal Time).</li>
  </ul>
  <li>It updates mondayDate by adding daysUntilMonday days to it:</li>
  <ul>
    <li>mondayDate is now equal to Mon Sep 18 2023 00:00:00 GMT+0000 (Coordinated Universal Time).</li>
  </ul>
  <li>It defines an options object for formatting:</li>
  <ul>
    <li>{ year: 'numeric', month: 'long', day: 'numeric' }.</li>
  </ul>
  <li>It uses mondayDate.toLocaleDateString(undefined, options) to format mondayDate as a string:</li>
  <ul>
    <li>The formatted date string is "September 18, 2023".</li>
  </ul>
</ol>

<img width="548" alt="Screen Shot 2023-09-10 at 9 22 55 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/72fb7243-851a-4d3e-9599-355381758641">

<h2><a id="useeffect2">useEffect Part 2</a></h2>

<img width="555" alt="Screen Shot 2023-09-10 at 10 34 29 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/2fc97d5f-e7d0-41a2-85b1-b49909fe8201">

<p>This useEffect is setup in my books/index.js, let's walk through the steps:</p>

<ul>
  <li>This useEffect function is set up to run whenever the value of router.query.formattedDate changes. It monitors changes in the query parameter formattedDate in the URL.</li>
  <li>router.query.formattedDate is the selected date from the DatePicker.</li>
  <li>When this useEffect is triggered:</li>
  <ul>
    <li>It begins by extracting the value of the formattedDate query parameter from the router.query object, storing it in the selectedDateQueryParam variable.</li>
  </ul>
  <li>It checks if selectedDateQueryParam is truthy, which means a date has been selected. If so:</li>
  <ul>
    <li>It calculates the date of the next Monday based on selectedDateQueryParam by calling the getMondayDate function, storing the result in selectedMondayDate.</li>
    <li>It sets the pickedMondayDate state variable with the calculated selectedMondayDate.</li>
    <li>It calls the displayBooks function with selectedDateQueryParam as a parameter. This fetches and displays books related to the selected week.</li>
  </ul>
  <li>If selectedDateQueryParam is falsy (no date is selected):</li>
    <ul>
      <li>It calls the getMondayDate function without any arguments. This calculates and sets the date of the next Monday for the current week.</li>
    </ul>
</ul>
<p>In summary, this useEffect is responsible for managing the state and data related to the selected date, taking the following actions:</p>
<ul>
  <li>If a date is selected in the query parameters, it calculates the date of the next Monday for that week, updates the state, and fetches books related to that week.</li>
  <li>If no date is selected, it calculates and sets the date of the next Monday for the current week.</li>
</ul>
<p>The overall goal is to ensure that the application properly handles and displays data based on the selected date, or the current week's date when no date is selected.</p>

<h2><a id="getallbooks">getAllBooks</a></h2>

<img width="487" alt="Screen Shot 2023-09-10 at 10 49 41 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/8633c842-4de7-4854-80d9-ff7ef350bbcf">

<p>I didn't really do much to change my getAllBooks Promise, I just changed the name of the property from "week" to "date" and changed the name of the query parameter from "week" to "formattedDate".  The names gotta make sense or who is going to be able to understand your code later?  I'm really doing it for me because I won't understand this primitive code next year.</p>

<h2><a id="listmethod">Updated List Method</a></h2>

<img width="567" alt="Screen Shot 2023-09-10 at 11 04 39 AM" src="https://github.com/SeaForeEx/HoldMyComics-Client/assets/113273122/51b5759b-b913-41a6-8d7e-f5cfd9dba6c2">

<p>Again, not too much change here between the "this/next week" list method and the "datetime picker" list method.  Here is what I changed:</p>

<ul>
  <li>Obviously the name of the query parameter</li>
  <li>selected_date = datetime.datetime.strptime(selected_date, '%Y-%m-%d').date()</li>
  <ul>
    <li>I added this line of code because this time I was passing the date as a query parameter instead of simply 'this' or 'next'. </li>
    <li>This code parses the query parameter into a datetime object that can be used to calculate the start and end days of the week for the getAllBooks API call.  Let's walk through these calculations step by step:</li>
  <ol>
    <li>selected_date = request.GET.get('formattedDate') retrieves the selected date "2023-09-20" from the query parameters.</li>
    <li>selected_date = datetime.datetime.strptime(selected_date, '%Y-%m-%d').date() parses "2023-09-20" into a datetime object and then converts it to a date object:</li>
    <ul>
      <li>selected_date becomes datetime.date(2023, 9, 20).</li>
    </ul>
  <li>today = datetime.date.today() gets the current date:</li>
    <ul>
      <li>today is equal to the current date, which depends on when the code is executed.</li>
    </ul>
  <li>The code compares selected_date with today to determine if the selected date matches the current date.</li>
    <ul>
      <li>In this case, let's assume that today is "2023-09-22" (two days after the selected date).</li>
      <li>Since selected_date (2023-09-20) does not match today (2023-09-22), the code proceeds to calculate the start date for the selected week.</li>
    </ul>

  <li>The code calculates the start date for the selected week using the formula:</li>
  <ul>
    <li>start_of_week = selected_date - datetime.timedelta(days=selected_date.weekday())</li>
    <li>selected_date.weekday() returns the weekday index for "2023-09-20," which is 1 (Tuesday).</li>
    <li>So, start_of_week = 2023-09-20 - datetime.timedelta(days=1).</li>
    <li>datetime.timedelta(days=1) subtracts one day from "2023-09-20," resulting in "2023-09-19."</li>
  </ul>

  <li>The start_of_week date is calculated as "2023-09-19," which represents the start date of the week containing the selected date "2023-09-20."</li>
  </ol>
<p>So, when the selected date is "2023-09-20," the code calculates the start date of the week containing that date as "2023-09-19." This allows you to retrieve books related to the week starting on September 19, 2023, based on the selected date.</p>
  </ul>
</ul>

<h2><a id="shoutouts">Shout Outs!</a></h2>

<p>Whew, this has been a fun ride.  I started coding Saturday morning, then coded the date picker Saturday night, now I'm finishing the documentation Sunday morning.  This has been so much fun that I had a hard time going to sleep from the dopamine rush this code has been providing.  But I need to take a break, lest I burn out and ruin my momentum.</p>

<p>But first, a quick few SHOUT OUTS!</p>

<a href="https://github.com/Justin-Ferwerda">Justin Ferwerda</a> - What an instructor, he stayed a few minutes after class to help me fix the issue with my "this week"/"next week" links.  Before we logged off, he suggested that I use a drop-down calendar and pass a date to my books/index.js page instead of 'this'/'next' strings.  I was already considering it (reluctantly) before then, but his suggestion confirmed that I needed to do it, this date picker was such. a great design move, it improves the functionality of my site and looks more visually appealing.  Thanks again, Justin!

<a href="https://github.com/TrinityChristiana">Trinity Christiana</a> - The mysterious all-knowing Senior Instructor of the Back End courses at NSS!  She has a method and while I didn't understand it at first, I decided to trust her and am I glad I did!  She wouldn't let any of us choose External API as part of our MVP and I am so glad that she did that.  At first, I didn't agree, but being able to make my MVP ridiculously easy paid off because in the end, I was able to connect to an External API as a stretch goal.  Thanks again, Trinity!


