<h1>Memorable Water Bottle Project</h1>

<p>This project is a simple React application created with Vite. It is a small front-end web app that shows a page title and loads bottle data from a local JSON file.</p>

<h2>What this project does</h2>
<p>The app has a basic layout with a header and a section that displays the number of bottle items currently available in the data file. It is a beginner-friendly React project that helps you understand how components, state, and data fetching work together.</p>

<h2>How the project works</h2>
<ol>
  <li>The app starts from the main entry file and renders the main component.</li>
  <li>The main component imports the header and bottle components.</li>
  <li>The bottle component uses React state to store data.</li>
  <li>It fetches data from a local JSON file named <strong>bottles.json</strong>.</li>
  <li>The data is displayed on the screen as a count.</li>
</ol>

<h2>Main files in the project</h2>
<ul>
  <li><strong>index.html</strong> - the main HTML page for the app</li>
  <li><strong>src/main.jsx</strong> - the React entry point</li>
  <li><strong>src/App.jsx</strong> - the main app component</li>
  <li><strong>src/components/header/header.jsx</strong> - the header component</li>
  <li><strong>src/components/bottles/bottles.jsx</strong> - the component that loads and shows bottle data</li>
  <li><strong>public/bottles.json</strong> - the JSON data file used by the app</li>
</ul>

<h2>Languages and technologies used</h2>
<ul>
  <li><strong>HTML</strong> - for the main page structure</li>
  <li><strong>JavaScript</strong> - for app logic</li>
  <li><strong>JSX</strong> - for writing React components</li>
  <li><strong>React</strong> - for building the user interface</li>
  <li><strong>Vite</strong> - for running and building the project</li>
  <li><strong>JSON</strong> - for storing the bottle data</li>
</ul>

<h2>How to run the project</h2>
<ol>
  <li>Open the project folder in VS Code.</li>
  <li>Open a terminal in that folder.</li>
  <li>Run this command:</li>
</ol>

<pre><code>npm install</code></pre>

<ol start="4">
  <li>After installation, start the app with:</li>
</ol>

<pre><code>npm run dev</code></pre>

<p>Then open your browser and go to:</p>

<pre><code>http://localhost:5173/</code></pre>

<h2>How to view it in Chrome</h2>
<ol>
  <li>Start the app using the command above.</li>
  <li>Open Google Chrome.</li>
  <li>Go to <strong>http://localhost:5173/</strong>.</li>
</ol>

<h2>Note</h2>
<p>This is a simple project and is mainly used for learning React basics such as components, props, state, and fetching data from a JSON file.</p>
