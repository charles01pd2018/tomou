// dependencies
import gql from 'gql-tag';


const storageSchemas = gql`
    union SubStorageItem = Folder | File

    type File {
        _id: ID!
        name: String!
        creationDate: String!
        interactionDate: String
        updateDate: String
        "idk what I am going to do with the data property yet"
        data: String
    }

    """Folder holds files or subfolders for the user"""
    type Folder {
        _id: ID!
        name: String!
        "List of folders or files within the folder"
        subItemList: [SubStorageItem]!
        creationDate: String!
        interactionDate: String
        updateDate: String
    }

    input NewFolderInput {
        _id: ID!
        name: String!
        creationDate: String!
        interactionDate: String
        updateDate: String
    }

    input DeleteFolderInput {
        _id: ID!
    }

    input UpdateFolderInteractInput {
        _id: ID!
        interactionDate: String!
    }

    input UpdateFolder {
        _id: ID!
        name: String
        interactionDate: String
        updateDate: String
    }

    extend type Query {
        folderList: [Folder]!
    }

    extend type Mutation {
        newFolder(input: NewFolderInput!): Folder!
        deleteFolder(input: DeleteFolderInput!): Folder!
        updateFolderInteract(input: UpdateFolderInteractInput!): [Folder!]!
    }
`

export default storageSchemas;