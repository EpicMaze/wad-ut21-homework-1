// JSON VALIDATOR
// https://jsonlint.com/

// JSON keeper link
// https://jsonkeeper.com/b/7SMC






// let json_uri = "https://jsonkeeper.com/b/7SMC";




// $(function(){
//     $.get(json_uri, function(json_obj){
//         for (obj in json_obj) {
//             console.log(obj);
//         }
//     })
// })



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
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "Oct 28 , 2021 09:08",
            "post_img_url": "static/images/flowers.jpeg",
            "post_text": "Testing if this works"
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "Oct 28 , 2021 09:78",
            "post_img_url": "",
            "post_text": "And it does :DDD"
        }
    ]
}

{/* <img src="static/images/like_blue.png" alt="Half-Life 2"> */}
let posts = posts_json.posts
let like_button = $("<img>", {src: "static/images/like_blue.png"});

for (let i in posts) {
    let card = $("<div>", {"class": "card"});


    // HEADER
    let header = $("<div>", {"class": "card-header"});
    header.prepend($("<img>", {src: posts[i].profile_img_url}));
    header.append(`<p> ${posts[i].time} </p>`);

    // BODY
    let body = $("<div>", {"class": "card-body"});
    if (posts[i].post_img_url !== "") {
        // console.log("NO IMAGE", posts[i].post_text);
        body.append($("<img>", {src: posts[i].post_img_url}));
    } 

    // FOOTER
    let footer = $("<div>", {"class": "card-footer"});
    footer.append(`<p> ${posts[i].post_text} </p>`);
    footer.append("<img src='static/images/like_blue.png'>");




    // Add all to card
    card.append(header);
    card.append(body);
    card.append(footer);
    // Add card to body
    $('.content-container').append(card);
}


// let header = ""
// let body = ""
// let footer = ""
// let output = ""

// for (let i in posts) {
//     header += `<div class='card'>
//                     <div class="card-header">
//                         <img src="${posts[i].profile_img_url}" alt="Profile">
//                         <p> ${posts[i].time} </p>
//                     </div>`;
//     if (posts[i].post_img_url !== ""){
//        body += ` <div class="card-body">
//                     <img src="${posts[i].post_img_url}" alt="Half-Life 2">
//                  </div>`;
//     } else {
//         body = "";
//     }
//     footer += `<div class="card-footer">
//                         <p>
//                             ${posts[i].post_text}
//                         </p>
//                         <img src="static/images/like_blue.png" alt="Half-Life 2">
//                     </div>
//             </div>`;

//     output += header + body + footer;
   
// }

// $('.content-container').html(output)




/* <div class="card">
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
</div> */