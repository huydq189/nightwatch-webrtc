# nightmareJS load test template for webRTC 
> https://github.com/segmentio/nightmare

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)

<!-- ## General Information
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it? -->
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- NightmareJS
- v4l2loopback for linux


## Features
List the ready features here:
- Virtual webcam script
- Auto load test using chrome, firefox, safari, selemium server

<!-- ## Screenshots
![Example screenshot](./img/screenshot.png) -->
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
Install v4l2loopback for virtual webcam if necessary
```
npm install
```

## Usage
Edit the `"start"` script in package.json

*Increase the number of browser by add more browser name behind the `-e` flag*

Example:

- 2 process
```
-e chrome,chrome
```
- 4 process
```
-e chrome,chrome,chrome,chrome
```

<!-- ## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. -->

<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
