let sec = document.querySelector("#sec")
let min = document.querySelector("#min")
let hr = document.querySelector("#hr")
let s = 0
let m = 0
let h = 0

// setInterval(() => {
//     s++
//     if (m < 60) {
//         if (s<60) {
//             if(s < 10){
//                 sec.innerHTML="<b>0"+s+"</b>"
//             }else{
//                 sec.innerHTML = "<b>"+s+"</b>"
//             }
//         } else {
//             s=0
//             m++
//             sec.innerHTML="<b>00</b>"
//             if(m < 10){
//                 min.innerHTML="<b>0"+m+"</b> : "
//             }else{
//                 min.innerHTML = "<b>"+m+"</b> : "
//             }
//         }
//     } else {
        
//         m=0
//         h++
//         min.innerHTML="<b>00</b> : "
//         if(h < 10){
//             hr.innerHTML="<b>0"+h+"</b> : "
//         }else{
//             hr.innerHTML = "<b>"+h+"</b> : "
//         }
//     }
// }, 1000);

//time and date with date object
let day = document.querySelector("#day")
let mon = document.querySelector("#mon")
let year = document.querySelector("#year")

setInterval(() => {
    const dt = new Date();
    // console.log(dt.toLocaleTimeString());
    const timeArr = dt.toLocaleTimeString().split(":")
    // const timeArr = ["6","01","01 PM"]
    const x = timeArr[2].split(" ")
    // console.log(x);
    document.querySelector("#xyz").innerHTML=x[1]
    sec.innerHTML = "<b>"+x[0]+"</b>"
    min.innerHTML = "<b>"+timeArr[1]+"</b> : "
    if (timeArr[0] < 10) {
        hr.innerHTML = "<b>0"+timeArr[0]+"</b> : "
    } else {
        hr.innerHTML = "<b>"+timeArr[0]+"</b> : "
    }
    // console.log(dt.toLocaleDateString());
    const dateArr = dt.toLocaleDateString().split("/")
    if (dateArr[1] < 10) {
        day.innerHTML="<b>0"+dateArr[1]+"</b> DAY"
    } else {
        day.innerHTML="<b>"+dateArr[1]+"</b> DAY"
    }
    if (dateArr[0] < 10) {
        mon.innerHTML="<b>0"+dateArr[0]+"</b> MON"
    } else {
        mon.innerHTML="<b>"+dateArr[0]+"</b> MON"
    }
    year.innerHTML = "<b>"+dateArr[2]+"</b> YEAR"

    if ((timeArr[0] >= 6 && x[1] === "PM") ||(timeArr[0] <6 && x[1] ==="AM") ||(timeArr[0]==12 && x[1] == 'AM') ) {
        document.querySelector("#sun").style.display = "none"
        document.querySelector(".main").style.backgroundImage ="url(/img/nightbg.png)"
        
        document.querySelector("#moon").style.display ="inline-block"
    }else if ((timeArr[0] >= 6 && x[1] === "AM") || (timeArr[0] <6 && x[1] ==="PM")||(timeArr[0]==12 && x[1]=='PM')) {
        document.querySelector(".main").style.backgroundImage ="url(/img/bg-1.png)"
        document.querySelector("#moon").style.display = "none"
        document.querySelector("#sun").style.display = "inline-block"
    }

}, 1000);

//stop Watch funtion

let sw = document.querySelector("#sw")
// console.log(sw);

sw.addEventListener('click', (e)=>{
    document.querySelector(".clock").style.display="none"
    document.querySelector(".timer").style.display="none"
    document.querySelector(".alerm").style.display="none"
    document.querySelector(".stopWatch").style.display="inline-block"
    document.querySelector(".btns").style.display = "none"    
    document.querySelector(".sbtn").style.display = "flex"    
    
})
let startSW = document.querySelector("#start")
startSW.addEventListener('click',(e)=>{
    stopWatchFunc()
})

let id
let z = 0
let y = 0
let x = 0
function stopWatchFunc() {
    
    const ms = document.querySelector(".stopWatch > .time > #ms")
    const sws = document.querySelector(".stopWatch > .time > #s")
    const swm = document.querySelector(".stopWatch > .time > #m")
    // console.log(ms);
    id  =  setInterval(() => {
        z++

        if (y<60) {
            if (z<100) {
                
                if (z < 10) {
                    ms.innerHTML = " . <b>0"+z+"</b>"
                } else {
                    ms.innerHTML = " . <b>"+z+"</b>"
                }
            } else {
                ms.innerHTML = " . <b>00</b>"
                z = 0
                y++
                if (y<10) {
                    sws.innerHTML = "<b>0"+y+"</b>"
                } else {
                    sws.innerHTML = "<b>"+y+"</b>"
                }
            }
        } else {
            sws.innerHTML = "<b>00</b>"
            y=0
            x++
            if (x<10) {
                swm.innerHTML="<b>0"+x+"</b> : "
            } else {
                swm.innerHTML="<b>"+x+"</b> : "
                
            }
        }
    }, 10);
}

let pauseSW = document.querySelector("#stop")
pauseSW.addEventListener('click', (e)=>{
    clearInterval(id)
})

let reset = document.querySelector("#reset")

reset.addEventListener('click', (e)=>{
    z = 0
    y = 0
    x = 0
    const ms = document.querySelector(".stopWatch > .time > #ms")
    const sws = document.querySelector(".stopWatch > .time > #s")
    const swm = document.querySelector(".stopWatch > .time > #m")
    clearInterval(id)
    ms.innerHTML= ".<b>00</b>"
    sws.innerHTML= "<b>00</b>"
    swm.innerHTML= "<b>00</b> : "

})


//Timer

const timer = document.querySelector("#tmr")
// console.log(timer);

timer.addEventListener('click', (e)=>{
    document.querySelector(".clock").style.display="none"
    document.querySelector(".stopWatch").style.display = "none"
    document.querySelector(".alerm").style.display="none"
    document.querySelector(".timer").style.display="inline-block"
    document.querySelector(".btns").style.display = "none"    
    document.querySelector(".tbtn").style.display = "flex" 
})

const thr = document.querySelector("#thr")
const tmin = document.querySelector("#tmin")
let tsec = document.querySelector("#tsec")

    
    
const set = document.querySelector("#set")
set.addEventListener('click', (e)=>{
    e.preventDefault()
    let tid = setInterval(() => {    
    let a = +tsec.value
    let b = +tmin.value
    let c = +thr.value
    // console.log(a);
    // console.log(b);
    if (a<10) {
        tsec.value = "0"+a
    } else {
        tsec.value = a
    }
    if (b<10) {
        tmin.value="0"+b
    } else {
        tmin.value=b 
    }
    if (c<10) {
        thr.value="0"+c 
    } else {
        thr.value=c
    }
           a-- 
            if (a>=0) {
                if (a<10) {
                    tsec.value = "0"+a
                } else {
                    tsec.value = a
                }
            } else {
                if (b ===0) {
                    //interval close
                    if (c === 0) {
                        clearInterval(tid)
                        document.querySelector("#tmusic").play()
                        // console.log("end");
                    } else {
                        c--
                        tsec.value=59
                        tmin.value=59
                        if (c<10) {
                            thr.value="0"+c 
                        } else {
                            thr.value=c
                        }
                    }
                }
                else{
                    b--
                    tsec.value=59
                    if (b<10) {
                        tmin.value="0"+b
                    } else {
                        tmin.value=b 
                    }
                }
                
            }
            
        
    }, 1000);
    
})

// Alerm

let alerm = document.querySelector("#alrm")

let ahr = document.querySelector("#ahr")
let amin = document.querySelector("#amin")
let ddbtn = document.querySelector("#f")

let aday = document.querySelector("#aday")
let amon = document.querySelector("#amon")
let ayr = document.querySelector("#ayr")
// console.log(alerm);

let dt = new Date()

alerm.addEventListener('click', (e)=>{
    document.querySelector(".alerm").style.display="inline-block"
    document.querySelector(".clock").style.display="none"
    document.querySelector(".stopWatch").style.display = "none"
    document.querySelector(".timer").style.display="none"
    document.querySelector(".btns").style.display = "none"    
    document.querySelector(".albtn").style.display = "flex" 
    // console.log(dt.toLocaleTimeString());
    ahr.value = dt.toLocaleTimeString().split(":")[0]
    amin.value = dt.toLocaleTimeString().split(":")[1]
    ddbtn.value = dt.toLocaleTimeString().split(":")[2].split(" ")[1]
    
    aday.value = dt.toLocaleDateString().split("/")[1]
    amon.value = dt.toLocaleDateString().split("/")[0]
    ayr.value = dt.toLocaleDateString().split("/")[2]
    
})


let albtn = document.querySelector("#setalrm")

albtn.addEventListener('click', (e)=>{
    
    // console.log(ahr.value);
    // console.log(amin.value);
    // console.log(aday.value);
    // console.log(amon.value);
    // console.log(ayr.value);
    // console.log(ddbtn.value);
    let ah = ahr.value
    let am = amin.value
    let ax = ddbtn.value
    let ad = aday.value
    let amn = amon.value
    let ay = ayr.value
    document.querySelector(".alerm").style.display="none"
    document.querySelector(".clock").style.display="inline-block"
    document.querySelector(".albtn").style.display = "none" 
    document.querySelector(".btns").style.display = "flex" 
    let localDate = amn+"/"+ad+"/"+ay
    
    // console.log(localDate);
    let aid = setInterval(() => {
        let x = new Date()
        let tarr = x.toLocaleTimeString().split(":")
        // console.log(tarr);
        if (localDate === dt.toLocaleDateString()) {
            if (ah == tarr[0] && am == tarr[1] && ax == tarr[2].split(" ")[1]) {
                document.querySelector("#amusic").play();
                document.querySelector(".bell").style.display="inline-block"
                setTimeout(() => {
                    document.querySelector(".bell").style.display="none"  
                }, 9000);
                // console.log("end interval");
                clearInterval(aid)
            }
        } 
    }, 1000);
    // console.log(dt.toLocaleDateString());
})




