/* Magic Mirror
 * Module: MMM-FamilyCalendar
 *
 * By Andreas Himmler
 * MIT Licensed.
 */

const NodeHelper = require("node_helper");
const exec = require("child_process").exec;
const fs = require("fs");
const glob = require("glob");

module.exports = NodeHelper.create({
  start: function () {
    this.log("log", "MMM-FamilyCalendar helper started ...");
  },

  getFamilyCalendar: function (command) {
    var self = this;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        self.log("error", `error: ${error.message}`);
      } else if (stderr) {
        self.log("error", `stderr: ${stderr}`);
      } else {
        self.log("info", "Calendar downloaded");
        self.sendSocketNotification("FAMILYCALENDAR_UPDATED", "");
      }
    });
  },

  deleteFamilyCalendar: function (path) {
    var self = this;

    fs.unlink(path, (err) => {
      if (err) {
        self.log("error", err);
        return;
      }
    });
  },

  deleteOld: function (path) {
    var self = this;

    glob(path + '/public/time_*.png', function (err, files) {
      if (err) {
        self.log("error", err);
      } else {
        self.log("log", "Delete following files" + files);

        files.forEach(function (file) {
          fs.unlink(file, (er) => {
            if (er) {
              self.log("error", er);
              return;
            }
          });
        });
      }
    });
  },

  log: function(type, msg){
    var payload = [type, msg];
    this.sendSocketNotification("LOG_FAMILYCALENDAR", payload);
  },

  socketNotificationReceived: function (notification, payload) {
    var self = this;

    switch(notification){
      case "GET_FAMILYCALENDAR":
        self.getFamilyCalendar(payload);
        break;
      case "DELETE_FAMILYCALENDAR":
        self.deleteFamilyCalendar(payload);
        break;  
      case "DELETE_FAMILYCALENDAR_OLD":
        self.deleteOld(payload);
        break;
    }
  },
});
