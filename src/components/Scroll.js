import React from "react";


const Scroll = (props) => {
    return (
        <div class="overflow-y-auto h-5/6 ...">
            {props.children}
        </div>
    );
}

export default Scroll;