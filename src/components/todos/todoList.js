
import React, { useState } from 'react'

export default function TodoList(props) {
    const [checked, setChecked] = useState(false);
    const { title, id, deleteTodo,  } = props;
    
    const handleChange = () => {
        setChecked(!checked);
      };

    return (
        <div>

            <input  />
            <input onChange={handleChange} type={'checkbox'}  />
            {title}
            <button onClick={() => deleteTodo(id)}> Delete </button>
        </div>
    )

}

