// const header = document.querySelector('.header');
// const headerHeight = header.offsetHeight;
// const windowHeight = document.documentElement.clientHeight;
//
// function onScroll(e) {
//     let pos = window.pageYOffset;
//     if (pos > headerHeight + 100) {
//         header.style.position = 'fixed';
//         header.style.top = '-75px';
//         header.style.backgroundColor = '#000';
//     }
//     if (pos > windowHeight) {
//         header.style.top = '0';
//         header.style.transition = 'top .3s ease-out';
//     }
//     if (pos < headerHeight + 100) {
//       header.style.position = 'absolute';
//       header.style.top = '0';
//       header.style.backgroundColor = 'transparent';
//       header.style.transition = 'none';
//     }
// }
//
// window.addEventListener('scroll', onScroll);
// window.addEventListener('load', onScroll);

const header = $('.header');
const windowHeight = $(window).height();
const headerHeight = header.outerHeight();

function onScroll(e) {
    let pos = $(window).scrollTop();
    if (pos > headerHeight + 100) {
        header.css({
            'position': 'fixed',
            'top': '-75px',
            'background-color': '#000'
        })
      }
    if (pos > windowHeight) {
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        })
      }
    if (pos < headerHeight + 100) {
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        })
      }
}
$(window).on('scroll', onScroll);

const scrollBtn = $('[data-scroll]');

function onClick(e) {
    e.preventDefault();
    const target = $(this).attr('data-scroll');
    const dist = $(target).offset().top;
    $('html, body').animate({scrollTop: dist}, 1000, 'swing');
};

scrollBtn.on('click', onClick);

const tabBtn = $('[data-toggle = "tab"]');

function tabClick(e) {
    e.preventDefault();

    const currentTab = $(this).closest('ul').addClass('clicked');
    $('.clicked li').removeClass('active');
    $(this).closest('li').addClass('active');
    currentTab.removeClass('clicked');

    const target = $(this).attr('href');
    const activeTab = $(`.tab-content ${target}`);
    const currentTabContent = activeTab.closest('.tab-content').addClass('clicked');
    $('.clicked .active').removeClass('active in').fadeOut(0);
    activeTab.fadeIn(150).addClass('active in');

    currentTabContent.removeClass('clicked');
}

tabBtn.on('click', tabClick);
