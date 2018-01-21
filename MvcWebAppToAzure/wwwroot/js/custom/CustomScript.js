
//Method used to hide page loading icon
function HideLoadingIcon() {
    $('.loader').hide();
}

//Method used to show page loading icon
function ShowLoadingIcon() {
    $('.loader').show();
}

(function () {
    function updateDateTime() {
        var date = new Date();

        container.innerText = date.toLocaleTimeString();
    }

    var container = document.body.getElementsByClassName("clock")[0];

    updateDateTime();
    setInterval(updateDateTime, 1000);
})();

window.onload = HideLoadingIcon();