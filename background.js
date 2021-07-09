// algorithm
// for every CSS color,
//   remove the green and blue channels (#xxyyzz becomes #xx0000)
//   if the user has light mode enabled,
//     invert the red channel
// for every img,
//   apply CSS invert()
//   apply CSS filter() to remove green and blue channels
function lateNightify() {
  const allElements = document.querySelectorAll('*');
  for (const el of allElements) {

  }
}

chrome.runtime.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id, allFrames: true},
    function: lateNightify
  });
});
//function can run this code when invoked on click...
//document.getElementById("body").style.background = "rgb(2%,5%,30%)";

//registers the event listener for web request
// chrome.webRequest.onBeforeRequest.addListener(
//     callback, filter, opt_extraInfoSpec);

//background-color: rgb(2%,5%,30%)
