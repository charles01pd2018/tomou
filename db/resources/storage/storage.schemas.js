// dependencies
import gql from 'gql-tag';


const storageSchemas = gql`
    """Folder holds files or subfolders for the user"""
    type Folder {
        _id: ID!
        userID: ID!
        name: String!
        "Get the creation Date"
        creationDate: String!
    }

    input FolderListInput {
        userID: ID!
    }

    input NewFolderInput {
        _id: ID!
        "User ID of the person who created the new folder. This field cannot be queried for security purposes and only supplied for mutations."
        userID: ID!
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
        folderList(input: FolderListInput!): [Folder]!
    }

    extend type Mutation {
        newFolder(input: NewFolderInput!): Folder!
        deleteFolder(input: DeleteFolderInput!): Folder!
        reorderFolderList(input: ReorderFolderListInput!): [Folder]!
    }
`

export default storageSchemas;