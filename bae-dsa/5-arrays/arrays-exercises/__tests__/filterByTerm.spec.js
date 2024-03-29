//example jest test

describe('filter function',() => {
    test('it should filter by a search term(link)',() => {
        const input = [
            {id: 1, url: 'https://www.url1.dev'},
            {id: 2, url: 'https://www.url2.dev'},
            {id: 3, url: 'https://www.link3.dev'}
        ]
        const output = [{id: 3, url: 'https://www.link3.dev'}]

        expect(filterByTerm(input, 'link')).toEqual(output)

        expect(filterByTerm(input, 'LINK')).toEqual(output)
    })
    //test stuff
})

function filterByTerm(inputArr, searchTerm){
    const regex = new RegExp(searchTerm, 'i')
    return inputArr.filter(function(arrayElement){
        return arrayElement.url.match(regex)
    })
}

//accidentally pushed github changes early 9-25-2022