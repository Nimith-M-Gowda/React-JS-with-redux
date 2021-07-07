import React from 'react';

function Customhook() {
const [salary ,setsalary] = React.useState (0);

let salaryincrement = () => {
    return setsalary(Number(salary) + 500);
}
    return {salary , salaryincrement}
}


export default Customhook