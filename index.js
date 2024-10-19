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
});

function updateDateClock() {
  const eventDay = new Date('2024-10-25T00:00:00');
  const now = new Date();
  console.log(eventDay.getDate() - now.getDate());
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
setInterval(updateDateClock, 1000);
