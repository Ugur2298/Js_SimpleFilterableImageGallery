let buttons = document.querySelectorAll(".btn");
for(const btn of buttons){
    btn.addEventListener("click",(e) => {
    let storeImg = document.querySelectorAll(".store-item");
    
      e.preventDefault();
      const filter = e.target.dataset.filter;
      storeImg.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
    })
    })
}






















































































































































