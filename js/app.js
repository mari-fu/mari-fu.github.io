/** loading */

const loading = document.querySelector( '.loading' );

window.addEventListener( 'load', () => {
    loading.classList.add( 'hide' );
}, false );

/** loading End */



/**index.html オープニング動作 */
//動作cssのみで作成


/**index.html オープニング動作　End */

/**MENUボタン　スクロールしたらフェードインフェードアウト */
let menuButton = document.getElementById('menu_button');
window.addEventListener("scroll",()=>{
    
    const currentY = window.scrollY;//スクロール高さ取得
    if(currentY > 300){
        setTimeout(function(){
            menuButton.style.opacity = 1;
        },1);
        menuButton.classList.remove('menu_button-hide');
    } else {
        setTimeout(function(){
            menuButton.style.opacity = 0;
        },1);
        menuButton.classList.add('menu_button-hide');
    }
})

/**MENUボタン　スクロールしたらフェードインフェードアウト */


/** スクロールするとフェードイン */

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.scrollY || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 150) {
            fadeInTarget[i].classList.add('scroll-in');
        }
    }
});
/** スクロールするとフェードイン End */



/**　クリックすると表示非表示　スマホ・タブレットのみ */
document.querySelector('#menu_button').addEventListener('click', function(){
    document.querySelector('#menu_list').classList.toggle('is-active');
});

document.querySelector('#page-transition1').addEventListener('click', function(){
    document.querySelector('#menu_list').classList.remove('is-active');
});
document.querySelector('#page-transition2').addEventListener('click', function(){
    document.querySelector('#menu_list').classList.remove('is-active');
});

/**　クリックすると表示非表示　スマホ・タブレットのみ　End */