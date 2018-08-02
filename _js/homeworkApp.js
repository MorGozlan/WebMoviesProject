$(document).ready(function () {
    //alert("MorGozlan")
   //createSeries()
   loadAjax();
   declarBtns();
})
function declarBtns()
{
    $(".burger").on("click",function(){
        $("nav ul").toggle(700);
    })
    $("#close_btn").click(function(){
        $(".dark").fadeOut(800)
    })
    $("#seasons1_btn").click(function(){
        loadAjaxSeasons("seasons1.json")
    })
    $("#seasons2_btn").click(function(){
        loadAjaxSeasons("seasons2.json")
    })
    $("#seasons3_btn").click(function(){
        loadAjaxSeasons("seasons3.json")
    })
    $("#seasons4_btn").click(function(){
        loadAjaxSeasons("seasons4.json")
    })
    $("#seasons5_btn").click(function(){
        loadAjaxSeasons("seasons5.json")
    })
}
function loadAjax()
{
             $.getJSON("prisonbreak.json", function(data) {
             json = data;
             //createSeries();
})
}
function loadAjaxSeasons(_url)
{
             $.getJSON(_url, function(data) {
             json = data;
             createSeries();
})


}
function createSeries()
{
    $("#id_parent").html("");
    for(var i in json)
    {
    var newSeries = new SeriesClass (json[i].name,json[i].seasons,json[i].episode,json[i].image,json[i].video,id_parent)
    newSeries.addToHtml();
    }
}