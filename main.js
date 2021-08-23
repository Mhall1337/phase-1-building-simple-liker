// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// document.querySelectorAll('span.like-glyph').forEach(item => {
//   item.addEventListener('click', event => {
//     mimicServerCall()
//     .then(() => {document.querySelector('span.like-glyph').className = 'activated-heart'})
//     .catch((error) => {document.querySelector('#modal').className = ''
//     document.querySelector('#modal-message').textContent = error})
//   })
// })

const heartOne = document.querySelector("#\\32 01811189 > footer > ul > li > span")
const heartTwo = document.querySelector("#\\32 01811190 > footer > ul > li > span")
const heartThree = document.querySelector("#\\32 01811191 > footer > ul > li > span")
const heartFour = document.querySelector("#\\32 01811192 > footer > ul > li > span")
const heartFive = document.querySelector("#\\32 01811193 > footer > ul > li > span")


heartOne.addEventListener('click', event => {
  mimicServerCall()
  .then(() => {heartOne.className = 'activated-heart'
  heartOne.textContent = FULL_HEART})
  .catch((error) => {document.querySelector('#modal').className = ''
  document.querySelector('#modal-message').textContent = error
  setTimeout(function (){document.querySelector('#modal').className = 'hidden'}, 3000)
  })
  if(heartOne.className = 'activated-heart'){
    heartOne.className = ''
};
})

heartTwo.addEventListener('click', event => {
  mimicServerCall()
  .then(() => {heartTwo.className = 'activated-heart'
  heartTwo.textContent = FULL_HEART})
  .catch((error) => {document.querySelector('#modal').className = ''
  document.querySelector('#modal-message').textContent = error
  setTimeout(function (){document.querySelector('#modal').className = 'hidden'}, 3000)
  })
  if(heartTwo.className = 'activated-heart'){
    heartTwo.className = ''
};
})
  

heartThree.addEventListener('click', event => {
  mimicServerCall()
  .then(() => {heartThree.className = 'activated-heart'
  heartThree.textContent = FULL_HEART})
  .catch((error) => {document.querySelector('#modal').className = ''
  document.querySelector('#modal-message').textContent = error
  setTimeout(function (){document.querySelector('#modal').className = 'hidden'}, 3000)
  })
  if(heartThree.className = 'activated-heart'){
    heartThree.className = ''
};
})

heartFour.addEventListener('click', event => {
  mimicServerCall()
  .then(() => {heartFour.className = 'activated-heart'
  heartFour.textContent = FULL_HEART})
  .catch((error) => {document.querySelector('#modal').className = ''
  document.querySelector('#modal-message').textContent = error
  setTimeout(function (){document.querySelector('#modal').className = 'hidden'}, 3000)
  })
  if(heartFour.className = 'activated-heart'){
    heartFour.className = ''
};
})

heartFive.addEventListener('click', event => {
  mimicServerCall()
  .then(() => {heartFive.className = 'activated-heart'
  heartFive.textContent = FULL_HEART})
  .catch((error) => {document.querySelector('#modal').className = ''
  document.querySelector('#modal-message').textContent = error
  setTimeout(function (){document.querySelector('#modal').className = 'hidden'}, 3000)
  })
  if(heartFive.className = 'activated-heart'){
    heartFive.className = ''
};
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
