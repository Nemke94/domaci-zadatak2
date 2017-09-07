function faktorijel(){

	var i, no, fact;

	fact = 1;

	no = Number(document.getElementById("number").value);

	for(i=1; i<=no; i++)  
	{
	fact= fact*i;
	}  
	document.getElementById("answer").value= fact;
}