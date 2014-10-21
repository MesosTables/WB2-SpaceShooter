//Player Script

//Inspector Variables
//speed that the object moves forward or backward
var speed : float = 10.0;
//speed that the object rotates around its center
var rotationSpeed : float = 300.0;
var projectile : Transform;
var socketProjectile:Transform;
var lives : int = 3;
var jetParticle : Transform;
var jetSocket : Transform;
var jetSocket2 : Transform;
var numberOfShields : int = 4;
var shieldMesh : Transform;
var shieldButton : KeyCode;
var shootFX: AudioClip;

//Private Variables
var shieldOn : boolean = false;

//game loop
function Update () 
{
	//Move player based on input
	// Get the horizontal and vertical axis.
	// By default they are mapped to the arrow keys.
	// The value is in the range -1 to 1
	//Vertical default mapped to up and down arrow keys
	var translation : float = Input.GetAxis ("Vertical") * speed;
	//Horizontal default mapped to left and right arrow keys
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	
	// Make it move X meters per second instead of 10 meters per frame...
	translation *= Time.deltaTime;
	//rotate movement x meters per secone
	rotation *= Time.deltaTime;
	
	// Move translation along the object's x-axis
	transform.Translate(0 ,translation ,0);
	
	// Rotate around our object's y-axis
	transform.Rotate(rotation , 0, 0);
	
	//set the boundaries of the playable field (bounding box) for the x/z field
	//set vertical limits
	transform.position.x = Mathf.Clamp(transform.position.x,-11,11);
	//set horizontal limits
	transform.position.z = Mathf.Clamp(transform.position.z, -15,15);
	
	if(Input.GetKeyDown("space"))
	{
		Instantiate(projectile, socketProjectile.position, socketProjectile.rotation);
		audio.clip = shootFX;
		audio.Play();
	}
	
	if(Input.GetButton("FwdUp"))
	{
		
		var newJet1 = Instantiate(jetParticle, jetSocket.position, jetSocket.rotation);
	}
	
	if(Input.GetButton("Dwn"))
	{
		
		var newJet2 = Instantiate(jetParticle, jetSocket2.position, jetSocket2.rotation);
	}
	
	//create shield if e is pressed
	if(Input.GetKeyDown(shieldButton))
	{
		if(!shieldOn)
		{
			var clone = Instantiate(shieldMesh, transform.position, transform.rotation);
			clone.transform.parent = gameObject.transform;
			shieldOn = true;
		}
		
	}
	
	if (GameObject.FindWithTag("jet"))
	{
		Destroy(GameObject.FindWithTag("jet"),.01);
	}
	//long way of movement for the player
	/*
	if(Input.GetKey("up"))
	{
		transform.Translate(0,speed*Time.deltaTime,0);
	}
	if(Input.GetKey("down"))
	{
		transform.Translate(0,-speed*Time.deltaTime,0);
	}
	if(Input.GetKey("right"))
	{
		transform.Rotate(rotationSpeed*Time.deltaTime,0,0);
	}
	if(Input.GetKey("left"))
	{
		transform.Rotate(-rotationSpeed*Time.deltaTime,0,0);
	}
	*/
	
	//when Player position is "x" number then position equals x
	
	/*
	if(transform.position.x>=10)
	{
		transform.position.x=10;
	}
	if(transform.position.x<=-10)
	{
		transform.position.x=-10;
	}
	if(transform.position.z>=15)
	{
		transform.position.z=15;
	}
	if(transform.position.z<=-15)
	{
		transform.position.z=-15;
	}
	*/
}