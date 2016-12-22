function main() {
    $("#github").click(function () {
                window.open("http://github.com/carlosflrs", "_blank");
    });

    $("#linkedin").click(function () {
            window.open("http://linkedin.com/in/carlosflrs", "_blank");
    });
    
    $("#resume").click(function () {
        window.open("assets/files/carlos_flores_resume_interactive.pdf", "_blank");
    });
    
    $("#close").click(function () {
        $("#bio-text").hide();
    });
    
    $("#bio").click(function () {
        $("#bio-text").show();
    });
    
    $("#email").click(function () {
        window.location = "mailto:carlos.flrs@berkeley.edu";});
}

window.onload = main;
