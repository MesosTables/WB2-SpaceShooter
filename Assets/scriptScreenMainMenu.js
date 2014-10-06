//Main Menu Script

//Inspector Variable


function OnGUI () 
{
	//Make a group at the center of the scrren
	GUI.BeginGroup(Rect(Screen.width/2-50, Screen.height/2-50, 100, 175));
	
	//Make a box to see where the group is on the screen
	GUI.Box(Rect(0,0,100,175), "Main Menu");
	
	//Add buttons for game navigation
	if(GUI.Button(Rect(10,30,80,30),"Start Game"))
	{
		Application.LoadLevel("ScreenLoad");
	}
	
	if(GUI.Button(Rect(10,65,80,30),"Credits"))
	{
		Application.LoadLevel("ScreenCredit");
	}
	
	if(GUI.Button(Rect(10,100,80,30), "Exit"))
	{
		Application.Quit();
	}
	
	if(GUI.Button(Rect(10,135,80,30),"Homepage"))
	{
		Application.OpenURL ("http://mesostables.github.io/");
	}
	
	GUI.EndGroup();
}