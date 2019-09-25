jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "https://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // will request the API via https
	    // default: false
	    // valid values: false, true
	    ssl: true,
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='items'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>'
        
        }
    );
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "espaker");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "espaker", selector: "#ghfeed" });
    
    
    let birthday = new Date(1997, 01, 02);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    let aboutme = `
    Olá, me chamo Espaker Kaminski, tenho 
    ${Math.abs(ageDate.getUTCFullYear() - 1970)} anos! 
    Sou desenvolvedor Backend porém também me aventuro no Frontend.<br> 
    Comecei desenvolver em 2014 ao começar meu curso técnico em informática, a 
    oportunidade de trabalhar como desenvolvedor veio somente em 2018. Mas amo 
    <i>codar</i> desde que tive meu primeiro contato com a programação!!!<br>
    Atualmente estou em relacionamento sério com o
    Python<i class="fab fa-python"></i>  afinal amo as possibilidades dessa 
    linguagem.`;
    document.getElementById('aboutme').innerHTML = aboutme;

});
