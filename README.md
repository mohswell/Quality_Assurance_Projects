### Two Quality Assurance projects: Testing a React.js City Weather App and a Vue.js Current News Articles App I developed using a public weather API and a news API.

# 1. Weather App ☀️

This project is a React.js application that fetches weather data using the OpenWeatherMap API and displays it.

## Features ℹ️

- Display current weather information for a specified city.
- Responsive design for optimal viewing on all devices.

## APIs Used 🔌

- **OpenWeatherMap API**: Used to retrieve weather data for a given location. You can sign up and obtain your API key [here](https://openweathermap.org/api).

## Setup and Usage 🛠️

### Prerequisites 📋

- Node.js and npm installed on your machine.

### Installation ⬇️

1. Clone the repository:
   ```bash
   git clone https://github.com/Moddic10/Quality_Assurance_Projects.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration ⚙️

1. Create a `.env` file in the root directory of the project.
2. Add your API key to the `.env` file:
   ```plaintext
   WEATHER_API_KEY=your_openweathermap_api_key
   ```

### Running the App 🏃‍♂️

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Testing 🧪

- **Unit Tests**: Implemented using Mocha.Js and Chai assertion Test Utils to ensure the correctness of components and functionalities.

```bash
npx mocha servertest.js
```

## Quality Assurance 🛡️

- **Testing**: Unit tests cover key functionalities, including weather data retrieval and display.
- **Code Linting**: ESLint is used to enforce code style and maintainability.
- **Error Handling**: Proper error handling is implemented to gracefully handle API request failures and user input errors.
- **Cross-Browser Compatibility**: The app is tested to ensure compatibility across major browsers.

## Contributing 🤝

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


# 2. News App 📰

This project is a Vue.js application that fetches top news articles using the NewsAPI and displays them.

## Features ℹ️

- Fetch top news articles from various sources.
- Search functionality to filter news articles.
- Responsive design for optimal viewing on all devices.

## APIs Used 🔌

- **NewsAPI**: Used to fetch top news articles. You can sign up and obtain your API key [here](https://newsapi.org/).

## Setup and Usage 🛠️

### Prerequisites 📋

- Node.js and npm installed on your machine.

### Installation ⬇️

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/news-app.git
   cd news-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration ⚙️

1. Create a `.env` file in the root directory of the project.
2. Add your API key to the `.env` file:
   ```plaintext
   VUE_APP_NEWS_API_KEY=your_newsapi_api_key
   ```

### Running the App 🏃‍♂️

```bash
npm run serve
```

The app will be available at [http://localhost:8080](http://localhost:8080).

### Testing 🧪

- **Unit Tests**: Implemented using a Python script (`test_news.py`) to test Vue components using tools like pytest and Selenium.

```bash
pytest test_news.py
```

## Quality Assurance 🛡️

- **Testing**: Python script (`test_news.py`) covers key functionalities, including news data retrieval and display, as well as search functionality.
- **Code Linting**: ESLint is used to enforce code style and maintainability.
- **Error Handling**: Proper error handling is implemented to gracefully handle API request failures and user input errors.
- **Cross-Browser Compatibility**: The app is tested to ensure compatibility across major browsers.

## License 📄

This project is licensed under the MohsLaw License - Just Kidding😁, email me at mohammedabdy10@gmail.com for details on the code.
