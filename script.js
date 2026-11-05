//your JS code here. If required.
const cards=document.querySelectorAll(".panel")
cards.forEach((card)=>{
	card.addEventListener("click",(e)=>{
		card.forEach((c)=>{
			c.classList.remove("active")
		})
		card.target.classList.add("active")
	})
})