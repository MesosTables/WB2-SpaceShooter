//Bullet Script

//Inspector Variables
//speed of bullet that can be set in unity
var bulletSpeed : float =15;

var explosion : Transform;
//in order to get scoring script
var sceneManager : GameObject;

var explosionSound : AudioClip;
//Private Variables

//game loop

function Update () 
{
	transform.Translate(Vector3(0,bulletSpeed*Time.deltaTime,0));
	
	if(transform.position.x>=12)
	{
		Destroy(gameObject);
	}
	if(transform.position.x<=-12)
	{
		Destroy(gameObject);	
	}
	if(transform.position.z>=17)
	{
		Destroy(gameObject);
	}
	if(transform.position.z<=-17)
	{
		Destroy(gameObject);
	}
}


//if bullet hits asteroid +1 score, reset asteroid, particle effect for asteroid,
// and destroy particle effect
function OnTriggerEnter(other : Collider)
{
	//check for tag off object hit
	if(other.gameObject.tag == "asteroid")
	{
		//call the reset asteroid function from the Asteroid script
		other.GetComponent("scriptAsteroid").ResetEnemy();
		audio.PlayClipAtPoint(explosionSound, transform.position);
		
		// create explosion when impact of bullet
		if (explosion)
		{
			//create a new explosion particle effect transform upon instantiate so we can destroy it
			var newExplosion = Instantiate(explosion,transform.position,transform.rotation); 
			//destroy bullet
			Destroy(gameObject); 
			//destroy 
			Destroy(GameObject.FindWithTag("explosion"),2);
		}
		//Tell score manager that our score has increased +1
		sceneManager.transform.GetComponent("scriptManager").AddScore();
	}
	
	
}