import fetchData from "../../utils/fetchData"

export const enterListener = (e, component) => {
  if(e.keyCode === 13){
    e.target.blur()
    fetchData(component, e.target.value)
    e.target.value = ""
  }
}

export const handleFocus = (input, setSearch) => {
  setTimeout(() => {
    if(input === document.activeElement){
      handleFocus(input)
    }else{
      setSearch(false)
    }
  }, 1000)
}
