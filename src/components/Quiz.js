import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react/cjs/react.development"
import QuizCard from "../utils/quizCard";
import { Grid,  GridColumn, Placeholder, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
export const Quiz = ({category})=>{

    const [quizes,setQuiz] = useState([]);
    const [pageNo, setPageNo]=useState(0);

    const quizesPerPage = 1;
    const pagesVisited = pageNo * quizesPerPage;
    
    const displayQuiz = quizes.slice(pagesVisited,pagesVisited + quizesPerPage).map((quiz)=>{
      return (
          <GridColumn key={quiz.id}> <QuizCard quiz={quiz}/>
          </GridColumn>
          )
      
    })


    const pageCount = Math.ceil(quizes.length / quizesPerPage);

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


const changePage = ({ selected }) => {
  setPageNo(selected);
};
    return quizes.length?(
        <>

        <h2>Quiz section</h2>
        <label> Choose difficulty: </label>
        <select >
           
            <option>Any</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select> 
          <Link to="/admin"><button>Admin Board</button></Link>
          <hr/>
        <Grid divided='vertically'>
    
      
       {displayQuiz}
      
        </Grid>
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
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