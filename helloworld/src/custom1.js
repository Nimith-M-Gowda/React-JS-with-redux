import React,{useState} from 'react';

let Usefunc = () => {
const [state, setstate] = useState(0)
let incre = () => {
    setstate(state + 1)
}

return {state,incre }

}
export default Usefunc ;