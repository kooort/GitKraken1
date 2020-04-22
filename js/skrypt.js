$(document).ready(function () {
    //to jest komentarz w lokalnym repozytorium
    console.log("Po załadowaniu strony");
    $("#informacja").click(function() {
    alert("GitKraken to przyjazny program!");
    });
    $("#repo").click(function () {
        $('#tresc').load('repo.html');
        });
       
        $("#settings").click(function () {
        $('#tresc').load('settings.html');
        });

        $(document).ready(function () {
            $("#informacja").click(function () {
            alert("GitKraken to przyjazny program!");
            });
           
            $("#repo").click(function () {
            $('#tresc').load('repo.html');
            });
            $("#settings").click(function () {
            $('#tresc').load('settings.html');
            });
            //rozpoczęcie pracy nad nowym przyciskiem
            $("#view").click(function () {
            $('#tresc').load('view.html');
            });
           });

   });
   