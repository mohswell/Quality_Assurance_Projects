# City Weather Display and News Aggregator apps Project

This project is a Vue.js application that fetches weather data using the OpenWeatherMap API and displays it. It also features a news aggregator functionality utilizing the NewsAPI.

## Features

- Display current weather information for a specified city.
- Fetch top news articles from various sources.
- Search functionality to filter news articles.
- Responsive design for optimal viewing on all devices.

## APIs Used

- **OpenWeatherMap API**: Used to retrieve weather data for a given location. You can sign up and obtain your API key [here](https://openweathermap.org/api).
- **NewsAPI**: Used to fetch top news articles. You can sign up and obtain your API key [here](https://newsapi.org/).

## Setup and Usage

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-news-app.git
   cd weather-news-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add your API keys to the `.env` file:
   ```plaintext
   VUE_APP_WEATHER_API_KEY=your_openweathermap_api_key
   VUE_APP_NEWS_API_KEY=your_newsapi_api_key
   ```

### Running the App

```bash
npm run serve
```

The app will be available at [http://localhost:8080](http://localhost:8080).

### Testing

```bash
npm run test
```

This will run the unit tests for the application.

## Quality Assurance

- **Testing**: Unit tests are implemented to ensure the correctness of components and functionalities.
- **Code Linting**: ESLint is used to enforce code style and maintainability.
- **Error Handling**: Proper error handling is implemented to gracefully handle API request failures and user input errors.
- **Cross-Browser Compatibility**: The app is tested to ensure compatibility across major browsers.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MohsLaw License - Email me at [LICENSE](mohammedabdy10@gmail.com) for details.
