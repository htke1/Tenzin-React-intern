
import { Button, Card } from 'semantic-ui-react'
function QuizCard({quiz}){
return(

    <Card key={quiz.id}>
      <Card.Content>
        <Card.Header>{quiz.category}</Card.Header>
        <Card.Meta>{quiz.difficulty}</Card.Meta>
        <Card.Description>
         {quiz.question}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <p>A) {quiz.answers.answer_a}</p>
          <p>B) {quiz.answers.answer_b}</p>
          <p>C) {quiz.answers.answer_c}</p>
          <p>D) {quiz.answers.answer_d}</p>
        <div className='ui four buttons'>
          <Button basic >
            A
          </Button>
          <Button basic >
          B
          </Button>
          <Button basic>
          C
          </Button>
          <Button basic>
          D
          </Button>
        </div>
      </Card.Content>
    </Card>
)
}

export default QuizCard