//Credit Script 

//Inspector Variables

function OnGUI () 
{
	//Make a group at the center of the scrren
	GUI.BeginGroup(Rect(Screen.width/2-100, Screen.height/2-100, 200, 200));
	
	//Make a box to see where the group is on the screen
	GUI.Box(Rect(0,0,200,200), "Credits");
	
	//Instructions for the player
	GUI.Label(Rect(10,40,200,50),	"Designer: 	Moses");
	GUI.Label(Rect(10,70,200,80),	"Artist: 		Moses");
	GUI.Label(Rect(10,100,200,110),	"Software	Moses");
	GUI.Label(Rect(10,130,200,140),	"Mesos Tables Productions");
	
	//Back button
	if(GUI.Button(Rect(60,175,80,30),"Back"))
	{
		Application.LoadLevel("ScreenMainMenu");
	}
	
	//end the group
	GUI.EndGroup();
}