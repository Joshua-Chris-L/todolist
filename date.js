// jshint esversion:6
exports.getDate = function() {
  let today = new Date();
  let curentDay = today.getDay();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  // let day = today.toLocaleDateString("en-US", options);
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
  let today = new Date();
  let curentDay = today.getDay();
  let options = {
    weekday: "long",
  };
  // let day = today.toLocaleDateString("en-US", options);
  return today.toLocaleDateString("en-US", options);
};
