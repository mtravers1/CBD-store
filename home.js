const card=[
    {name:"OG", type:"indica", description:"earthy put a nigga to sleep", price:23.99, size:3.5},
    {name:"OG", type:"indica", description:"earthy put a nigga to sleep", price:23.99, size:3.5},
]

card.map((c)=>(
    <div>
        <h1>{c.name}</h1>
        <h3>{c.type}</h3>
        <h3>{c.description}</h3>
        <h3>{c.price}</h3>
        <h3>{c.type}</h3>
        <h3>{c.size}</h3>




    </div>
))