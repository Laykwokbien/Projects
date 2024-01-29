const currentDate = document.querySelector(".current-date"),
      daysTag = document.querySelector(".days"),
      prevNextIcon = document.querySelectorAll(".icons span");

//mendapatkan tanggal, Tahun, Bulan Baru
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"];

function renderCalendar() {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),//mengambil hari pertama di bulan
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),//mendapatkan tanggal terakhir di bulan
    lastDayofMonth = new Date(currYear, currMonth + lastDateofMonth).getDay(), //mengambil hari terakhir di bulan
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();//mengambil tanggal terakhir di bulan sebelumnya

    let liTag = "";
            
    
    for(let i = firstDayofMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for (let i = 1; i <= lastDateofMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    const daysBox = document.querySelectorAll(".days li")

    if(daysBox.length % 7 != 0){
        let Total = daysBox.length, //variable untuk kepanjangan dari li .days yang sudah di regenerate 
            over = Total + 7, //untuk menjadi tumpuan bagi sistem untuk mencari kelipatan berikutnya
            range = over % 7, //untuk mencari sisa dari kelipatan yang dicari
            max = over - range, //hasil yang kelebihan di kurangi dengan sisa kelipatan yang menjadi kelipatan yang berikutnya
            result = max - Total; //hasil hari yang kurang dari kelipatan

        let liTag = "";

        for(let i = 1; i <= result; i++){
            liTag += `<li class="inactive">${i}</li>`
        }
        
        daysTag.innerHTML += liTag;
    }
    

}
renderCalendar()

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        
        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth)
            currYear = date.getFullYear();
            currMonth = date.getMonth(); 
        } else{
            date = new Date()
        }
        renderCalendar()
    });
});