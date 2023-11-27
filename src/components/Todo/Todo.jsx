const Todo = () =>{
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
          <div className="flex items-center" >
            <span className="border-solid rounded-full  border border-gray-500 p-3 cursor-pointer"></span>
            <p className="pl-3">
              Todo Item
            </p>
          </div>
        </div>
      )
}

export { Todo }