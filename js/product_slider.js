import { todayDeal } from "./product_slider_settings.js"

let todayDealProductListEl = document.querySelector(".today_deals_product_list")

let todayDealProductHTML = ""
let todayDealLength = todayDeal.length
for (let i = 0; i < todayDealLength; i++) {
    todayDealProductHTML += `
    <div class="today_deals_product_item">
        <a href="">
            <img src="${todayDeal[i]}">
        </a>
    </div>`
}

todayDealProductListEl.innerHTML = todayDealProductHTML

let today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev")
let today_deal_btn_nextEl = document.getElementById("today_deal_btn_next")

let startProduct = 0;

today_deal_btn_prevEl.addEventListener("click",()=>{
    if(startProduct<0){
        startProduct+=500
    }
    document.querySelectorAll(".today_deals_product_item").forEach(el => {
        el.style.transform = `translateX(${startProduct}%)`
    })
})

today_deal_btn_nextEl.addEventListener("click",()=>{
    if(startProduct>-2000){
        startProduct-=500
    }
    
    document.querySelectorAll(".today_deals_product_item").forEach(el => {
        el.style.transform = `translateX(${startProduct}%)`
    })
})