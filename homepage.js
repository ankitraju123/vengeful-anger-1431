



const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'eb47528526mshaab4e00c9c2a762p1c7fe0jsn37a11683a71e',
        'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
    }
};

fetch('https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api', options)
    .then(response => response.json())
    .then(response => getdata(response.data))
    .catch(err => console.error(err));

let getdata = (data) => {
    console.log("my data", data)

    let content = document.getElementById("content");

    data.forEach((ele) => {
        let div = document.createElement("div");
        div.setAttribute("id", "content-data")

        let title = document.createElement("h4");
        title.innerText = ele.title

        // let payment = document.createElement("h6");
        // payment.innerText = `${"Pay:-" + "$"}` + Math.floor((Math.random() * 1000)) + ("--") + `${"$"}` + Math.floor((Math.random() * 10000));

        let company_name = document.createElement("h5");
        company_name.innerText = `${"Organization :-"}` + ele.company_name

        let location = document.createElement("h6");
        location.innerText = `${"Location:-"}` + ele.location



        let job_types = document.createElement("h6");
        if (ele.job_types == "") {
            job_types.innerText = `${"Timing:-"}` + "full time"
        } else {
            job_types.innerText = `${"Timing:-"}` + ele.job_types
        }


        let slug = document.createElement("h6");
        slug.innerText = ele.slug

        let tags = document.createElement("h6");
        tags.innerText = `${"Tags:-"}` + ele.tags



        let url = document.createElement("h6");
        url.innerText = `${"Apply Resume:-"}` + ele.url

        let post = document.createElement("h6");
        post.innerText = `${"Posted"}` + (" ") + `${Math.floor((Math.random() * 10))}` + "days ago"

        let btn = document.createElement("button")
        btn.innerText = "View More"
        btn.addEventListener("click", function () {
            viewmore(ele)
        })

        div.append(title, company_name, location, job_types,  post, btn)
        content.append(div)
    })

}



let jobdata = ''
let viewmore = (data) => {

    jobdata = data
    // console.log(jobdata)

    localStorage.setItem("jobdata", JSON.stringify(jobdata))

    let all_jobdata = JSON.parse(localStorage.getItem("jobdata")) || []

    let content = document.querySelector(".content")
    content.innerHTML = null

    let div = document.createElement("div")
    let title = document.createElement("p");
    title.innerText = all_jobdata.title

    let company_name = document.createElement("p");
    company_name.innerText =`${"Organization :-"}`+ all_jobdata.company_name

    let location = document.createElement("p");
    
    location.innerText = `${"Location:-"}` + all_jobdata.location

    let applybtn=document.createElement("button");
    applybtn.innerText="Apply"

    

    

    // let title = document.createElement("p");
    // title.innerText = all_jobdata.title
    div.append(title,company_name,location,applybtn)
    content.append(div)







    let acontent = document.getElementById("right-bar-content")
    acontent.innerHTML = null

    let adiv = document.createElement("div")
    let atitle = document.createElement("p");
    atitle.innerText = all_jobdata.title

    let acompany_name = document.createElement("p");
    acompany_name.innerText =`${"Organization :-"}`+ all_jobdata.company_name

    let alocation = document.createElement("p");
    alocation.innerText = `${"Location:-"}` + all_jobdata.location

    // let title = document.createElement("h4");
    // title.innerText = ele.title
    let payment = document.createElement("h6");
    payment.innerText = `${"Pay:-" + "$"}` + Math.floor((Math.random() * 1000)) + ("--") + `${"$"}` + Math.floor((Math.random() * 10000));

    // let company_name = document.createElement("h5");
    // company_name.innerText = `${"Organization :-"}` + ele.company_name

    // let location = document.createElement("h6");
    // location.innerText = `${"Location:-"}` + ele.location



    let job_types = document.createElement("h6");
    if (all_jobdata.job_types == "") {
        job_types.innerText = `${"Timing:-"}` + "full time"
    } else {
        job_types.innerText = `${"Timing:-"}` + all_jobdata.job_types
    }


    let slug = document.createElement("h6");
    slug.innerText = all_jobdata.slug

    let tags = document.createElement("h6");
    tags.innerText = `${"Tags:-"}` + all_jobdata.tags



    let url = document.createElement("h6");
    url.innerText = `${"Apply Resume:-"}` + all_jobdata.url

    let post = document.createElement("h6");
    post.innerText = `${"Posted"}` + (" ") + `${Math.floor((Math.random() * 10))}` + "days ago"

    // let title = document.createElement("p");
    // title.innerText = all_jobdata.title
    adiv.append(atitle, acompany_name, payment, alocation, job_types, slug, tags, url, )
    acontent.append(adiv)

    
}




