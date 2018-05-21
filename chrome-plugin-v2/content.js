var url = window.location.href

setTimeout(function(){
  if (url.indexOf('https://medium') !== -1) {
    if (url.indexOf('?' !== -1)) {
      url = url.split("?")[0]
    }
    var post = socialProStripTags((document.getElementsByClassName('graf')[0].innerHTML).replace(/&nbsp/g, ' ')) + ' \n\n' + url
    console.log(post)
    socialProCopyToClipboard(post)
  } else if (url.indexOf('https://www.cssdesignawards.com/') !== -1) {
    var post = '#inspiration' + '\n\n' + document.getElementsByClassName("single-website__thumbnail")[0].href
    console.log(post)
    socialProCopyToClipboard(post)
  }
}, 2000)

function socialProCopyToClipboard(post) {
  navigator.clipboard.writeText(post).then(function() {
    console.log('Async: Copying to clipboard was successful!')
  }, function(err) {
    console.error('Async: Could not copy text: ', err)
  })
}

function socialProStripTags(html)
{
   var tmp = document.createElement("DIV")
   tmp.innerHTML = html
   return tmp.textContent || tmp.innerText || ""
}
