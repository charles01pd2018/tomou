// dependencies
import gql from 'gql-tag';


const storageSchemas = gql`
    """Folder holds files for the user"""
    type Folder {
        _id: ID!
        name: String!
        "Get the creation Date"
        creationDate: String!
    }

    input NewFolderInput {
        _id: ID!
        createdBy: String!
        name: String!
        creationDate: String!
    }

    input DeleteFolderInput {
        id: ID!
    }

    extend type Query {
        folderList: [Folder]!
    }

    extend type Mutation {
        newFolder(input: NewFolderInput!): Folder!
        deleteFolder(input: DeleteFolderInput!): Folder!
    }
`

export default storageSchemas;