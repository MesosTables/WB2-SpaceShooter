//Scene Manager Script

//Inspector Variables
var gameTime : float = 15;
static var score : int = 0;
static var lives : int = 3;

//Private Variables


//start the game time when the game starts
function Start()
{
	InvokeRepeating("Countdown", 1.0, 1.0);
	lives = 3;
	score = 0;
}

//hold information on the overall scene
//hold the score and a timer
function Update () 
{
	
	if(lives <= 0)
	{
		Application.LoadLevel("ScreenLose");
		lives = 3;
		PlayerPrefs.SetInt("Score", score);
		score =0;
	}
	
	if(gameTime <= 0)
	{
		Application.LoadLevel("ScreenWin");
		lives = 3;
		PlayerPrefs.SetInt("Score", score);
		score = 0;
	}
	// print("Score: " + score); 
}

//game time countdown
function Countdown()
{
	//when gameTime is 0 stop counter
	if (--gameTime ==0)
	{
		CancelInvoke("Countdown");
	}
}

//increase score for every asteroid hit
function AddScore()
{
	score +=1;
}

//display score, lives, timer on the screen for the player
function OnGUI()
{
	GUI.Label(Rect(10,10,100,20), "Score: " + score);
	GUI.Label(Rect(10,25,100,35), "Lives: "+ lives );
	GUI.Label(Rect(Screen.width-75.0, 10, 100, 20), "Time: " +gameTime);
}

function LoseLife()
{
	lives -=1;
}