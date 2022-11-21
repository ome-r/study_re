// const promiseFunction = new Promise((resolve, reject) => {
//     const add = (a, b) => a + b;
//     resolve(add(2, 2));
//   });
  
//   promiseFunction.then((response) => {
//     console.log(response);
//   }).catch((error) => {
//     console.log(error);
//   });

// try 안에 원래 쓸 코드 적기


const promiseFunction = ()=> {
    return new Promise((resolve, reject) => {
        const add = (a, b) => a + b;
      
        resolve(add(2, 2));
      })
};

async function promiseFunct () {
    try { 
        var result = await promiseFunction();
        console.log(result);
      }
      catch(error) {
        console.log(error);
      }
    }

    promiseFunct ();

//   try{ let result = await promiseFunction(response);
//     console.log(response);
// }
//     catch(error) {
//         console.log(error);
//     };
    
    // async function test() {
    //     try {
    //         var user = await fetchUser();
    //         if (user.id === 1) {
    //             var todo = await fetchTodo();
    //             console.log(todo.title);
    //         }
    
    //     } catch(err) {
    //         console.log(error);
    //     }
    // }
 

//   promiseFunction.try((response) => {
//     console.log(response); 
// })
// .catch((error) => {
//     console.log(error);
// });
