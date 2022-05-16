    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const carousel = document.getElementById("carouselList");
    let changeTimes = 0;
    let newItemWidth = document.getElementsByClassName("newItem")[0];
    let newItem = document.getElementsByClassName("newItem");

    let w = newItemWidth.offsetWidth;
    let mediaWidth = window.offsetWidth;
    let changeWidth = 0;
    let length = document.getElementById("carouselList").children.length;


//最多陈列多少个
    let maxContent = carousel.offsetWidth/w;
//最多连点次数
//     console.log("newItems:"+newItem.length);
    let clickTimes = Math.ceil(newItem.length/maxContent);

    // console.log("newItem.length/maxContent:"+clickTimes);
//总新闻的可视范围宽度
    let maxWidth = carousel.offsetWidth;
    // console.log("可视范围内可以陈列"+maxContent+"个");

    prev.onclick=function (){
        changeWidth = changeWidth+w;
        changeTimes--;
        console.log("changeWidth"+changeWidth);
        if (changeTimes < 1){
            changeWidth=0;
            changeTimes=0;
            carousel.style.marginLeft = changeWidth+"px";
        }else {
            carousel.style.marginLeft = changeWidth+"px";
        }
        // console.log(changeWidth);
    };

    next.onclick=function (){
        changeWidth = changeWidth-w;
        changeTimes++;
        if (changeTimes > clickTimes){
            changeWidth = 0;
            changeTimes=0;
            carousel.style.marginLeft = changeWidth+"px";
        }else {
            carousel.style.marginLeft = changeWidth+"px";
        }
        // console.log(changeWidth);
    }




