///video-button
const preloader = document.querySelector('.preloader')
const preloaderTop = document.querySelector('.preloader-top')
const preloaderBottom = document.querySelector('.preloader-bottom')
const preloaderIndicator = document.querySelector('.preloader-indicator ')
const prloaderFill = document.querySelector('.prloader-fill')

window.addEventListener('load', function () {
    preloader.style.display = 'flex'

    preloaderIndicator.style.opacity = 1
    prloaderFill.style.width = 100 + '%'
    prloaderFill.style.height = 2 + 'px'

    var fillTime = 500
    prloaderFill.style.transition = fillTime + 'ms'
    setTimeout(function () {
        preloaderTop.style.transform = 'translateY(' + (-100) + '% )'
        preloaderBottom.style.transform = 'translateY(' + 100 + '% )'
        preloaderIndicator.style.opacity = 0
    }, fillTime)

    var preloaderTime = 2000
    preloaderTop.style.transition = preloaderTime + 'ms'
    preloaderBottom.style.transition = preloaderTime + 'ms'

    setTimeout(function () {
        preloader.style.display = 'none'
    }, fillTime + preloaderTime)
})


var videoButton = document.querySelector('.video-hover-button')
var video = document.getElementsByTagName('video')[0]
var waveOne = document.querySelector('.wave-one')
var waveTwo = document.querySelector('.wave-two')


videoButton.addEventListener('mouseenter', function () {
    video.classList.add('active')
    waveOne.classList.add('active')
    waveTwo.classList.add('active')
})
videoButton.addEventListener('mouseover', function () {
    video.classList.add('active')
    waveOne.classList.add('active')
    waveTwo.classList.add('active')
})
videoButton.addEventListener('mouseout', function () {
    video.classList.remove('active')
    waveOne.classList.remove('active')
    waveTwo.classList.remove('active')
})

var img = document.querySelector('.video-icon-wrapper img')
img.addEventListener('click', function (e) {
    console.log(e.clientX, e.clientY)
})

// window.addEventListener('mousemove', function (e) {
//     console.log('mouse X', e.clientX, 'mouse Y', e.clientY)
// })

videoButton.addEventListener('mousemove', function (e) {
    var obj = {
        x: 1485,
        y: 295
    }
    var tx = e.clientX - obj.x
    var ty = e.clientY - obj.y
    // tx = (tx > 10 ? 10 : tx) < -10 ? -10 : tx
    // ty = (ty > 10 ? 10 : ty) < -10 ? -10 : ty

    tx = tx > 15 ? 15 : tx
    ty = ty > 15 ? 15 : ty
    tx = tx < -15 ? -15 : tx
    ty = ty < -15 ? -15 : ty

    // console.log('offset left', this.offsetLeft, 'offset width', this.offsetWidth)
    // console.log('e.clientX', e.clientX, 'e.clientY', e.clientY)
    console.log(tx, ty)
    // Math.abs() > 50 ? 50 : Math.abs(obj.x - e.clientX)
    // Math.abs() > 50 ? 50 : Math.abs(obj.y - e.clientY)

    this.style.transform = 'translate(' + tx + 'px, ' + ty + 'px )'
})

/// flyout-menu
const leftNav = document.querySelector('.left-nav')
const flyoutMenuContent = document.querySelector('.flyout-menu-wrapper')
// const flyoutContent = document.getElementById('flyout-content')

const leftNavIconOpen = document.querySelector('.left-nav .flyout-menu.open-nav')
const leftNavIconClose = document.querySelector('.left-nav .flyout-menu.close-nav')

function click1 (icon1, icon2, icon3) {
    if (this.style.display == 'none') {
        // this.className = 'open'
        this.classList.add('open')
        // this.classList.remove('hide')
        this.style.display = 'flex'
        if (icon1 && icon2) {
            icon1.style.display = 'none'
            icon2.style.display = 'flex'
        }
        if (icon3) {
            icon3.classList.add('flip')
        }


    } else {
        // this.className = 'hide'
        // this.classList.add('hide')
        this.classList.remove('open')
        this.style.display = 'none'

        if (icon1 && icon2) {
            icon1.style.display = 'flex'
            icon2.style.display = 'none'
        }

        if (icon3) {
            icon3.classList.remove('flip')
        }


    }
}

leftNav.addEventListener('click', function () {
    click1.call(flyoutMenuContent, leftNavIconOpen, leftNavIconClose)

    if (leftNavIconClose.style.display !== 'none') {
        leftNav.style.border = '0px'
    } else {
        leftNav.style.borderRight = '1px solid rgba(192, 192, 211, 0.2)'
        leftNav.style.borderBottom = '1px solid rgba(192, 192, 211, 0.2)'
    }

})

///dropdown-open
const rightNavButton = document.querySelector('.right-nav .nav-button')
const navDropdown1 = document.querySelector('.right-nav .dropdown-list')
const dropdownIcon1 = document.querySelector('.right-nav .nav-button .dropdown-icon')

rightNavButton.addEventListener('click', function () {
    click1.call(navDropdown1, null, null, dropdownIcon1)

})

const benefitsButton = document.querySelector('.benefits-wrapper .nav-button')
const navDropdown2 = document.querySelector('.benefits-wrapper .dropdown-list')
const dropdownIcon2 = document.querySelector('.benefits-wrapper .nav-button .dropdown-icon')

benefitsButton.addEventListener('click', function () {
    click1.call(navDropdown2, null, null, dropdownIcon2)
})

///navbar-srcoll

const navTop = document.querySelector('.navigation-content')
const navShade = document.querySelector('.navigation-shade')
const brand = document.querySelector('.brand')
const navMenu = document.querySelector('.nav-menu')
const navButton = document.querySelector('.navigation-content .nav-button-toggle')

window.addEventListener('scroll', function (e) {
    let y = window.scrollY
    console.log(y)
    let scrollTop = window.scrollTop
    if (y > 300) {
        leftNav.classList.add('scrolldown')
        navTop.classList.add('scrolldown')
        navShade.classList.add('scrolldown')
        brand.classList.add('black')
        navMenu.classList.add('black')
        navMenu.classList.add('scrolldown')
        navButton.classList.add('black')
    } else {
        leftNav.classList.remove('scrolldown')
        navTop.classList.remove('scrolldown')
        navShade.classList.remove('scrolldown')
        brand.classList.remove('black')
        navMenu.classList.remove('black')
        navMenu.classList.remove('scrolldown')
        navButton.classList.remove('black')
    }
    // navTop.animate({
    //     scrollTop: '65px'
    // }, 1000);
})


///nav-mask
var masks = document.querySelectorAll('.nav-menu .link-cover')
var lists = document.querySelectorAll('.nav-menu  .link-text')

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('mouseenter', function () {
        masks[i].style.opacity = '1'
        masks[i].style.transform = "scale(1,1)"
    })
    lists[i].addEventListener('mouseover', function () {
        masks[i].style.opacity = '1'
        masks[i].style.transform = "scale(1,1)"
    })
    lists[i].addEventListener('mouseout', function () {
        masks[i].style.opacity = '0'
        masks[i].style.transform = "scale(0.5,0.5)"
    })
}


/// footer-mask
var footerMasks = document.querySelectorAll('.footer-destination .link-cover')
var footerLists = document.querySelectorAll('.footer-destination .link-text')

for (let i = 0; i < footerLists.length; i++) {
    footerLists[i].addEventListener('mouseenter', function () {
        footerMasks[i].style.opacity = '1'
        footerMasks[i].style.transform = "scale(1,1)"
    })
    footerLists[i].addEventListener('mouseover', function () {
        footerMasks[i].style.opacity = '1'
        footerMasks[i].style.transform = "scale(1,1)"
    })
    footerLists[i].addEventListener('mouseout', function () {
        footerMasks[i].style.opacity = '0'
        footerMasks[i].style.transform = "scale(0.5,0.5)"
    })
}

/// 

function mouseAround (e) {
    // console.log()
    // var position = img.getBoundingClientRect()
    // var obj = {
    //     x: Math.floor(position.left),
    //     y: Math.floor(position.top)
    // }
    // var obj = {
    //     x: 1487,
    //     y: 320
    // }
    var tx = e.clientX
    var ty = e.clientY
    tx = (tx > 10 ? 10 : tx) < -10 ? -10 : tx
    ty = (ty > 10 ? 10 : ty) < -10 ? -10 : ty

    console.log(tx, ty)
    // Math.abs() > 50 ? 50 : Math.abs(obj.x - e.clientX)
    // Math.abs() > 50 ? 50 : Math.abs(obj.y - e.clientY)

    this.style.transform = 'translate(' + tx + 'px, ' + ty + 'px )'
}


///swipper
const locationSlide = document.querySelector('.location-slide')


var sliderWrapper = document.querySelector('.slider-wrapper')
var locationCards = document.querySelectorAll('.location-slide')
const prevButton = document.querySelector('.slider-wrapper .slider-arrow-left')
const nextButton = document.querySelector('.slider-wrapper .slider-arrow-right')

var locationMask = document.querySelector('.location-mask')
const containerWidth = locationMask.offsetWidth
console.log('containerWidth is ', containerWidth)

nextButton.addEventListener('click', function () {
    var lis = this.parentNode.children[0].children
    var index
    for (var i = 0; i < lis.length; i++) {
        if ([...lis[i].classList].includes('active')) {
            index = i
        }
    }
    var j = index + 1
    j = j == lis.length ? 0 : j
    lis[index].classList.remove('active')
    lis[j].classList.add('active')


    if (index + 1 <= lis.length) {
        for (var k = 0; k < lis.length; k++) {
            lis[k].style.transform = 'translateX(-' + containerWidth * index + 'px)'
        }
    }
    if (index == lis.length) {
        for (var k = 0; k < lis.length; k++) {
            lis[k].style.transform = 'translateX(' + 0 + 'px)'
        }
    }

    var str = lis[j].style.transform
    lis[j].style.transform = `${str} scale(1.2, 1.2)`
})


prevButton.addEventListener('click', function () {
    var lis = this.parentNode.children[0].children
    var index
    for (var i = 0; i < lis.length; i++) {
        if ([...lis[i].classList].includes('active')) {
            index = i
        }
    }
    var j = index - 1
    j = j == -1 ? lis.length - 1 : j
    lis[index].classList.remove('active')
    lis[j].classList.add('active')


    if (index - 1 > -1) {
        for (var k = 0; k < lis.length; k++) {
            lis[k].style.transform = 'translateX(' + containerWidth * (1 - index) + 'px)'
        }
    }
    if (index - 1 == -1) {
        for (var k = 0; k < lis.length; k++) {
            lis[k].style.transform = 'translateX(' + containerWidth * (1 - lis.length) + 'px)'
        }
    }

    var str = lis[j].style.transform
    lis[j].style.transform = `${str} scale(1.2, 1.2)`
})

///testimonial-swipper

var prev_test = document.querySelector('.testimonial-wrapper .slider-arrow-left')
var next_test = document.querySelector('.testimonial-wrapper .slider-arrow-right')
var testimonial_lists = document.querySelectorAll('.testimonial-slide-wrapper')
var trackerFill = document.querySelector('.tracker-fill')
var tracker_item = document.querySelector('.testimonial-tracker .tracker-item')
const trackerHeight = tracker_item.offsetHeight

next_test.addEventListener('click', function () {
    var arr = [...testimonial_lists],
        index
    for (var i = 0; i < arr.length; i++) {
        if ([...testimonial_lists[i].classList].includes('active')) {
            index = i
        }
    }
    var j = index + 1
    j = j == arr.length ? 0 : j
    testimonial_lists[index].classList.remove('active')
    testimonial_lists[j].classList.add('active')

    trackerFill.style.transform = `translateY(${trackerHeight * j}px`
})

prev_test.addEventListener('click', function () {
    var arr = [...testimonial_lists],
        index
    for (var i = 0; i < arr.length; i++) {
        if ([...testimonial_lists[i].classList].includes('active')) {
            index = i
        }
    }
    var j = index - 1
    j = j == -1 ? arr.length - 1 : j
    testimonial_lists[index].classList.remove('active')
    testimonial_lists[j].classList.add('active')

    trackerFill.style.transform = `translateY(${trackerHeight * j}px`
})

///vacation-tabmenu

const vacationsTabMenu = document.getElementsByClassName('vacations-tab-menu')[0]
const vacationsTabsContent = document.getElementsByClassName('vacations-tabs-content')[0]
const locationIndicatorFill = document.querySelector('.location-indicator-fill')
const membershipDot = document.querySelectorAll('.membership-dot')
const membershipOutlineCircle = document.querySelectorAll('.membership-outline-circle')


console.log(membershipDot[0], membershipDot[1], membershipDot[2], membershipDot[3])
console.log(membershipDot)

for (let i = 0; i < vacationsTabMenu.children.length; i++) {
    vacationsTabMenu.children[i].setAttribute('index', i)
    membershipDot[i].setAttribute('index', i)

    vacationsTabMenu.children[i].addEventListener('click', function () {
        var index = vacationsTabMenu.children[i].getAttribute('index')

        // tab index
        for (let k = 0; k < vacationsTabMenu.children.length; k++) {
            vacationsTabMenu.children[k].classList.remove('current')
        }
        vacationsTabMenu.children[index].classList.add('current')
        // "rgb(229, 230, 243);"


        // dot
        for (d = 0; d < membershipDot.length; d++) {
            if (d <= index) {
                membershipDot[d].classList.add('active')
            } else {
                membershipDot[d].classList.remove('active')
            }
        }

        membershipDot[index].style.backgroundColor = "rgb(8, 28, 58);"

        // content index
        for (let j = 0; j < vacationsTabsContent.children.length; j++) {
            vacationsTabsContent.children[j].classList.remove('active')

        }
        vacationsTabsContent.children[index].classList.add('active')

        // indicator
        locationIndicatorFill.style.width = (Number(index) + 1) * 25 + '%'
    })
}


/// steps-card
var stepsCardOutline = document.querySelector('.steps-cards')
var stepsCards = document.querySelectorAll('.steps-card')
var innerDots = document.querySelectorAll('.steps-dot')
var outerCircles = document.querySelectorAll('.steps-circle-outline')


window.addEventListener('scroll', function (e) {
    const h = 4480
    // let y = stepsCardOutline.getBoundingClientRect().top
    let scrollY = window.scrollY
    // console.log('y is', y)
    console.log(' scrollY is ', scrollY)

    if (scrollY > h + 200) {
        stepsCards[0].classList.add("active")
        innerDots[0].classList.add("active")
        outerCircles[0].classList.add("active")
    }
    if (scrollY > h + 540) {
        stepsCards[1].classList.add("active")
        innerDots[1].classList.add("active")
        outerCircles[1].classList.add("active")
    }
    if (scrollY > h + 900) {
        stepsCards[2].classList.add("active")
        innerDots[2].classList.add("active")
        outerCircles[2].classList.add("active")
    }
    if (scrollY > h + 1200) {
        stepsCards[3].classList.add("active")
        innerDots[3].classList.add("active")
        outerCircles[3].classList.add("active")
    }
})

///image-overlay

const aboutImages = document.querySelector('.about-images')
const aboutImageItem = document.querySelectorAll('.about-image-item')
// console.log(aboutImageItem)

var mouseMove = false
aboutImages.addEventListener('mousemove', function (e) {
    mouseMove = true
    if (mouseMove) {
        var x = e.clientX
        // console.log(x)

        var l = x - this.offsetLeft
        // console.log('mouse dis from images box left is' + l)
        var maxL = aboutImages.offsetWidth
        // console.log('max right is ' + maxL)

        if (l >= maxL) {
            l = maxL
        }
        if (l <= 0) {
            l = 0
        }

        for (i = 0; i < aboutImageItem.length; i++) {
            // console.log('lalalal')
            // aboutImageItem[i].style.left = l + 'px';
            var move = (l / 25)
            var maxMove = aboutImageItem.length * 25
            if (move >= maxMove) {
                move = maxMove
            }
            if (move < 0) {
                move = 0
            }
            aboutImageItem[i].style.transform = `translateX(${-move}vw)`
        }
    }

    // var mid = (aboutImages.offsetLeft + this.offsetWidth / 2)
    // var iX = x - mid
    //     // console.log('m is: ' + mid)
    // console.log('mouse from images middle is' + iX)
})


aboutImages.addEventListener('mouseout', function (e) {
    mouseMove = false
})




///left-indicator


const indicatorFill = document.querySelector('.indicator-fill')
const indicator = document.querySelector('.indicator')
const footer = document.querySelector('.footer')
const featuredJournalWrapper = document.querySelector('.featured-journal-wrapper')

window.addEventListener('scroll', function () {
    var y = window.scrollY

    console.log('y is' + y)

    var h_header = navMenu.offsetHeight
    var h_footer = footer.scrollHeight
    var h = document.body.scrollHeight

    var f_heightHalf = featuredJournalWrapper.offsetHeight / 2
    // var t = (h - h_footer) - y
    console.log('mouse from top is:' + h, h_header, h_footer, f_heightHalf)

    var maxH = h - h_footer - h_header - f_heightHalf
    if (y >= maxH) {
        y = maxH
    }
    if (y <= 0) {
        y = 0
    }

    var percent = Math.ceil(y * 0.8 / 100)
    console.log("percent :" + percent)

    indicatorFill.style.transform = 'translateY( ' + (percent) + '% )'

    // transform: translate3d(0 px, 0 % , 0 px)
    // transform: translate3d(0 px, 80 % , 0 px)

    // var top = Math.ceil(window.scrollY * 1.0 / 10)
    // indicator.style.top = top + 'px'
})