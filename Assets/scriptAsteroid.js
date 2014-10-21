//Asteroid Script

//Inspector Variables
//speed of asteroid that can be set in unity
var asteroidSpeed : float = 6.0;

var explosionA : Transform;

var sceneManager : GameObject;

var shieldSoundFX : AudioClip;
var playerDamageFX: AudioClip;
//Private Variables


function Start()
{
	ResetEnemy(); // call the function to place the enemy
}

//game loop

function Update () 
{
	var newSpeed = asteroidSpeed *Time.deltaTime; //speed of asteroid
	
	// asteroid speed down
	transform.Translate(-newSpeed,0, 0);
	
	//check for bottom of the screen
	if(transform.position.x<=-14)
	{
		
		ResetEnemy();// call the function to place the enemy
	}
	
}

function OnTriggerEnter (other : Collider)
{
	if(other.gameObject.tag == "player")
	{
		//be able to use a variable in the script Player
		var playerScript = other.GetComponent("scriptPlayer");
		//subtract one from the overall player's lives
		playerScript.lives -= 1;
		//Tell score manager that a life has been lost
		sceneManager.transform.GetComponent("scriptManager").LoseLife();
		
		if (explosionA)
		{
			audio.clip = playerDamageFX;
			audio.Play();
			//create a new explosion particle effect transform upon instantiate so we can destroy it
			var newExplosion = Instantiate(explosionA,transform.position,transform.rotation); 
			Destroy(GameObject.FindWithTag("explosion"),.5); //remove explosion particle effect
			ResetEnemy();// call the function to place the enemy
		}
	}
	if(other.gameObject.tag=="shield")
	{
		if (explosionA)
		{
			audio.clip = shieldSoundFX;
			audio.Play();
			//create a new explosion particle effect transform upon instantiate so we can destroy it
			var shieldExplosion = Instantiate(explosionA,transform.position,transform.rotation); 
			Destroy(GameObject.FindWithTag("explosion"),.5); //remove explosion particle effect
			ResetEnemy();// call the function to place the enemy
		}
	}
}

function ResetEnemy()
{
	transform.position.x = 14; //starting height of asteroid
	transform.position.z = Random.Range(-10.0,10.0); // position asteroid falls from
	transform.localScale = Vector3(1,1,1); //set asteroid to normal scale
	transform.localScale *= Random.Range(1,5);; // randomize scale of asteroid between 1x to 4x
}