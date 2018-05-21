var socialProUrl = window.location.href

setTimeout(function(){
  if (socialProUrl.indexOf('https://medium') !== -1) {
    if (socialProUrl.indexOf('?' !== -1)) {
      socialProUrl = socialProUrl.split("?")[0]
    }
    var title = document.getElementsByClassName('graf')[0].innerHTML
    // if (title.indexOf('<img' !== -1)) {
    //   //title = document.getElementsByClassName('graf')[1].innerHTML
    //   title = socialProUrl.split("/")
    //   title = title[title.length - 1]
    //   title = title.split("-")
    //   title.splice(-1,1)
    //   title = socialProCapitalizeFirstLetter(title.join(' '))
    // }
    var post = socialProStripTags(title.replace(/&nbsp/g, ' ')) + ' \n\n' + socialProUrl
    console.log(post)
    socialProCopyToClipboard(post)
  } else if (socialProUrl.indexOf('https://www.cssdesignawards.com/') !== -1) {
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

function socialProCapitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
