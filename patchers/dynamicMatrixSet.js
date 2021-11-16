// 
// dynamicMatrixSet.js
// 
// Dynamic matrixset for storing jitter matrices
// Can also be of arbitrary dimensions and types
// 

autowatch = 1;

// array containing all JitterMatrix objects
var matrixSet = [];

// store the matrix at a specified index
// creates a copy of the matrix with a unique name
function index(i, mtx){
	var tmp = new JitterMatrix();
	tmp.frommatrix(mtx);

	matrixSet[i] = tmp;
}

// output the matrix at the specified index
// if index out of range outputs nothing
function outputmatrix(i){
	if (matrixSet[i] !== undefined){
		outlet(0, "jit_matrix", matrixSet[i].name);
	}
}

// clear all the matrices
function clear(){
	matrixSet = [];
}
