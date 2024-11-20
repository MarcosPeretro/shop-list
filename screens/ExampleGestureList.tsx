import { useState } from "react";

export function ExampleGestureList(){
    const [data,setData] = useState ([
        {id: "1", text: "Item 1"}
        {id: "2", text: "Item 2"}
    ])
    return(
        <>
            <Animated.FlatList
                data={data}
            />
        </>
    );
}