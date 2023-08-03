import React, { useState } from 'react';

function StateProps({data, name}) {
    console.log(data, name);

    let [count, setCount] = useState(0);
    console.log(count);

    function plus() {
        setCount(++count);
    }

    return (
        <div>
            여기는 뭐하는데입니까?????????
            <button onClick = {plus}>{count}</button>
        </div>
    )
}

export default StateProps;