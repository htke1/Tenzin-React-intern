import { Label } from 'semantic-ui-react'
import React from 'react'
import linux from '../linux.png'
import devops from '../devops.png'
import devs from '../progamming.jpg'
import { Modal, Button } from 'semantic-ui-react'
export const Characters = ({characterSet})=>{
  const [open, setOpen] = React.useState(false)
    return(
<>
<Modal
  onClose={() => setOpen(false)}
  onOpen={() => setOpen(true)}
  open={open}
  trigger={<Button>Show Modal</Button>}
>
<Modal.Header>Select a Category</Modal.Header>
  <Modal.Content>
 <Label as='a'name="Linux" image onClick={(e)=>characterSet(e.currentTarget.name)}>
      <img src={linux} alt="linux" />
      Linux
    </Label>
    <Label as='a'name="DevOps" image onClick={(e)=>characterSet(e.currentTarget.name)}>
      <img src={devops} alt="devops"/>
      DevOps
    </Label>
    <Label as='a' name="Cloud" image onClick={(e)=>characterSet(e.currentTarget.name)}>
      <img src={devs} alt="developer" />
      Cloud 
    </Label>
    </Modal.Content>
    </Modal>
</>
    )
}