export const Modal = ({noHandler, yesHandler}) =>{
    
    return(
        <>
        <h4>Are you ready?</h4>
      <button onClick={yesHandler}>yes</button>
      <button onClick={noHandler}>no</button>
        </>
    )
}

