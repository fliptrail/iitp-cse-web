var basicTimeline = anime.timeline({
    loop:true
});

basicTimeline
  .add({
    targets: '.banner .col',
    opacity: 1,
    easing: 'linear',
    duration:2000
  })
  .add({
    targets: '.banner .col',
    opacity: 0,
    easing: 'linear',
    duration:2000
  })

var scroll = anime.timeline({
    loop:true
});

scroll
    .add({
        targets: '.scroll-down',
        translateY:'78vh',
        elasticity:0,
        duration:2000
    })

/* var navbar = document.querySelector(".navbar");

document.body.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
      console.log('scrolling down');
      navbar.removeAttribute("hidden");
    }
  }); */

