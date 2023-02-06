/** loading */

const loading = document.querySelector( '.loading' );

window.addEventListener( 'load', () => {
    loading.classList.add( 'hide' );
}, false );

/** loading End */



/**index.html オープニング動作 */


//cssのみで作成


/**index.html オープニング動作　End */






/** スクロールするとフェードイン */

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
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