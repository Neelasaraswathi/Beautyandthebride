
var i = 0;
var likeButton = function(){
  
    if (i<8) {  
      document.getElementById('CountedClicks').innerHTML=AddClick(i);

    } else {
      document.getElementById('CountedClicks').innerHTML = "100";

    }
 
    i=i+1;

}   
function AddClick(a){
      
      console.log('#someButton was clicked');

  var storyPoints = [1,3,5,8,13,20,40,100] ; 
  
  return storyPoints[a];
  
 }
 