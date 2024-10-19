$('.icon-open').on('click', function () {
  $('.side-bar').animate({ left: '0' }, 500);
  $('.padding-left-jquery').animate({ paddingLeft: '250px' }, 500);
  // $(this).animate({ paddingLeft: '250px' });
});
$('.fa-xmark').on('click', function () {
  $('.side-bar').animate({ left: '-250px' }, 500);
  $('.padding-left-jquery').animate({ paddingLeft: '0px' }, 500);
});

$('.singer h2').on('click', function () {
  $(this).next().slideToggle(500);
  console.log($(this).next());
});

$('.sidebar-link').on('click', function () {
  let currentHref = $(this).attr('href');
  let Topsection = $(currentHref).offset().top;
  $('html , body').animate({ scrollTop: Topsection }, 5000);
  console.log($(this));
  console.log(Topsection);
});
/* 
function updateDateClock() {
  const eventDay = new Date('2024-10-25T00:00:00');
  const now = new Date();
  const day = eventDay.getDate() - now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  if (hours > 24) {
    day = eventDay.getDate() - now.getDate();
  }
  $('.day').text(`${day}`);
  $('.hours').text(`${hours}`);
  $('.minutes').text(`${minutes}`);
  $('.seconds').text(`${seconds}`);
}

updateDateClock();
setInterval(updateDateClock, 1000); */

window.onload = function () {
  countDownToTime('11 october 2025 9:56:00');
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let daysToSec = days * (24 * 60 * 60);

  let hours = Math.floor((timeDifference - daysToSec) / 3600);
  let mins = Math.floor((timeDifference - daysToSec - hours * 3600) / 60);
  let secs = Math.floor(timeDifference - daysToSec - hours * 3600 - mins * 60);

  $('.day').text(`${days}`);
  $('.hours').text(`${hours}`);
  $('.minutes').text(`${mins}`);
  $('.seconds').text(`${secs}`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

const maxMessage = 100;
function checkLengthMessage() {
  currentLengthTextArea = $('.message').val().length;
  remainingChars = maxMessage - currentLengthTextArea;
  $('.count-char').text(`${remainingChars}`);
}

$('.message').on('input', checkLengthMessage);
