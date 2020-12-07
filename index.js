console.log('%c-------START DEBUG------','background: #222; color: #bada55')
data = document.getElementById('app').__vue__._data
list_keys = Object.keys(data)
for(key of list_keys){
    let value = data[key]
    if(Array.isArray(value)){
        value = [...value]        
    }
    if(typeof value === 'object' && value !== null){
        value = {...value}
    }
    console.log(key,value)
}
console.log('%c-------END DEBUG------','background: #222; color: #bada55')