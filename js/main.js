window.onload = function () {
    var nav_height = document.getElementById('nav').clientHeight;
    var li = document.getElementsByClassName('nav-item col-auto');
    var menu = document.getElementsByClassName('exploreMenu');
    var heromt = document.getElementById('hero');
    heromt.style.marginTop = nav_height+20+"px";

    console.log(menu);

    for (var i = 0; i<li.length;i++){
        if (li[i].onmousemove){
            console.log('======>'+li[i]);
            menu.style.display='block';
        }

    }

}
// li[i].onmouseover = function () {
//     menu.style.display="block";
//     console.log('碰到了');
// };
// li[i].onmouseout = function () {
//     menu.style.display="none";
// }