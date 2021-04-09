# MMM-FamilyCalendar
A MagicMirror Module that implements the FamilyCalendar Python Script

## Installation
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
		position: "top_left",
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
| `updateInterval`        | 1500000                                | **Optional**      TODO                                                                      |
| `python`                | "/home/pi/Timetable/venv/bin/python3"  | **Optional**      TODO                                                                      |
| `familyCalendar`        | "/home/pi/Timetable/create_picture.py" | **Optional**      TODO                                                                      |
| `fc_events`             | 8                                      | **Optional**      TODO                                                                      |
| `fc_days`               | 100                                    | **Optional**      TODO                                                                      |
| `fc_width`              | 350                                    | **Optional**      TODO                                                                      |
| `fc_mirror`             | true                                   | **Optional**      TODO                                                                      |
| `fc_names`              | true                                   | **Optional**      TODO                                                                      |
| `fc_path_mm`            | "/home/pi/MagicMirror/"                | **Optional**      TODO                                                                      |
| `maxWidth`              | "100%"                                 | **Optional**      TODO                                                                      |
| `maxHeight`             | "100%"                                 | **Optional**      TODO                                                                      |
| `opacity`               | 1.0                                    | **Optional**      TODO                                                                      |
| `debug`                 | false                                  | **Optional**      TODO                                                                      |
