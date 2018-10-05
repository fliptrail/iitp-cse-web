var basicTimeline = anime.timeline({
    loop:true
});

basicTimeline
  .add({
    targets: '.col',
    opacity: 1,
    easing: 'linear',
    duration:2000
  })
  .add({
    targets: '.col',
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


