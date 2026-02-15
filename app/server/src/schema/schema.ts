const typeDefs = `

    type User {
        id: ID!
        name: String!
        email: String!
    }
        
    type Query{
        users: [User]
    }
`

export { typeDefs }
