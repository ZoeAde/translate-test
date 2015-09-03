// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

var text = $('#word').val();
var input = $('#startLang').val();
var output = $('#outLang').val();

$('button').on("click", function(e) {
  e.preventDefault();
  console.log("text: " + text + "; input: "  + input +  ";  output: " + output);
});


});
