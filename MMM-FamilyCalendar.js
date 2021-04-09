/* Magic Mirror
 * Module: MMM-FamilyCalendar
 *
 * By Andreas Himmler
 * MIT Licensed.
 */

Module.register("MMM-FamilyCalendar", {
  defaults: {
    updateInterval: 1800000,
    python: "/home/pi/Timetable/venv/bin/python3",
    familyCalendar: "/home/pi/Timetable/create_picture.py",
    fc_events: 8,
    fc_days: 100,
    fc_width: 350,
    fc_mirror: true,
    fc_names: true,
    fc_path_mm: "/home/pi/MagicMirror/",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 1.0,
    debug: true
  },

  requiresVersion: "2.1.0",

  start: function () {
    var self = this;

    this.timetable = "time.png";

    self.log("log", "Started");
    self.updateDom();

    self.sendSocketNotification("DELETE_FAMILYCALENDAR_OLD", this.data.path);

    self.updateFamilyCalendar();

    setInterval(function () {
      self.updateFamilyCalendar();
    }, this.config.updateInterval);
  },

  updateFamilyCalendar: function () {
    var self = this;
    var command = this.config.python + " " + this.config.familyCalendar;

    self.log("log", "Updating Calendar");

    if (this.timetable != "time.png") {
      self.log("log", "Delete old timetable");
      self.sendSocketNotification("DELETE_FAMILYCALENDAR", this.data.path + "public/" + this.timetable);
    }

    this.timetable = "time_" + Math.random() + ".png";

    if (this.config.fc_events) command += " --events " + this.config.fc_events;
    if (this.config.fc_days) command += " --days " + this.config.fc_days;
    if (this.config.fc_width) command += " --width " + this.config.fc_width;
    if (this.config.fc_mirror) command += " --mirror ";
    if (this.config.fc_names) command += " --names ";

    command += " --path " + this.config.fc_path_mm + "/" + this.data.path + "public/" + this.timetable;

    self.sendSocketNotification("GET_FAMILYCALENDAR", command);
  },

  getDom: function () {
    var wrapper = document.createElement("div");
    var img = document.createElement("img");

    this.log("log", "Updating HTML");

    img.src = this.data.path + "public/" + this.timetable;
    img.id = this.name;
    img.style.maxWidth = this.config.maxWidth;
    img.style.maxHeight = this.config.maxHeight;
    img.style.opacity = self.config.opacity;

    wrapper.appendChild(img);

    return wrapper;
  },

  log: function (type, msg) {
    if (this.config.debug) {
      msg = "[" + this.name + "] " + msg;

      switch (type) {
        case "log":
          Log.log(msg);
          console.log(msg);
          break;
        case "info":
          Log.info(msg);
          console.log(msg);
          break;
        case "error":
          Log.error(msg);
          console.error(msg);
          break;
      }
    }
  },

  socketNotificationReceived: function (notification, payload) {
    var self = this;

    switch (notification) {
      case "FAMILYCALENDAR_UPDATED":
        self.updateDom();
        break;
      case "LOG_FAMILYCALENDAR":
        self.log(payload[0], payload[1]);
        break;
    }
  }
});
