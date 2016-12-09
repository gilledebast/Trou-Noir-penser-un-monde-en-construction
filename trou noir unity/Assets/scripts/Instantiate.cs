using UnityEngine;
using System.Collections;

public class Instantiate : MonoBehaviour {

	public GameObject light;


	void Start () {}
	
	void Update () {
		Instantiate (light);
	}
}
