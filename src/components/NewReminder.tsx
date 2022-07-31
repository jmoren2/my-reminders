import {useState} from 'react'
import axios from 'axios'

function NewReminder() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) =>
    {
        setTitle(e.currentTarget.value)
    }

    const handleBodyChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
    {
        setBody(e.currentTarget.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        
        const newReminder = {
            title: title,
            body: body
        }

        let response = await axios.post('http://10.0.0.202:4000/api/reminder/create', newReminder)
        console.log(response)
        
        resetState()
    }

    const resetState = () =>
    {
        setBody('')
        setTitle('')
    }

  return (
    <div>
      <div className='container'>
        <h3>New Reminder</h3>
          <div className='form-div'>
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder='Title' onChange={handleTitleChange} value={title} className='form-control form-group' />
                  <textarea placeholder='Body' onChange={handleBodyChange} value={body} className='form-control form-group' />
                  <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
              </form>
          </div>
      </div>
    </div>
  );
}

export default NewReminder;