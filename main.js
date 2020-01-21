function submitBreed() {
    console.log("submitBreed ran!");
    $(".breed-selector").on("submit", function(event) {
        event.PreventDefault(); 
        let breedInput = $("#breed-input").val();
        getBreedImage(breedInput);
    });
}

function getBreedImage(breedInput) {
    console.log("getBreedImage ran!");
    fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => breedReveal(responseJson))
    .catch(error => alert("Error: The dog breed you entered does not match our records. Please try again."));
}

function breedReveal(responseJson) {
    console.log("breedReveal ran!");
    $(".breed").empty();
    $(".breed").append(`<img src="${responseJson.message}"> alt="Dog Brreed Image">`);
    $(".breed").removeClass("hidden");
}

function renderPage(){
    console.log("page render ran! ready for input!")
    submitBreed();
}

$(renderPage);