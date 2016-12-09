#pragma strict

private var UDPHost : String = "127.0.0.1";
private var listenerPort : int = 8000;
private var broadcastPort : int = 57131;
private var oscHandler : Osc;

private var OpenBCIEvent : int = 0;


var pos_min = 20;
var pos_max = 60;

private var pos = (pos_max-pos_min)/2;

var wave = true;

public function Start (){
	
	var udp : UDPPacketIO = GetComponent("UDPPacketIO");
	udp.init(UDPHost, broadcastPort, listenerPort);
	oscHandler = GetComponent("Osc");
	oscHandler.init(udp);
			
	oscHandler.SetAddressHandler("/OpenBCITest", OpenBCITest);

}
Debug.Log("Running");

function Update () {

	Debug.Log(OpenBCIEvent);

	if( OpenBCIEvent == 1 || Input.GetKey("b")){

		if(wave == true){
			pos--;
		} else {
			pos++;
		}

		if(pos < pos_min){
			wave = false;
		} else if(pos > pos_max){
			wave = true;
		}

	} else {
		//pos = 60;
	}

	transform.position = new Vector3(0, pos, 0);
}	

public function OpenBCITest(oscMessage : OscMessage) : void
{	
	Osc.OscMessageToString(oscMessage);
	OpenBCIEvent = oscMessage.Values[0];
} 