$(document).ready(function () {
    //scrape articles 
    $(".scrape").on("click", function (event) {
        event.preventDefault()
        $.ajax({
            method: "GET",
            url: "/scrape",
        }).done(function (data) {
            // if (data) {
            //     alert("Articles Scraped!");
            // } else {
            //     alert("No new articles at this time.  Try again later");
            // }
            window.location = "/"
        })
    });

    //Save articles button
    $(".save").on("click", function () {
        var id = $(this).attr("data-id");
        $.ajax({
            method: "POST",
            url: "/articles/saved/" + id
        }).done(function (data) {
            window.location = "/"
        })
    });

    //delete from saved
    $(".delete").on("click", function () {
        var id = $(this).attr("data-id");
        $.ajax({
            method: "POST",
            url: "/articles/delete/" + id
        }).done(function (data) {
            window.location = "/saved"
        })
    });


//create a note and save to article
 $(".savenote").on("click", function (event) {
    var id = $(this).attr("data-id");
    console.log(id)
    console.log($(`#notebody${id}`).val())
    $.ajax({
        method: "POST",
        url: "/articles/"+id+"/notes",
        data: {
            body: $(`#notebody${id}`).val()
        }
    }).done(function (data) {
        console.log(data)
        $(`#notebody${id}`).val("");

        // window.location = "/saved"
    })
});


//View saved notes
$(".note").on("click", function (event) {
    var id = $(".saveNote").attr("data-id");
    console.log(id)
    $.ajax({
        method: "GET",
        url: "/articles/"+id+"/notes",
    }).then(function(data) {
        console.log(data)
    })
   
        
        // window.location = "/saved"
    })






    //highlight active page on nav
    var url = window.location;
    // Will only work if string in href matches with location
    $('ul.nav a[href="' + url + '"]').parent().addClass('active');

    // Will also work for relative and absolute hrefs
    $('ul.nav a').filter(function () {
        return this.href == url;
    }).parent().addClass('active');


    // popup modal of how many scraped, if none then say check back later


    // end document
});