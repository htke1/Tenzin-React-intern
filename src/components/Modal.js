export const Modal = ({noHandler, yesHandler}) =>{
    
    return(
        <>
        <h2>Simple modal</h2>
        <h4>Are you ready?</h4>
      <button onClick={yesHandler}>yes</button>
      <button onClick={noHandler}>no</button>
        </>
    )
}

