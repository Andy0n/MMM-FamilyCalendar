# MMM-FamilyCalendar
A MagicMirror Module that implements the [FamilyCalendar](https://github.com/Andy0n/FamilyCalendar) Python Script.

## Installation
Download, install and configure [Andy0n/FamilyCalendar](https://github.com/Andy0n/FamilyCalendar) first.


Download the Module and install the dependencies:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/Andy0n/MMM-FamilyCalendar.git
cd MMM-FamilyCalendar
npm install
```

Add module to `config/config.js` file:

```javascript
{
	module: "MMM-FamilyCalendar",
	position: "top_left"
},
```

## Configuration
You can change the default Configuration in the `config/config.js` file:

```javascript
{
	module: "MMM-FamilyCalendar",
	position: "top_left",
	config: {
		updateInterval: "3000000",
		python: "/usr/bin/python"
	}
},
```

### Config Options:
| **Option**              | **Default**                            | **Description**                                                                             |
| ----------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| `updateInterval`        | 1800000                                | **Optional** Interval in which data should be pulled and refreshed on the mirror (in ms)    |
| `python`                | "/home/pi/Timetable/venv/bin/python3"  | **Optional** Path to the python executable, that should be used                             |
| `familyCalendar`        | "/home/pi/Timetable/create_picture.py" | **Optional** Path to the create_picture.py from [Andy0n/FamilyCalendar](https://github.com/Andy0n/FamilyCalendar)       |
| `fc_events`             | 8                                      | **Optional** Number of events that should be displayed below the timetable.                 |
| `fc_days`               | 100                                    | **Optional** Days that should be foreseen for the eventlist below                           |
| `fc_width`              | 350                                    | **Optional** Width in Pixels of the timetable                                               |
| `fc_mirror`             | true                                   | **Optional** true if the image should be optimized for use with a mirror (false: white background and colored bars)                 |
| `fc_names`              | true                                   | **Optional** true if names should be displayed in the bars                                  |
| `fc_path_mm`            | "/home/pi/MagicMirror/"                | **Optional** Path to the MagicMirror installation                                           |
| `maxWidth`              | "100%"                                 | **Optional** Displayed width of the image                                                   |
| `maxHeight`             | "100%"                                 | **Optional** Displayed height of the image                                                  |
| `opacity`               | 1.0                                    | **Optional** Opacity of the timetable                                                       |
| `debug`                 | false                                  | **Optional** true if logging should be enabled                                              |

## Examples
TODO
