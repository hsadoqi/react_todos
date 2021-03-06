export default function addList(list){
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({list})
        }

        fetch(`http://localhost:3000/lists`, options)
        .then(res => res.json())
        .then(list => {
            dispatch({type: "ADD_LIST", payload: list})
        })
    }
}