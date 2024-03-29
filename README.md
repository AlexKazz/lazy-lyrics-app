<!-- [![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] -->

<div>
<h1 align="center">Lazy Lyrics</h1>

<p align="center">
<a href="https://www.lazy-lyrics.io/">www.lazy-lyrics.io</a>
</p>

<p align="center">
Do you enjoy writing lyrics, but struggle with writer's block?
Or maybe you just want to write lyrics faster?
<br />
Then Lazy Lyrics is the app for you!
Enter a word, and get back a lyric snippet from a real song.
</p>
</div>
<br />

### Built With

- [![Javascript][javascript]][javascript-url]
- [![React.js][react.js]][react-url]
- [![Redux.js][redux.js]][redux.js-url]
- [![Node.js][node.js]][node.js-url]
- [![Express.js][express.js]][express.js-url]

# Table of Contents

- [How It Works](#how-it-works)
- [How To Use](#how-to-use)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Run Locally](#run-locally)

## How It Works

• Lazy Lyrics uses the <a href="https://developer.musixmatch.com/">Musixmatch API</a> to grab lyric snippets based on text input.
<br/>
<br/>
• Due to API method parameter and data limitations, this process must be done in two separate API calls.
<br/>
<br/>
• When you submit a word, an API call is made from the Lazy Lyrics server (built on express) to the Musixmatch API.
<br/>
<br/>
• Information including <a href="https://developer.musixmatch.com/documentation/api-reference/track-search">artist, song title, and track ID</a> are returned.
<br/>
<br/>
• The track ID is then used to make a second Musixmatch API call to grab the <a href="https://developer.musixmatch.com/documentation/api-reference/track-snippet-get">lyric snippet</a>.
<br/>
<br/>
• Lazy lyrics generates a random index and random page number for each submission to provide ~100 different results for the same word.
<br/>
<br/>
_As this app is currently for personal use_ (not financed 🤷‍♂️), _it is subject to Musixmatch API <a href="https://developer.musixmatch.com/faq">daily data limits</a>. If you submit a word and nothing is returned, the data limit has been reached for that day and you can try again tomorrow._

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## How To Use

• Type in a word.
<br/>
• Get back a lyric, in addition to the song title, artist, and your prompt.
<br/>
• Hover over a lyric to delete it.
<br/>
• On a mobile device, select a lyric to view the song info and delete option.
<br/>
• The "Copy All" button copies all of your lyrics to your clipboard.
<br/>
• The "Delete All" button deletes all of your lyrics.
<br/>
• The "Question Mark" button opens a sidebar that contains information about Lazy Lyrics.
<br/>
• The Moon/Sun button switches the app colors to Dark/Light mode.
<br/>
• The "GitHub" button links to this repository.

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Roadmap

- [x] Build the UI
- [x] Develop the API logic
- [x] Write some weird lyrics
- [x] Replace React Hooks with Redux Toolkit
- [ ] Fix various grammatical errors in API responses
- [ ] Replace API calls with AI generated lyrics
  - [ ] Build the machine learning model

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Run Locally

Getting started is easy! Just follow the steps below to get a local copy up and running.
<br/>
_You will need to create a (free) Musixmatch account for your own API key_.

### Prerequisites

- npm
  ```sh
  npm install
  ```
- Musixmatch account

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:AlexKazz/lazy-lyrics-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file in root folder containing the following:
   ```sh
   MY_KEY=<your musixmatch api key>
   ```
4. Start the servers
   ```js
   npm run dev
   ```
5. Open the app in your browser
   ```sh
    http://localhost:3000/
   ```

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/AlexKazz/lazy-lyrics-app
[contributors-url]: https://www.linkedin.com/in/alex-kazenoff/
[stars-shield]: https://img.shields.io/github/stars/lazy-lyrics-app
[stars-url]: https://github.com/AlexKazz/lazy-lyrics-app
[issues-shield]: https://img.shields.io/github/issues-raw/AlexKazz/lazy-lyrics-app
[issues-url]: https://github.com/AlexKazz/lazy-lyrics-app/issues
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[javascript-url]: https://www.javascript.com/
[node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node.js-url]: https://nodejs.org/en/
[express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express.js-url]: https://expressjs.com/
[redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[redux.js-url]: https://redux-toolkit.js.org/
