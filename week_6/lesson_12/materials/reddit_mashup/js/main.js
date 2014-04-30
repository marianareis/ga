$(function() {

  printStoriesToColumn("http://www.reddit.com/r/london/hot.json", $('.london'));
  printStoriesToColumn("http://www.reddit.com/r/music/hot.json", $('.music'));
  printStoriesToColumn("http://www.reddit.com/r/pics/hot.json", $('.pics'));
});

  var printStoriesToColumn = function(subreddit, list) {

    $.getJSON(subreddit, function(response){

        $.each(response.data.children, function(index, story) {
        var listItem = $("<li>").appendTo(list);
        var link = $("<a href='" + story.data.url + "'></a>").appendTo(listItem);
        link.html(story.data.title);
        link.after("<p>Upvotes: " + story.data.ups + " " + "Downvotes: " + story.data.downs + "</p>");

      });
    });
  };
