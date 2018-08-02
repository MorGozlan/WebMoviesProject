function SeriesClass(_name,_seasons,_episode,_img,_video,_prt)
{
    this.name = _name;
    this.seasons = _seasons;
    this.episode = _episode;
    this.img = _img; //not include the folder
    this.prt = _prt; //parent
    this.video = _video;
    
}

SeriesClass.prototype.addToHtml = function ()
{
    var _this = this;
    var newBox = $("<div class='box'>");
    $(newBox).append("<h2>"+this.name+"</h2>");
    $(newBox).append("<img src='_images/"+this.img+"'>");
    $(newBox).append("<div><strong>Season</strong>: "+this.seasons+"</div>");
    $(newBox).append("<div><strong>Episode</strong>: "+this.episode+"</div>");
    $(this.prt).append(newBox);
    
    $(newBox).click(function(){
            $(".dark").show();
            $("#id_title").html(_this.name);
            $("#id_img").attr("src","_images/"+_this.img);           
            $("#id_Season").html("Seasons: " +_this.seasons);
            $("#id_Episode").html("Episode: " +_this.episode);
            //$("#id_video").attr("src","https://www.youtube.com/embed/"+_this.video+"?rel=0&amp;showinfo=0");
            $("#id_video").attr("src","https://thevideo.me/embed-"+_this.video+".html");

            
        })
};