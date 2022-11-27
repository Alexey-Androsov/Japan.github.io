(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }else{
            header.classList.remove('header_active');  
        }
    };
}());


//Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
    if(window.innerWidth <= 767 ) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header__nav_active');
            });
        }
    }
}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());





















//Видео по подготовке к собеседование по js!!!
//null,undefined,boolean,number,string,object,symbol

// == vs ===
//console.log(2 =='2')
//console.log(2 ==='2')

//console.log(false == '')
//console.log(false == []) 
//console.log(false == {}) 

/*let month = 1;
        if (month >= 3 && month <= 5)
        {
            console.log('Весна');
        } 
        else if (month >= 6 && month <= 8)
        {
            console.log('Лето');
        }
        else if (month >= 9 && month <= 11)
        {
            console.log('Осень');
        }
        else if (month == 12 || month <= 1 && month <= 2)
        {
            console.log('Зима');
        }
        else
        {
            console.log('Вы ввели некорректное число! Введите число от 1 до 12!');
        }*/

/*let str = 'abcde';
if (str[0] == 'a')
{
    console.log('Yes');
}
else
{
    console.log('No');
}*/

/*let num = -15;
let result;
if(num >= 0)
{
    console.log(result=1)
}else
{
    console.log(result = -1)
}*/

/*let ok = confirm('Вам есть 18 лет?')
if (ok)
{
    alert('Текст для взрослых!')
}
else{
    alert('Доступ запрещен!')
    }*/

    /*let arr = [1,2,3,4,5,6,7];
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--)
    {
        result.push(arr[i]);
    }
    console.log(result);*/

//58.1
/*let obj = {
    employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};


for (let key in obj)
{
   obj[key] = obj[key] * 1.1;
}
console.log(obj);*/


