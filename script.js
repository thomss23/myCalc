var button = document.getElementsByClassName("btn");
var result = document.getElementById("calculations");
var final = document.getElementById("final")
var calculator = {
	firstOperand:"",
	isSign:false,
	secondOperand:"",
	isZero:false,
	isOperator:true,
	calc:null,
	operator:""

};

for(var i=0;i<button.length;i++) {
	button[i].addEventListener("click", function() {
		if(this.classList[1]==="number" && calculator.isSign===false ){
				calculator.firstOperand=calculator.firstOperand + this.innerHTML;
				result.innerHTML = result.innerHTML + this.innerHTML;
				
		} else if (this.classList[1]==="number" && calculator.isSign===true) {
			calculator.secondOperand=calculator.secondOperand + this.innerHTML;
			result.innerHTML = result.innerHTML + this.innerHTML;

		} else if(this.classList[1]==="sign" && calculator.isOperator===true) {
			calculator.isSign=true;
			result.innerHTML=result.innerHTML+this.innerHTML;
			calculator.operator=this.innerHTML;
			calculator.isOperator=false;

		} else if(this.classList[1]==="equals"){
			
			if(calculator.operator==="+"){
				calculator.calc = Number(calculator.firstOperand)+Number(calculator.secondOperand);
			}
			if(calculator.operator==="-"){
				calculator.calc = Number(calculator.firstOperand)-Number(calculator.secondOperand);
			}
			if(calculator.operator==="X"){
				calculator.calc = Number(calculator.firstOperand)*Number(calculator.secondOperand);
			}
			if(calculator.operator==="/"){
				calculator.calc = Number(calculator.firstOperand)/Number(calculator.secondOperand);
			}

			calculator.firstOperand="";
			calculator.secondOperand="";
			final.innerHTML=String(calculator.calc);
			calculator.calc=null;
			calculator.isOperator=true;
			calculator.isSign=false;
			result.innerHTML=""

		} else if(this.classList[1]==="clear"){
			calculator.firstOperand="";
			calculator.isSign=false;
			calculator.secondOperand="";
			calculator.calc=null
			result.innerHTML="";
			final.innerHTML="";
		}
	});
}




