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
<li><a href="#gcmd">getCurrentWeekMondayDate</a></li>
<li><a href="#useffect2">useEffect Part 2</a></li>
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


<h2><a id="gmd">getMondayDates</a></h2>





<h2><a id="gcmd">getCurrentWeekMondayDate</a></h2>





<h2><a id="useeffect2">useEffect Part 2</a></h2>





<h2><a id="getallbooks">getAllBooks</a></h2>




<h2><a id="listmethod">Updated List Method</a></h2>




<h2><a id="shoutouts">Shout Outs!</a></h2>


