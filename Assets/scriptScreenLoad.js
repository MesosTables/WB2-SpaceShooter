
//Inspector Variables
var waitTime : float = 3.0;

function Update()
{
	if(Input.GetKeyDown("space"))
	{
		Application.LoadLevel("ScreenLevel1");
	}
	else
	{
		WaitTime();
	}
}

function OnGUI()
{
	//Make a group at the center of the scrren
	GUI.BeginGroup(Rect(Screen.width/2-100, Screen.height/2-100, 200, 200));
	
	//Make a box to see where the group is on the screen
	GUI.Box(Rect(0,0,200,200), "Instructions");
	
	//Instructions for the player
	GUI.Label(Rect(10,30,140,40),"Left/Right Arrow to Rotate");
	GUI.Label(Rect(10,60,140,70),"Up/Down Arrow to Thrust");
	GUI.Label(Rect(10,90,160,100),"Spacebar to shoot");
	GUI.Label(Rect(10,120,160,130),"Escape to quit");
	
	if(GUI.Button(Rect(60,160,80,30),"Continue"))
	{
		Application.LoadLevel("ScreenLevel1");
	}
	//end the group 
	GUI.EndGroup();
}

function WaitTime()
{
	yield WaitForSeconds(waitTime);
	Application.LoadLevel("ScreenLevel1");
}