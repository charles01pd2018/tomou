import gql from 'gql-tag';

export default FoldersSchemas = gql`
    type Folder {
        name: String!
    }

    input NewFolderInput {
        name: String!
    }

    input DeleteFolderInput {
        id: ID!
    }

    type Query {
        folderList: [Folder]!
    }

    type Mutation {
        newFolder(input: NewFolderInput!): Folder!
        deleteFolder(input: DeleteFolderInput!): Folder!
    }
`