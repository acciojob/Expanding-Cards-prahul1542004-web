//your JS code here. If required.
const cards=document.querySelectorAll(".panel")
cards.forEach((card)=>{
	card.addEventListener("click",(e)=>{
		cards.forEach((c)=>{
			c.classList.remove("active")
		})
		card.classList.add("active")
	})
})