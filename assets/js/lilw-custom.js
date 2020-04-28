/*
Welsh Mode Toggle
 */
function toggleLanguageMode () {
    // Toggle from English to Welsh
    var welshSections = document.getElementsByClassName("welsh-lang");
    var englishSections = document.getElementsByClassName( "english-lang");
    if ((document.getElementsByTagName("BODY")[0].className) === 'english-lang') {
        // Update Tag in Body declaration
        document.getElementsByTagName("BODY")[0].classList.add('welsh-lang');
        document.getElementsByTagName("BODY")[0].classList.remove('english-lang');
        // Hide English and un-hide Welsh
        [].forEach.call(englishSections, function(add_hidden){
            add_hidden.classList.add("hidden");
        });

        [].forEach.call(welshSections, function(rm_hidden){
            rm_hidden.classList.remove("hidden");
        });

    }
    // Toggle from Welsh To English
    else if ((document.getElementsByTagName("BODY")[0].className) === 'welsh-lang') {
        // Update Tag in Body declaration
        document.getElementsByTagName("BODY")[0].classList.add('english-lang');
        document.getElementsByTagName("BODY")[0].classList.remove('welsh-lang');
        // Hide Welsh and un-hide English
        [].forEach.call(welshSections, function(add_hidden){
            add_hidden.classList.add("hidden");
        });

        [].forEach.call(englishSections, function(rm_hidden){
            rm_hidden.classList.remove("hidden");
        });
    } else {
        alert("Somethings gone wrong with the Language, Sorry!")
    }
}