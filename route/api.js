
const tableData = require("../data/tableData");
const waitingData = require("../data/waitingData");

module.exports = function(app) {
  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitingData);
  });

  app.post("/api/tables", function(req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
    }
    else {
      waitData.push(req.body);
    }
  });
};
