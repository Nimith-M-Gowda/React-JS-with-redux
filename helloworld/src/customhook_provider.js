import React,{useState,useEffect} from 'react'

function Usecustomhook_provider() {

        useEffect( () => {
            let f = fetch('https://cors-anywhere.herokuapp.com/http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript')
            console.log(f);
        })



        const [salary, setsalary] = useState(0);


        let incementsalary = () => {
            setsalary(salary+500)
        }
        return {salary,incementsalary,}
   
}

export default Usecustomhook_provider 


// providev: = building particles and selling 
// selling 3 thinghs ::: 1.useEffect 2.state 3.function 