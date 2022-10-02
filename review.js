let reviews = [
    {
        name : "Indigo Airlines",
        img:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/5335229f1b22e90f1e5eafb892704339",
    }

    ,
    {
        name:"Tata Consultancy Services",
        img:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/13b693b4dcc055d2344351b4c9a148e9"

    },

    {
        name:"Planet Spark",
        img:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/cccfe6abfac987d8cb5ec9b0f2dd66cb"
    },

    {
        name:"Kotak Mahindra Bank",
        img:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/6dab2f9e01e4bb467ce4416015c323e8"   
    },

    {
        name:"BNY Mellon",
        img:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/6dab2f9e01e4bb467ce4416015c323e8"      
    },


    {
        name:"Deloitte",
        img:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/f1692e34f4dc05559a0ccef2eea78b70" 
    },

    {
        name:"EY",
        img:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/5335229f1b22e90f1e5eafb892704339"
    }
]
// console.log(reviews[1])
let content=document.getElementById("content")


reviews.forEach((ele)=>{
    let main=document.createElement("div")
    let top=document.createElement("div")
    top.setAttribute("id","top")
    let bot=document.createElement("div")
    bot.setAttribute("id","bot")

  

    let name=document.createElement("h4")
    name.innerText=ele.name

    let image=document.createElement("img")
    image.src=ele.img

    
    // let div2=document.createElement("div")
    // div2.setAttribute("id","div2")
    let salary=document.createElement("h4")
    salary.innerText="salary"

    let question=document.createElement("h4")
    question.innerText="question"

    let jobs=document.createElement("h4")
    jobs.innerText="jobs"

    let rating

    top.append(name,image)
    bot.append(salary,question,jobs)
    main.append(top,bot)
    content.append(main)
})

    
