function main() {
    $("#email").hover(
        function () {
            $("#copy-text").show();
            $("#email-image").hide();
            $("#email-text").hide();
        }, 
        function () {
            $("#copy-text").hide();
            $("#email-image").show();
            $("#email-text").show();
        }
    );

    $("#github").click(function () {
                window.open("http://github.com/carlosflrs", "_blank");
    });

    $("#linkedin").click(function () {
            window.open("http://linkedin.com/in/carlosflrs", "_blank");
    });
    
    $("#resume").click(function () {
        window.open("assets/files/carlos_flores_resume_ML.pdf", "_blank");
    });
    
    $("#close").click(function () {
        $("#bio-text").hide();
    });
    
    $("#bio").click(function () {
        $("#bio-text").show();
    });
    
    document.getElementById("email").addEventListener("click", function() {
        copyToClipboard(document.getElementById("email"));
    });
}


/** Credit: http://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery" */

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId);
    if (!target) {
        console.log("here");
        var target = document.createElement("textarea");
        target.style.position = "absolute";
        target.style.left = "-9999px";
        target.style.top = "0";
        target.id = targetId;
        document.body.appendChild(target);
    }
    target.textContent = "carlos.flrs@berkeley.edu";
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}


window.onload = main;
