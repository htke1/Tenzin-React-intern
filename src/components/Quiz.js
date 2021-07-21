import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react/cjs/react.development"
import QuizCard from "../utils/quizCard";
import { Grid,  GridColumn, Placeholder, Card } from 'semantic-ui-react'

export const Quiz = ({category})=>{

    const [quizes,setQuiz] = useState([]);
    useEffect(()=>{
     const quizData= async ()=>{
         
      const response =  await axios.get(`https://quizapi.io/api/v1/questions?category=${category}`,{
         headers: {
             'X-Api-Key' : "iRaE87UHArBF1ginXT7u7smKCcSkcqRkrcJp152a"
         }
     })
    const {data} = response;
    setQuiz(data);
 }  
quizData();


},[])
    return quizes.length?(
        <>

        <h2>Quiz section</h2>
        <label> Choose difficulty: </label>
        <select >
           
            <option>Any</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select> <hr/>
        <Grid divided='vertically'>
    <Grid.Row columns={3}>
      
        {
            quizes.map((quiz)=>{
             return  (
               <GridColumn> <QuizCard quiz={quiz}/>
               </GridColumn>)
            })
        }
        </Grid.Row>
        </Grid>
        </>
    ):( <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>)
}