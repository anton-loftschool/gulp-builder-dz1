(function() {

    let works = [
        {
            title: "Сайт школы онлайн образования",
            tech: "html, css, javascript",
            link: "/#project-2",
            img: "assets/img/section-my-works/project-2.png"
        },
        {
            title: "Сайт йога",
            tech: "html, javascript",
            link: "/#project-1",
            img: "assets/img/section-my-works/project-1.png"
        },
        {
            title: "Сайт дивана",
            tech: "html, css, javascript",
            link: "/#project-3",
            img: "assets/img/section-my-works/project-3.png"
        },
        {
            title: "Sigmon Visser",
            tech: "html, css, javascript",
            link: "/#project-4",
            img: "assets/img/section-my-works/project-4.jpg"
        },
        {
            title: "Virtual Classroom",
            tech: "html, css, javascript",
            link: "/#project-5",
            img: "assets/img/section-my-works/project-5.jpg"
        },
        {
            title: "Anthony Viktor",
            tech: "html, css, javascript",
            link: "/#project-6",
            img: "assets/img/section-my-works/project-6.png"
        },
        {
            title: "Style Groom",
            tech: "html, css, javascript",
            link: "/#project-7",
            img: "assets/img/section-my-works/project-7.jpg"
        }
    ];

    let currentWork = 0;
    const countWork = works.length;

    let preview = $('.carousel-preview').find('img');
    let previewDown = $('.carousel-arrows__down');
    let previewUp = $('.carousel-arrows__up');

    function loadImg(context, ndx) {
        //console.log(ndx);
        context.attr('src', works[ndx].img);
    }

    function loadImgCSS(context, ndx) {
        //console.log(ndx);
        context.css('backgroundImage', 'url(' + works[ndx].img + ')');
    }

    let title = $('.slider .subtitle');
    let info = $('.slider .my-works-desc__info');
    let link = $('.slider .my-works-desc__link');

    function setData(ndx) {
        title.text(works[ndx].title);
        info.text(works[ndx].tech);
        link.attr('href', works[ndx].link);

    }

    function calcNdx(i) {
        return Math.abs(i % countWork);
    }

    function up() {
        currentWork--;
        loadImgCSS(previewDown, calcNdx(currentWork-1));
        setData(calcNdx(currentWork));
        loadImg(preview, calcNdx(currentWork));
        loadImgCSS(previewUp, calcNdx(currentWork+1));
    }

    function down() {
        currentWork++;
        loadImgCSS(previewDown, calcNdx(currentWork-1));
        setData(calcNdx(currentWork));
        loadImg(preview, calcNdx(currentWork));
        loadImgCSS(previewUp, calcNdx(currentWork+1));
    }

    $('.carousel-arrows__item-fon-left').on('click', up);
    $('.carousel-arrows__item-fon-right').on('click', down);

})();
