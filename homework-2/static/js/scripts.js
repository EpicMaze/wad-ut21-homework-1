// JSON VALIDATOR
// https://jsonlint.com/

// JSON keeper link
// https://jsonkeeper.com/b/7SMC

// let json_uri = "https://jsonkeeper.com/b/7SMC";


// Fetching JSON via URI and Ajax
$.ajax({
    method: "GET",
    url: "https://jsonkeeper.com/b/7SMC",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "*/*",
    },
    // crossDomain: true,
    dataType: "jsonp",
    success: function(json) {
        console.log("JSON");
    }
    // error: function(response) {

    // }
});


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
        },
        // START
        {
            "profile_img_url": "static/images/profile.png",
            "time": "Oct 10 , 2022 11:10",
            "post_img_url": "static/images/bike.jpg",
            "post_text": "Selling bike 560 EURO"
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "Dec 10, 2012 , 13:30",
            "post_img_url": "static/images/shrek.jpg",
            "post_text": "Check out this meme"
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "Aug 23, 2013 23:41",
            "post_img_url": "static/images/black_hole.jpg",
            "post_text": "A black hole is a region of spacetime where gravity is so strong that nothing — no particles or even electromagnetic radiation such as light—can escape from it"
        },
        {
            "profile_img_url": "static/images/profile_girl.jpg",
            "time": "April 21, 2015 01:46:17",
            "post_img_url": "",
            "post_text": "Hello I am new gamer on youtube check out my channel!"
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "August 6, 2015 18:43:18",
            "post_img_url": "static/images/gamer.png",
            "post_text": "I am about to do whats called a progamer move"
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "March 10, 2021 03:32:22",
            "post_img_url": "",
            "post_text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusamus, iure quam illum earum velit, sit nesciunt, fuga perferendis voluptas harum? Nostrum, voluptate numquam aspernatur optio debitis atque ex. Officiis!"
        },
        {
            "profile_img_url": "static/images/profile.png",
            "time": "April 30, 2014 04:11:38",
            "post_img_url": "",
            "post_text": "Ajax no 'access-control-allow-origin' header is present on the requested resource."
        }
    ]
}

let posts = posts_json.posts

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

    
// Profile dropdown
let dropdown = $('.profile-dropdown');
// $('.profile').hide()
$('.profile-img').mouseenter(function(){
        console.log("HOVER");
        dropdown.css("display", "block");
    }).mouseleave(function(){
        dropdown.css("display", "none");
        console.log("LEAVE");
    });


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