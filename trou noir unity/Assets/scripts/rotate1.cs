using UnityEngine;
using System.Collections;

public class rotate1 : MonoBehaviour {

	void Update() {
		transform.Rotate(Vector3.left * Time.deltaTime);
		transform.Rotate(Vector3.down * Time.deltaTime, Space.World);
	}
}
