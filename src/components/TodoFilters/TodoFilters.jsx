import { FIlterButtonContainer, FilterButton, FiltersContainer, ItemsLeft } from "./TodoFilters.components"
const TodoFilters = ({total,activeFilter,showAllTodos,showActiveTodos,showCompletedTodos,handleClearComplete}) => {
    return (
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FIlterButtonContainer>
                <FilterButton action={()=>{showAllTodos()}} active={activeFilter} filter='All'/>
                <FilterButton action={()=>{showActiveTodos()}} active={activeFilter} filter='Active'/>
                <FilterButton action={()=>{showCompletedTodos()}} active={activeFilter} filter='Completed'/>
            </FIlterButtonContainer>
            <button onClick={()=>handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
            </button>
        </FiltersContainer>
    )
}

export {TodoFilters}