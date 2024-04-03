import { ITask } from "./types/tasks";

const baseUrl = 'https://albatechy.eu/todo-api/';
let username = '';
let password = '';
let base64 = require('base-64');
let hash = 'ZGV2aWNlYWk6Y2Q0MDA3bG0zMTc=';

let headers = new Headers();
//headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));
//headers.set('Authorization', 'Basic ' + 'ZGV2aWNlYWk6Y2Q0MDA3bG0zMTc=');
//headers.set('Authorization', 'Basic ' + hash);
//console.log(base64.encode(username + ":" + password));
//headers.set('Authorization', 'Basic ' + hash);

export const getAllTodoos = async (): Promise<ITask[]> => {
    const res = await fetch (`${baseUrl}`, {method:'GET',
    // headers: headers, 
    cache: 'no-store'
    });
    const todos = await res.json();
    return todos;
}

export const addTodo = async(todo: ITask): Promise<ITask>  => {
    //headers.set('Content-Type', 'application/json');
    //headers.set('Accept', 'application/json');
    //headers.set('Origin','http://localhost:3001');
    //headers.set('Access-Control-Allow-Origin', 'no-cors');
    //headers.set('Access-Control-Allow-Credentials', 'true');
    // headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // console.log(headers.get('Content-Type'));
    // console.log(headers.get('Authorization'));

    //console.log(JSON.stringify("name") + ":" + JSON.stringify(todo.name))
    //const body_text = "{\"name\":\"test\"}";
    //console.log(body_text);
    
    //const res = await fetch(`${baseUrl}`, {mode: 'no-cors', method:'POST', headers: headers, 
     //   body: JSON.stringify(todo)
       // body: body_text
   // })
   //console.log(JSON.stringify({name : todo.name}))

    const res = await fetch(`${baseUrl}`, {
        // mode: 'no-cors', 
        method:'POST', 
        headers: {
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(todo)
   // body: body_text
})
    // console.log(JSON.stringify(res.headers))
    const newTodo = await res.json();
    return newTodo;
}

// export default function hashPass(unHashPass: string){
//     return bcrypt.hash(unHashPass, 10).then(function(hash: string){
//         console.log(hash);
//         return hash;
//     })
// }

export const editTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    const updatedTodo = await res.json();
    return updatedTodo;
  }
  
  export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    })
  }