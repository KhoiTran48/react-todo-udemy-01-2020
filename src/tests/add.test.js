const add = (a, b) => a+b

const generateGreeting = (name="Anomynous") => `Hello ${name}`

test("adding", ()=>{
    const result = add(3,4)
    expect(result).toBe(7)
})

test("generate greeting from name", ()=>{
    const result = generateGreeting("Khoi")
    expect(result).toBe("Hello Khoi")
})

test("generate greeting for no name", ()=>{
    const result = generateGreeting()
    expect(result).toBe("Hello Anomynous")
})


test("testing description", ()=>{
    const actual = "";
    const expected = "";
    expect(actual).toBe(expected)
})

