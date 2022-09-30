import React from 'react'

function card(props){
    const dragStart = e=> {
        e.dataTransfer.setData('card_id,traget.id');

        setTimeout(()=>{
            EventTarget.style.display="none";
        }, 0);
    }

    const dragOver= e=> {
        e.stopPropagation();
    }
    return(
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            >
                {props.children }
            </div>
    )
}

export default Card