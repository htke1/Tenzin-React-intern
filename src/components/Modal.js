export const Modal = ({noHandler, yesHandler}) =>{
    
    return(
        <>
        <h4>Are you ready?</h4>
      <button onClick={yesHandler}>haan</button>
      <button onClick={noHandler}>nahin</button>
        </>
    )
}

