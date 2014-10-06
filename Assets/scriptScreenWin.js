//Lose Screen

function OnGUI () 
{
	//Make a group at the center of the screen
	GUI.BeginGroup(Rect(Screen.width/2-100, Screen.height/2-100,200,100));
	
	//Make a box with a title to group your buttons
	GUI.Box(Rect(0,0,200,100),"You Win!");
	
	//Lose Screen Buttons
	GUI.Label(Rect(10,30,200,50),"Score: "+ PlayerPrefs.GetInt("Score"));
	
	if (GUI.Button(Rect(60,60,80,30),"Main Menu"))
	{
		Application.LoadLevel("ScreenMainMenu");
	}
	
	GUI.EndGroup();	
}