// Norma Carr

let MemeF;
let NewUrl;
let NHeader;
let NFoot;
let MemeImg;
let footProp;
let headProp;

//Get the values from the input in the form
function GetValues() {
    NewUrl = document.getElementById("ImgURL").value;
    NHeader = document.getElementById("ImgHeader").value;
    NFoot = document.getElementById("ImgFoot").value;
};

//Assign the values to the elements created, and appen them to the div tag
function CreateMeme() {
    let NewElemDiv = document.getElementById("Meme");

    headProp = document.createElement('p');
    headProp.classList.add('texthead');
    headProp.textContent = NHeader;
    headProp.style.backgroundColor = "Azure";
    NewElemDiv.appendChild(headProp);

    footProp = document.createElement('p');
    footProp.classList.add('textfoot');
    footProp.textContent = NFoot;
    footProp.style.backgroundColor = "Azure";
    NewElemDiv.appendChild(footProp);

    MemeImg = document.createElement('img');
    MemeImg.classList.add('ImgUrl');
    MemeImg.setAttribute('src', NewUrl);
    NewElemDiv.append(MemeImg);
};

//Event listener of button Delete; to remove the elements appended to div
function DeleteMeme() {
    document.addEventListener("click", function() {
        headProp.remove();
        footProp.remove();
        MemeImg.remove();
    });

}

//Dome Event
document.addEventListener("DOMContentLoaded", function() {
    MemeF = document.getElementById("MemeForm");

    //Event listener 

    MemeF.addEventListener("submit", function(event) {
        event.preventDefault();
        GetValues();
        CreateMeme();
        DeleteMeme();
        document.getElementById("MemeForm").reset();
    });
});