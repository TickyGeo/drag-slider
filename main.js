const slider = document.querySelector('.slider');
const big = document.querySelector('.slider .big');
const prevBtn = document.querySelector('.slider .btn.prev');
const nextBtn = document.querySelector('.slider .btn.next');
const radio = document.querySelectorAll('.slider .radio input');
const items = document.querySelectorAll('.slider .big .item');

let cur = 0;
let bool = false;
let mouseX;

slider.onmousedown = e => {
    if (e.button == 0) {
        bool = true;
        mouseX = e.x;
    };
};

slider.onmouseup = e => {
    if (e.button == 0) {
        bool = false;
    };
};


slider.onmousemove = e => {
    if (bool) {
        if (e.x < mouseX) {
            cur -= 100;
        } else if (e.x > mouseX) {
            cur += 100;
        };
        cur > 0 ? cur = (items.length - 1) * -100 : cur == items.length * -100 ? cur = 0 : '';
        bool = false;
        big.style.left = cur + '%';
        radio[cur / -100].checked = true;
    };
};

nextBtn.onclick = () => {
    cur -= 100;
    cur == items.length * -100 ? cur = 0 : '';
    big.style.left = `${cur}%`; 
    radio[cur / -100].checked = true;
};

prevBtn.onclick = () => {
    cur += 100;
    cur > 0 ? cur = (items.length - 1) * -100 : '';
    big.style.left = `${cur}%`;
    radio[cur / -100].checked = true;
};

for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = () => {
        cur = i * -100;
        big.style.left = `${cur}%`;
    };
};
