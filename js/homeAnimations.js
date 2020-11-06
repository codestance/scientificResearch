const pinkTopA = document.querySelectorAll('.particles_pink__top')[0].attributes.d.value;
const pinkTopB = 'M78.484 46.1765C78.3013 54.0325 81.3853 61.2005 86.488 66.3952L53.6533 103.833C41.9013 94.0365 24.496 93.5619 12.1466 103.549C-1.90537 114.914 -4.08404 135.519 7.28129 149.571C18.6466 163.625 39.252 165.803 53.304 154.438C67.3573 143.073 69.536 122.467 58.1706 108.415C57.996 108.199 57.812 107.994 57.6333 107.783L67.796 95.9779L67.7706 95.9552L90.62 69.8619C94.9373 72.8272 100.133 74.6192 105.761 74.7499C117.752 75.0272 128.151 67.7045 132.353 57.1859L147.987 65.41L147.995 65.39L170.845 80.24C170.072 83.8053 170.28 87.6287 171.679 91.29C175.515 101.326 186.759 106.345 196.793 102.51C206.829 98.6753 211.856 87.436 208.021 77.4C205.803 71.596 201.101 67.488 195.595 65.78L196.489 42.9712L196.467 42.9699L198.356 38.88C202 38.7373 205.648 37.5807 208.843 35.31C217.6 29.0873 219.655 16.9487 213.432 8.18999C207.209 -0.567342 195.067 -2.62267 186.308 3.59999C177.551 9.82266 175.496 21.9627 181.719 30.72C184.888 35.18 189.595 37.8953 194.607 38.67L191.728 65C188.825 64.7147 185.817 65.058 182.907 66.17C177.795 68.1233 173.993 72.0013 171.989 76.66L133.551 53.4219C134.013 51.5085 134.287 49.5192 134.335 47.4712C134.692 32.0485 122.479 19.2565 107.056 18.8992C91.6346 18.5419 78.8413 30.7539 78.484 46.1765Z';
const pinkBottomA = document.querySelectorAll('.particles_pink__bottom')[0].attributes.d.value
const pinkBottomB = 'M131.435 119.225C121.392 115.596 110.823 116.475 101.924 120.807L67.8667 82.32C85.568 71.4093 93.6974 49.1867 86.1627 28.96C77.588 5.94401 51.9787 -5.76466 28.9614 2.81001C5.94402 11.3847 -5.76396 36.9927 2.80938 60.01C11.384 83.0274 36.9947 94.7347 60.012 86.16C60.3653 86.028 60.7094 85.88 61.0574 85.74L69.1304 93.81L76.6304 102.31L95.6734 124.632C89.9867 128.915 85.4334 134.836 82.8347 142.031C77.296 157.363 82.24 173.923 93.9787 183.883L80.4921 201.772L80.5174 201.792L60.528 227.844C56.2693 225.308 51.2573 223.924 45.9347 224.145C31.3467 224.753 20.0134 237.071 20.62 251.659C21.2254 266.248 33.5441 277.581 48.1307 276.976C56.5694 276.624 63.8987 272.343 68.4773 265.984L84.5893 272.668L84.6014 272.64L114.825 285.477C113.435 290.237 113.349 295.435 114.895 300.533C119.129 314.507 133.891 322.401 147.863 318.165C161.837 313.929 169.731 299.169 165.496 285.197C161.26 271.224 146.5 263.329 132.527 267.565C125.409 269.721 119.884 274.616 116.72 280.74L71.1481 261.337C72.7694 257.719 73.624 253.693 73.448 249.463C73.1374 242.032 69.7814 235.457 64.6427 230.864L98.3121 187.052C100.577 188.476 103.021 189.687 105.64 190.632C125.359 197.755 147.119 187.544 154.24 167.825C161.364 148.107 151.153 126.348 131.435 119.225Z';
anime.timeline({
    duration: 3000,
    easing: 'linear',
    loop: true
}).add({
    targets: '.particles_blue',
    scale:[
        {value: .95},
        {value: .85},
        {value: .8},
        {value: 1}
    ],
}).add({
    targets: '.particles_pink__top',
    d: [
        {value: pinkTopB},
        {value: pinkTopA}
    ]
},1000).add({
    targets: '.particles_pink__bottom',
    d: [
        {value: pinkBottomB},
        {value: pinkBottomA}
    ]
},2000)
function countOrigins(el){
    const origin = el.getBBox();
    const originX = origin.x + origin.width/2;
    const originY = origin.y + origin.height/2;
    return `transform-origin: ${originX}px ${originY}px`
}
function loaded(){
    const bg = document.querySelector('#bg');
    const virus = bg.contentDocument.querySelector('#virus');
    virus.setAttribute('style', countOrigins(virus));
    const bubbles = [...bg.contentDocument.querySelector('#bubbles').children];
    const bubbles2 = [...bg.contentDocument.querySelector('#bubbles2').children];
    const bubbles3 = [...bg.contentDocument.querySelector('#bubbles3').children];
    bubbles3.map(path=>path.setAttribute('style',countOrigins(path)));
    anime({
        targets: virus,
        rotate: '1turn',
        duration: 10000,
        loop: true
    })
    anime({
        targets: bubbles,
        delay: anime.stagger(500),
        translateY: function(){return anime.random(0, -100);},
        translateX: function(){return anime.random(0, 20);},
        opacity:0,
        easing: "easeInOutSine"
    })
    anime({
        targets: bubbles2,
        delay: anime.stagger(150),
        translateY: function(){return anime.random(-150, -200);},
        translateX: function(){return anime.random(-5, 5);},
        duration: 1500,
        opacity: 0,
        easing: "easeInOutSine",
        loop: true
    })
    anime({
        targets: bubbles3,
        delay: anime.stagger(400),
        translateY: function(){return anime.random(-200, -250);},
        duration: 4000,
        scale: 0,
        easing: "easeInOutSine",
        loop: true
    })
}