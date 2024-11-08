// result project 
// ৮০ - ১০০	A+	
// ৭০ - ৭৯	A	
// ৬০ - ৬৯	A-	
// ৫০ - ৫৯	B	
// ৪০ - ৪৯	C	
// ৩৩ - ৩৯	D	
// ০ - ৩২	F	

let grade =prompt("Enter Any Grade:");

let result =(grade >= 80 || grade == 100) ? "A+" :
            (grade >= 70 || grade ==79) ? "A"  :
            (grade >= 60 || grade ==69) ? "A-" :
            (grade >= 50 || grade ==59) ? "B"  :
            (grade >= 40 || grade == 49) ? "C" :
            (grade >= 33 || grade ==39) ? "D" :
            "F";

            console.log(result)

