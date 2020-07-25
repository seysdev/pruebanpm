import $ from "jquery";
import _ from "lodash";
// npm i jquery

// console.log("$", $);
console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
$(document.body).click(function () {
  if ($("div").first().is(":hidden")) {
    $("div").slideDown("slow");
  } else {
    $("div").hide();
  }
});
