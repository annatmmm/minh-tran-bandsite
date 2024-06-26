    //array creation
    const comments = [
        {
            name: "Conner Walton",
            date: "02/17/2021",
            comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
        },
        {
            name: "Emilie Beach",
            date: "01/09/2021",
            comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
        },
        {
            name: "Miles Acosta",
            date: "12/20/2020",
            comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
        }
    ];

    //
    const form = document.querySelector(".conv__form");
    const commentsSection = document.querySelector(".comments");

    console.log(form);

    console.log(commentsSection);

    function displayComment() {

        commentsSection.innerHTML = "";
        let newSec = document.createElement('hr');
        commentsSection.appendChild(newSec);
        newSec.classList.add("comments__new--sec");
        //looping through each comment
        comments.forEach((comment) => {

            const commentContainer = document.createElement("div");
            const avatarContainer = document.createElement("div");
            const userDetail = document.createElement("div");
            const nameContainer = document.createElement("div");
            const dateContainer = document.createElement("div");
            const name = document.createElement("p");
            const date = document.createElement("p");
            const commentDes = document.createElement("div");
            const userComment = document.createElement("div");
            newSec = document.createElement('hr');

            name.innerText = comment.name;
            date.innerText = comment.date;
            commentDes.innerText = comment.comment;



            nameContainer.appendChild(name);
            dateContainer.appendChild(date);
            userDetail.appendChild(nameContainer);
            userDetail.appendChild(dateContainer);


            avatarContainer.classList.add("comments__avatar--cont");
            userDetail.classList.add("comments__user--detail");
            name.classList.add("comments__name");
            date.classList.add("comments__date");
            commentDes.classList.add("comments__comment--des");
            userComment.classList.add("comments__user--cont");
            newSec.classList.add("comments__new--sec");
            commentContainer.classList.add("comments__comment--cont");


            userComment.appendChild(userDetail);
            userComment.appendChild(commentDes);

            commentContainer.appendChild(avatarContainer);
            commentContainer.appendChild(userComment);
        

            commentsSection.appendChild(commentContainer);
            commentsSection.appendChild(newSec);
        });
        
    };
    //invoking function
    displayComment();

    form.addEventListener("submit", (e) => {

        e.preventDefault();
        let date = new Date().toLocaleDateString('en-us');
        console.log(e.target.name.value);

        let newComment = {
            name: e.target.name.value,
            date: date,
            comment: e.target.comment.value
        };
        console.log(newComment);
        e.target.name.value = "";
        e.target.comment.value = "";
        comments.unshift(newComment);
        displayComment();
 
 
    });