# weather-application
One page, web based weather application using React and Next.js.

## FILES STRUCTURE

- weather-app/
  - app/
    - api/
        - forecast/ (api route for 5 day forecast)
        - weather/ (api route for current weather)
    - components/ (Page components)
    - lib/ (utility files)
    - types/ (Interface definitions)
    - layout.tsx (Layout)
    - page.tsx (Main entry point)
  - public/ (Static files)
    - .env (Frontend environment variables)
    - package.json (Frontend dependencies)
  - project_details/ (Project documentation)

## Install + dependencies

### Run Development

1. Navigate to

```
cd weather-app
```

2. Install dependencies

```
npm install
```

3. Don't forget to set up your `.env` file in `/weather-app` directory with this information below:
- `WEATHER_API_KEY=` your API key
   
4. Run the app

```
npm run dev
```

4. The app will most likely be running on server `http://localhost:3000/` but please check in terminal to double check which port your app is running on.

## RUNNING TESTS

#### Jest

1. Given more time I would implement testing.

2. Run the tests

```
npm test
```

## Updates for future:

- Handle edge cases for postcodes without space
- Handle if API doesn't give icon
- Calculate daily average temperatures, wind speed etc.
- Better functionality for light/dark mode