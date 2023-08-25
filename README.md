# Pokemon Website 

- [Installation](#installation)
- [Usage](#usage)
  - [Changing the metrics http endpoint](#changing-the-metrics-http-endpoint)
  - [Disabling default metrics collection](#disabling-default-metrics-collection)
  - [Configuring the default metrics](#configuring-the-default-metrics)
- [Injecting individual metrics](#injecting-individual-metrics)
- [Setting default labels](#setting-default-labels)
- [Available metrics](#available-metrics)
  - [Counter](#counter)
  - [Gauge](#gauge)
  - [Histogram](#histogram)
  - [Summary](#summary)
- [Providing a custom controller](#providing-a-custom-controller)
- [Pushgateway](#pushgateway)

## Installation
```bash
pnpm install 
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

