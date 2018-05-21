document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('compose-post');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.executeScript({
      code: "console.log((document.getElementsByClassName('graf')[0].innerHTML).replace(/&nbsp;/g, ' ') + '\\n\\n' + window.location.href)"
    })
    var copyText = window.location.href
    copyText += '\n'
    copyText += '\n'
    copyText += $('#bc10').text()
    copyText += '\n'
    copyText += '\n'
    copyText += $('.link .u-baseColor--link').text()
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }, false)
}, false)