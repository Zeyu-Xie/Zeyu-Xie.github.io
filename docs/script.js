const _main_menu = document.getElementById('main-menu');

const sm = 576;
const md = 768;
const lg = 992;
const xl = 1200;
const xxl = 1400;

function adjust_main_menu_placement() {
    if (window.innerWidth < md) {
        _main_menu.placement = "top";
    }
    else {
        _main_menu.placement = "start";
    }
}

adjust_main_menu_placement();

window.addEventListener('resize', () => {
    adjust_main_menu_placement();
});