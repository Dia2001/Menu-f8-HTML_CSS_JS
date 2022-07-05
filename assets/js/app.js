const datasouce = [
    {
        'id': 0,
        'name': ' HTML, CSS từ Zero đến Hero',
        'img': 'html-css.png'
    },
    {
        'id': 1,
        'name': 'Responsive với Grid System',
        'img': 'course.png'
    },
    {
        'id': 2,
        'name': ' Lập Trình JavaScipt Cơ bản',
        'img': 'js.png'
    },
]
//
const btnmenuCourse = document.querySelector(".header-right .header-coures h4");
const menuCourse = document.querySelector(".header-coures .my-sources")
const menunoti = document.querySelector(".header-noti .list-noti")
const menuprofile = document.querySelector(".account-menu .list-menu-account")
btnmenuCourse.addEventListener("click", function () {
    menuCourse.classList.toggle('active');
    menunoti.classList.remove('active')
    menuprofile.classList.remove('active')
})
const btnnoti = document.querySelector(".fa-bell")
console.log(btnnoti)
btnnoti.addEventListener("click", function () {
    menunoti.classList.toggle('active')
    menuCourse.classList.remove('active')
    menuprofile.classList.remove('active')
})
const btnprofile = document.querySelector(".account-menu>img")
console.log(btnprofile)
btnprofile.addEventListener("click", function () {
    menuprofile.classList.toggle('active')
    menuCourse.classList.remove('active')
    menunoti.classList.remove('active')
})
// search
const inputElement = document.querySelector(".search-input input");
const btndeleteinput = document.querySelector(".search-input i:last-child")
console.log(inputElement);
inputElement.oninput = function (e) {
    console.log(e.target.value);
    const searchcontent = e.target.value;
    if (searchcontent.length > 0) {
        btndeleteinput.classList.add('active')
        if (searchcontent.length == 1) {
            noresrult(searchcontent)
        }
        if (searchcontent.length > 1) {
            haveresult(searchcontent)
        }
    } else {
        btndeleteinput.classList.remove('active')
        document.querySelector(".search-resrult").style.display = "none";
    }
};
function noresrult(keyword) {
    let htmlData = createSearchList(keyword);
    if (keyword) {
        document.querySelector(".search-resrult").style.display = "block"
        document.querySelector(".search-resrult").innerHTML = htmlData;
    } else {
        document.querySelector(".search-resrult").style.display = "none"
    }
}
function createSearchList(data) {
    let rows;
    rows = `<div class="search-no-content">
    <i class="fa-solid fa-magnifying-glass"></i>
    <span id="search-no">Không có kết quả cho '${data}'</span>
    </div>`
    return rows;
}
function haveresult(value) {
    let resutl = []
    datasouce.forEach(item => {
        if (item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
            resutl.push(item)
        }
    })
    if (resutl.length > 0) {
        let listResult = resutl.reduce((c, item) => {
          return c + `
              <div class="list-course-result">
                <img src="assets/img/${item.img}" alt="">
                <a href="#">${item.name}</a>
              </div>`
        }, '')
        let searchTop = `<div class="search-no-content">
             <i class="fa-solid fa-magnifying-glass"></i>
             <span id="search-no">Kết quả tìm kiếm cho '${value}'</span>
            </div>
            <div class="list-result">
            <div class="result-sourses">
                <h3>Khóa học</h3>
                <a href="#">Xem thêm</a>
            </div>
          ${listResult}
        </div>`
    document.querySelector(".search-resrult").style.display = "block"
    document.querySelector(".search-resrult").innerHTML = searchTop;
    }
}