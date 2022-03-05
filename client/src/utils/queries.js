import { gql } from "@apollo/client";

export const QUERY_ME = gql`
    {
        me {
            _id
            first_name
            last_name
            email
            username
            inbox {
                _id
                sender_name
                sender_email
                message_text
                created_at
                has_been_read
            }
        }
    }
`;