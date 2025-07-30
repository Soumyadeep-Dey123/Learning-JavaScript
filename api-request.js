// API request in  
//
// API request sends a json string response which later is then converted into object, to make it accessible
// JSON.parse(*json string*) -> converts json string into js object -> makes it usable in code
const requestUrl = "https://api.github.com/users/hiteshchoudhary"
const imageDiv = document.getElementById('imageDiv')
const followersDiv = document.getElementById('followersDiv')
const mainDiv = document.getElementById('mainDiv')
const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl)


xhr.onreadystatechange = function () {
 // console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const apiData = JSON.parse(this.responseText);
    //console.log(apiData);   
    //const pfpUrl = apiData.avatar_url
   // const followers = apiData.followers
   // console.log(pfpUrl)
   // imageDiv.innerHTML = `<img class="h-[460px] w-[460px] object-cover" src='${pfpUrl}'></img>`
 //   followersDiv.innerHTML = `<p class="text-white">Followers : ${followers}</p>`
    //
    for (const key in apiData) {
      mainDiv.innerHTML = mainDiv.innerHTML + `<p class="text-white">${key} : ${apiData[key]}</p>`
    }

  }
}

xhr.send()
