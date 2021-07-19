import { Label } from 'semantic-ui-react'
export const Characters = ({characterSet})=>{
    return(
<>
 <Label as='a'name="Joey" image onClick={(e)=>characterSet(e.currentTarget.name)}>
      <img src='/images/avatar/small/joe.jpg'  />
      Joe
    </Label>
    <Label as='a'name="Elliot" image onClick={(e)=>characterSet(e.currentTarget.name)}>
      <img src='/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a' name="Stevie" image onClick={(e)=>characterSet(e.currentTarget.name)}>
      <img src='/images/avatar/small/stevie.jpg' />
      Stevie
    </Label>
</>
    )
}