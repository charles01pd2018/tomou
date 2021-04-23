import gql from 'graphql-tag';

export const FOLDER_SCHEMA = gql`
    type Folder {
        name: String!
        notes: [Note]!
        subFolders: [Folder]!
    }
`;