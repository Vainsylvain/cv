$(function(){
    var $mainMenuItems = $("#experiences ul").children("li"), totalMainMenuItems = $mainMenuItems.length, openedIndex = -1, 
    
    init = function (){ 

        $mainMenuItems.children(".timeline-badge").click(function(){
            var newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex),
            $poste = $item.find("timeline-panel");
            $poste.animate({height: "auto"}, 250);
            openedIndex = newIndex;
        });
    };
    init();
});  