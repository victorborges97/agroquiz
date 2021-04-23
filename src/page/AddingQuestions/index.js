import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/core"
import { useUser } from '../../context';

import { 
  Container,
} from './styled';

import api from '../../services/api';

import FormkArray from '../../components/FormkArray';

export default function AddingQuestions() {
  const { User } = useUser();
  const [totalQuestionApi, setTotalQuestionApi] = useState(0)

  const { navigate, goBack } = useNavigation()

  const INITIAL_QUESTION =  { 
    "id": ``,
    "question": "",
    "answer": "",
    "data_register": new Date(),
    "isRequired": false,
    "localization": {
        "lat": "",
        "log": ""
    }
  }

  const INITIAL_INFO = {
    "id": totalQuestionApi+1,
    "title": "", 
    "user": User.id,
    "data_register": new Date(), 
    "questions": []
  }

  async function getTotalData() {
    try {
      const { data } = await api.get(`questions`)
      setTotalQuestionApi(data.length);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTotalData()
  },[])

  

  return (

      <Container>
        
        <FormkArray
          totalQuestionApi={totalQuestionApi}
        />
        
      </Container>

  );
}



//AddingQuestions

/**
 * {
            loading ? 
              <Text>Adicione suas perguntas...</Text>
            :
            questions.map((item, index) => (
              <SeeQuestion
                key={index}
                question={item}
                onPressSwitch={(resp) => { toggleQuestions(index, resp, "isRequired") }}
                onPressClear={() => { removeQuestion(index) }}
                OnChange={(text) => { toggleQuestions(index, text, "question") }}
              />
            ))
          }
 */
