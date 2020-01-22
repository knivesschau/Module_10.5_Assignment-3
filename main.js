function submitBreed() {
    $(".breed-selector").on("submit", function(event) {
        event.preventDefault(); 
        let breedInput = $("#breed-input").val();
        getBreedImage(breedInput);
    });
}

function getBreedImage(breedInput) {
    fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
        if (responseJson.status == "success") {
            breedReveal(responseJson);
        }
        else {
            throw responseJson;
        }
    })
    .catch(error => alert(`The breed you entered does not match anything in our records. Please try again.`));
}

function breedReveal(responseJson) {
    console.log(responseJson);
    $(".breed").empty();
    $(".breed").append(`<img src="${responseJson.message}" alt="Dog Breed Image">`);
    $(".breed").removeClass("hidden");
}

function renderPage(){
    console.log("page render ran! ready for input!")
    submitBreed();
}

$(renderPage);