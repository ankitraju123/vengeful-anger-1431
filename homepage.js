

let islogin=JSON.parse(localStorage.getItem("islogin"))||false

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
        btn.setAttribute("id","viewmore")
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
    let title = document.createElement("h4");
    title.innerText = all_jobdata.title

    let company_name = document.createElement("h5");
    company_name.innerText =`${"Organization :-"}`+ all_jobdata.company_name

    let location = document.createElement("h6");
    
    location.innerText = `${"Location:-"}` + all_jobdata.location

    let applybtn=document.createElement("button");
    applybtn.innerText="Apply"
    applybtn.addEventListener("click",function(){
        apply()
    })
    applybtn.setAttribute("id","applybtn")

    
let apply=()=>{
    let islogin=JSON.parse(localStorage.getItem("islogin"))
    if(islogin==true){
        window.location.href="resume_indexPage.html"
    }else{
        window.location.href="signup.html"
    }
   
}
    

    // let title = document.createElement("p");
    // title.innerText = all_jobdata.title
    div.append(title,company_name,location,applybtn)
    content.append(div)







    let acontent = document.getElementById("right-bar-content")
    acontent.innerHTML = null

    let adiv = document.createElement("div")
    let atitle = document.createElement("h4");
    atitle.innerText = all_jobdata.title

    let acompany_name = document.createElement("h5");
    acompany_name.innerText =`${"Organization :-"}`+ all_jobdata.company_name

    let alocation = document.createElement("h6");
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

let qualification=document.createElement("h5");
qualification.innerText=` Qualifications:-

Bachelor's (Required)
English, Hindi and Marathi (optional) (Required)
total work: 3 years (Preferred)`

    let hiring = document.createElement("h6");
    hiring.innerText =`Hiring Insights:-

    :Hiring 2 candidates for this role
    :Urgently hiring`
    

    let desc = document.createElement("h5");
    desc.innerText =`Full Job Description :-

    :Work closely with Project Managers and Team to develop detailed output of the design.
    :Clear project deliverables and timelines ensured to be followed.
   :Working closely with Client and handling the client requests.
    :Value addition to the design inputs and project deliverables with better recommendations and in time highlighting of the identified hurdles.
    :Focus on strategies to deliver quality work , modular and scalable structures.
    :In time and appropriate communication about the status.
    :Contributing to Team by introducing new tools, technologies and processes.
    :Innovative thought process and efforts to provide high value services to clients.
    :Should be able to define the problem well, break it down and come up with solutions. Should be able to deliver solutions and not problem statements.`

    let date = document.createElement("h6");
    date.innerText = `${"Job activity :-"}
    :${"Posted"}` + (" ") + `${Math.floor((Math.random() * 10))}` + "day ago"

    let endbtn=document.createElement("button");
    endbtn.innerText="Report Job"
    endbtn.setAttribute("id","endbtn")
    adiv.append(atitle, acompany_name, payment, alocation, job_types, slug, tags, url, qualification, hiring,desc,date,endbtn )
    acontent.append(adiv)

    
}

let vishal=(islogin)=>{
    if (islogin==true){
        let cont=document.getElementById("navbar-right")

        let image1=document.createElement('img');
        image1.src="data:image/png;base64,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"
    
        let image2=document.createElement('img');
        image2.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAAZlBMVEX///8AAADIyMj09PT8/Pzo6OhmZma9vb1SUlJNTU21tbX39/cbGxtzc3OsrKxYWFgSEhJEREReXl6hoaHu7u6ZmZltbW3Pz8+EhITb29vV1dU3Nzd9fX2MjIwLCws9PT0uLi4nJycMP7thAAAC3ElEQVR4nO2bCXKjMBBFLRZjDNh4C6vj5P6XjCnNxDABhNRfaCrV7wK8Ai2tr2azYRiGYRiGYRwSeGVbeoFrjY4oFx155FpkszmIv1xcq1Tv3y6icOySvVTEzrGL6ONWJRm4hK40/PpwTPOBS57Gl+K6ukl134lxTu2qYzjYxxMikuaQrGUSPWZNOj72q9iEZ6VJx66yr3JZZNJxs71FZWqHb7ZWZfyjhspzSlmc37560A75tCej91Y6HpY+U/CmrSLE2Y7M8hnU525DJTRSEaLGqyTzy/40Jx/uclA/dQJ47emnxi4pemKbDVzJDexi/lqeYOf1nqIiDlCXLckFuuBVufqBM7wjaxnzCS1BTuupOnspMU4lUT9NAW7t9cguHsyFstBJcAOmJbu0KJWEOnSfJxTUcelKVhECtT+aVlF9UBFEDXBBVXcRwAWVLNI2acke5HIDuKDqqRLgUoJc6EsdbrHTyRamyNjFqovJmf5f3n6hC+0QINn+QpdlIeo8Z5ALvZTC3eeYJi99QKeS5ARwOWGKTO0kdYwH5oQUNgCXBlNkVqTs5Q8ppsgsACqoS1pEuYsqeKmBhwSTTd0hLpgiU/9GYowjxAWigrlIpwdBEsTCSw+CJIiJhBm6kMEbICqpDsBNaIjYATpy+o6EWXU76AMG9YkAKwzsEwE+EmYzkhC3pOAD6JLSljtEJPWC9GIgpe6LhpKsIhKpPoRECBGmDjGuNK/IgSv5NJzXAaaIGhKbzSVEHPUTk8AhsKNitF8jwiiMjGZjlB56bVQ14gg9TaNxoC1wm/M4+eK7UPpVp5pldxUJIv5Xky0JZMLIW4PIWeMxw/w3zJ0P0H1jKuqZriVcg8lCpsPwBt/0qGD6I1npTJ3Fn9rK4S2PC5jKq1DdAlqMtxbAOoD0GEvPMlf/rf0cv2svLT2qYVkcu/1LLHodXbZORu2AoLiUbXvz1vrNh2EYhmEYhhnjC/DYJ7PLjbuAAAAAAElFTkSuQmCC"
    
        let image3=document.createElement('img');
        image3.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAY1BMVEX///8AAABeXl5nZ2fQ0NDy8vL5+fnT09Nvb2/u7u6jo6P19fWvr69aWlqTk5N0dHQoKChMTEw2NjYvLy8+Pj7n5+e7u7seHh7JycnCwsIVFRV8fHzf39+CgoINDQ2NjY2bm5voZRz+AAACDklEQVRoge2ZCY7CMAxFa5IuQLpvbBm4/ymHCjGgAu0vxEUj+V3gqU6axN+eJwiCIAiCIPx3gtAkqVJpYsJgVvEmzeiPLNrMJ86pR76dReynfXFHtOQ36/aZmWjHXnXzXNxhvmYmWnGamyEzUcNnrofNRDWb+uGn6lNxmQcXmnW51z/javJZ1CfATEcO87pC1CXHZ2vETMRxqB0x9Z5BPfpnXcjdm/0CU5fur7DDDlNT6FwdgmbSop5X7X6t62zc2rE7OFcH0DlKVDCcpApTx+7NyG3dwXFjj76OLrhfag+s+ILDjN2aTB3QYtzMsck6gNVmew2PbnLG/mNkpyk+s+fFQ2aGB8odwcBWi7mTjf0rc8Qs9l52m8zd9YX1k0RD8TQ8j9S2vPdmlq+5fcTXicqroqhylei5vvhG4J+ZN68TBEFwSVDrxqxsqs6kdmUaXc9wqPna2Kp9yO5+2mpvNF8a74enuOxL7ynzU8hwlfhNCrWaRdS4tW8jJB+9EjWulv5g0fDohnWRLTRgXtan/PCxFpgX8x2E1nxQ9y0YYryiencYsow+E3eot/718INa32jfiNG2LsQdk4s+MtGawsStDkb+GJMGA9icA2VSigcNd3AS3ByAeShKu4bVznb3FTzSclzvKRUHk1gcPEMEsjlRi1rUokYZzH/fAR8O2HjhlNjCakEQBEEQBOEr/AJZiRudmupOMgAAAABJRU5ErkJggg=="
    
        let employe=document.createElement("h4")
        employe.innerText="Employer/Post Job"
        employe.addEventListener("click",function(){
            window.location.href="input1.html"
        })

        let sout = document.createElement("h4");
        sout.innerText = "Sign-Out";
        sout.addEventListener("click",() => {
            localStorage.setItem("islogin",false)
            window.location.href = "index.html"
         })

        cont.append(image1,image2,image3,sout,employe)
    }    else{
        let cont=document.getElementById("navbar-right") 

        let signup=document.createElement("h4");
        signup.innerText="Sign-In"
        signup.addEventListener("click",function(){
            window.location.href="signup.html"
        })

        let post=document.createElement("h4")
        post.innerText="Post Resume"
        post.addEventListener("click",function(){
            window.location.href="resume_indexPage.html"
        })
        let employe=document.createElement("h4")
        employe.innerText="Employer/Post Job"
        employe.addEventListener("click",function(){
            window.location.href="post.html"
        })

    cont.append(signup,post,employe)
    


    }

}
vishal(islogin)

document.getElementById("h3-spann").addEventListener("click",function(){
    reDirect()
})

let reDirect=()=>{
    // let islogin=JSON.parse(localStorage.getItem("islogin"))
    // let islogin=false
    // if (islogin==true){
    //     window.location.href="input1.html"
    // }else{
    //     window.location.href="post.html"
    // }
 } 
//  reDirect()


// h3-span