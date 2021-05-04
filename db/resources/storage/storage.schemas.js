// dependencies
import gql from 'gql-tag';


const storageSchemas = gql`
    """Folder holds files or subfolders for the user"""
    type Folder {
        _id: ID!
        name: String!
        "Get the creation Date"
        creationDate: String!
    }

    input NewFolderInput {
        _id: ID!
        name: String!
        creationDate: String!
    }

    input DeleteFolderInput {
        _id: ID!
    }

    input ReorderFolderListInput {
        _id: ID!
    }

    extend type Query {
        folderList: [Folder]!
    }

    extend type Mutation {
        newFolder(input: NewFolderInput!): Folder!
        deleteFolder(input: DeleteFolderInput!): Folder!
        reorderFolderList(input: ReorderFolderListInput!): [Folder!]!
    }
`

export default storageSchemas;