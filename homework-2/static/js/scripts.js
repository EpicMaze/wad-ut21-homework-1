// JSON VALIDATOR
// https://jsonlint.com/

// JSON keeper link
// https://jsonkeeper.com/b/7SMC






let json_uri = "https://jsonkeeper.com/b/7SMC";




$(function(){
    $.get(json_uri, function(json_obj){
        for (obj in json_obj) {
            console.log(obj);
        }
    })
})



let posts_json = {
    "posts": [
        {
            "profile_img_url": "static/images/profile.png",
            "time": "Sep 18, 2020 15:16",
            "post_img_url": "static/images/portal.jpg",
            "post_text": "I think it's going to rain"
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "Sep 18, 2020 15:16",
            "post_img_url": "",
            "post_text": "Which weighs more a pound of feathers or a pound of bricks?"
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "Sep 18, 2020 17:18",
            "post_img_url": "static/images/batman.jpg",
            "post_text": "Felt cute, might delete later"
        }
    ]
}


let posts = posts_json.posts

let header = ""
let body = ""
let footer = ""
let output = ""

for (let i in posts) {
    header += `<div class="card-header">
                    <img src="${posts[i].profile_img_url}" alt="Profile">
                    <p> ${posts[i].time} </p>
                </div>`;
    if (posts[i].post_img_url !== ""){
       body += ` <div class="card-body">
                    <img src="${posts[i].post_img_url}" alt="Half-Life 2">
                </div>`
    } else {
        body = "";
    }
    footer += `<div class="card-footer">
                    <p>
                        ${posts[i].post_text}
                    </p>
                    <img src="static/images/like_blue.png" alt="Half-Life 2">
                </div>`

    output += header + body + footer;

   
}

$('card')

<div class="card">
    <div class="card-header">
        <img src="static/images/profile.png" alt="Profile">
        <p> Sep 18, 2020 15:16 </p>
    </div>
    <div class="card-body">
        <img src="static/images/portal.jpg" alt="Half-Life 2">
    </div>
    <div class="card-footer">
        <p>
            I think it's going to rain
        </p>
        <img src="static/images/like_blue.png" alt="Half-Life 2">
    </div>
</div>