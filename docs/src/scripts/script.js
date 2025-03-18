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

// Use bricks.js to create a masonry layout
const instance = bricks({
    container: '#projects-masonry',
    packed: 'data-packed',
    sizes: [
        { columns: 1, gutter: 12 },
        { mq: '824px', columns: 2, gutter: 12 },
        { mq: '1200px', columns: 3, gutter: 12 }
    ]
});
setInterval(() => {
    a = instance.pack();
}, 100);
instance
    .update()
    .resize(true);