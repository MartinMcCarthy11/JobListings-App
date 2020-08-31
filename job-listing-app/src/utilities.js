const helperFunctions = {    
    filteredTags : (allTags, filterTag) =>{
        return allTags.filter(tag => filterTag.includes(tag));
      },

    filterJobs : (filterTags, jobs) => {
        // console.log(filterTags)
        // console.log(jobs)
        let filteredArray = [...jobs].filter((e) => e.languages);
        //console.log(filteredArray)
        let arr = filteredArray.map(({languages, id}) => ({languages, id}));
        //console.log(arr)
        let arr1 = filterTags.length > 0 ? arr.filter(x => x.languages.some(r=> filterTags.includes(r))) : arr;
        //console.log(arr1)
        let arr2 = arr1.map(x => x.id);
        //console.log(arr2)
    
        let result = jobs.filter(job => {
            return arr2.indexOf(job.id) !== -1 ? job : "";
        })
        //console.log(result)
    
        if (result.length !== jobs.length){
            return result;
        }
    }
        
}
     
export default helperFunctions;

