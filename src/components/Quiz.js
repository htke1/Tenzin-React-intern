import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react/cjs/react.development"
import QuizCard from "../utils/quizCard";
import { Grid, GridColumn, Placeholder } from 'semantic-ui-react'

export const Quiz = ()=>{

    const [quizes,setQuiz] = useState([]);
    useEffect(()=>{
     const quizData= async ()=>{
         
      const response =  await axios.get('https://quizapi.io/api/v1/questions',{
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
    ):(<Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>)
}