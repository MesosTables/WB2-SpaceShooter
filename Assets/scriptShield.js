//Shield Script

//Inspector Variables
var shieldStrength: int = 2;

function OnTriggerEnter (other : Collider) 
{
	if(other.gameObject.tag =="asteroid")
	{
		shieldStrength-=1;
	}
}

function Update()
{
	if(shieldStrength <= 0 )
	{
		Destroy(gameObject);
	}
}