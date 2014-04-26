  (function(){
	console.log("MyTest started!");
    Ash.orientationHorizontal().then(function(msg){
    //ten kod bedzie wywolany, gdy ekran znajdzie sie w orientacji poziomej
      var worksquare = $('.worksquare')[0];
      Ash.assert(worksquare);
      
      var sidebar = $('.sidebar')[0];
      Ash.assert(sidebar);

      Ash.equal(worksquare.getBoundingClientRect().top, sidebar.getBoundingClientRect().top);
      Ash.assert(worksquare.getBoundingClientRect().left < sidebar.getBoundingClientRect().left);
      //Ash.endTest();
    }).then(
      Ash.orientationVertical //a teraz odwroc ekran pionowo
    ).then(function(msg){
      var worksquare = $('.worksquare')[0];
      Ash.assert(worksquare);
      
      var sidebar = $('.sidebar')[0];
      Ash.assert(sidebar);

      Ash.assert(worksquare.getBoundingClientRect().top < sidebar.getBoundingClientRect().top);
      Ash.equal(worksquare.getBoundingClientRect().left, sidebar.getBoundingClientRect().left);        

      //jesli aplikacja dotarla tutaj, to zaliczmy ten przypadek testowy
      Ash.endTest();
    });  
  })();