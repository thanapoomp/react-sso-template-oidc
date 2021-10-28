import React from 'react'

function Test() {
  const [state, setState] = React.useState({})
    const getData=()=>{
        fetch('config.json'
        ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setState(myJson)
          });
      }

      React.useEffect(() => {
        getData()
      }, [])

    return (
        <div>
          {JSON.stringify(state)}
        </div>
    )
}

export default Test
